from opensearchpy import OpenSearch, RequestsHttpConnection, AWSV4SignerAuth
import boto3
import json

# 定义一个函数，用于检索并处理数据
def search_opensearch(term):
    query = {
        "query": {
            "match": {
                "combined_field": term
            }
        },
        "size": 5
    }
    
    # 初始化 OpenSearch 客户端
    credentials = boto3.Session().get_credentials()
    host = 'xxx.es.amazonaws.com'
    port = 443
    index_name = 'reviews-index-2025'
    auth = AWSV4SignerAuth(credentials, 'us-west-2', 'es')
    client = OpenSearch(
        hosts=[{'host': host, 'port': port}],
        http_auth=auth,
        use_ssl=True,
        verify_certs=True,
        connection_class=RequestsHttpConnection
    )
    response = client.search(body=query, index=index_name)
    
    # 处理返回结果
    total_matches = response.get("hits", {}).get("total", {}).get("value", 0)
    reviews = [hit["_source"].get("review", "") for hit in response.get("hits", {}).get("hits", [])]
    
    return total_matches, reviews


def process_data(data):
    results = {
        "term_percentage": {"advantages": [], "disadvantages": [], "motivations": [], "expectations": []},
        "tag_total_count": {"advantages": 0, "disadvantages": 0, "motivations": 0, "expectations": 0},
        "review_total_count": 0,
        "sentiment_percentages": {"positive_percentage": "0.00%", "negative_percentage": "0.00%"}
    }
    total_tags = 0
    positive_count = 0
    negative_count = 0

    for category, items in data.items():
        category_total_matches = 0
        term_matches = []

        # 先计算总匹配数
        for item in items:
            term = item["term"]
            total_matches, reviews = search_opensearch(term)
            item["total_matches"] = total_matches
            term_matches.append((term, total_matches))

            category_total_matches += total_matches
            total_tags += total_matches

            if item["sentiment"] == "positive":
                positive_count += total_matches
            elif item["sentiment"] == "negative":
                negative_count += total_matches

        # 计算百分比
        for term, matches in term_matches:
            percentage = (matches / max(1, category_total_matches)) * 100
            results["term_percentage"][category].append([term, f"{percentage:.2f}%"])

        results["tag_total_count"][category] = category_total_matches

    results["review_total_count"] = total_tags
    results["sentiment_percentages"]["positive_percentage"] = f"{(positive_count / max(1, total_tags)) * 100:.2f}%"
    results["sentiment_percentages"]["negative_percentage"] = f"{(negative_count / max(1, total_tags)) * 100:.2f}%"

    return results

def lambda_handler(event, context):
    tags_json = event.get('tags_json')
    
    result = process_data(tags_json)
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }
