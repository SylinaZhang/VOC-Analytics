import os
import gzip
import boto3
import json
import math

from opensearchpy import OpenSearch, RequestsHttpConnection, AWSV4SignerAuth
from opensearchpy.helpers import bulk
from sklearn.cluster import KMeans



   
def euclidean_distance(vec1, vec2):
    return math.sqrt(sum((v1 - v2) ** 2 for v1, v2 in zip(vec1, vec2)))

def lambda_handler(event, context):
    user_prompt = str(event.get('system_prompt'))
    host = 'xxx.es.amazonaws.com'
    port = 443
    index_name = 'reviews-index-2025'
    
    # 初始化 OpenSearch 客户端
    credentials = boto3.Session().get_credentials()
    auth = AWSV4SignerAuth(credentials, 'us-west-2', 'es')
    client = OpenSearch(
        hosts=[{'host': host, 'port': port}],
        http_auth=auth,
        use_ssl=True,
        verify_certs=True,
        connection_class=RequestsHttpConnection
    )
    
    # 获取所有评论
    all_reviews = fetch_all_reviews(client, index_name)
    
    # 聚类
    representative_reviews = cluster_reviews(all_reviews, n_clusters=50)
    
    # 提取评论文本
    reviews = [item["review"] for item in representative_reviews]
    
    # 生成标签
    tags = generate_tags(reviews,user_prompt)
    
    return {
        'statusCode': 200,
        'body': json.dumps(tags)
    }

    
def fetch_all_reviews(client, index, size=10000):
    query = {
        "size": size,
        "_source": ["review_id", "review_embedding", "review"]
    }
    response = client.search(index=index, body=query, scroll="2m")
    reviews = response["hits"]["hits"]
    return [{"review_id": r["_id"], "review_embedding": r["_source"]["review_embedding"], "review": r["_source"]["review"]} for r in reviews]

def cluster_reviews(reviews, n_clusters=50):
    # 提取嵌套列表作为嵌套数组（直接用原生 Python 列表）
    embeddings = [r["review_embedding"] for r in reviews]

    # 聚类
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    labels = kmeans.fit_predict(embeddings)
    
    # 聚类结果存储
    clustered_reviews = {}
    for i, label in enumerate(labels):
        if label not in clustered_reviews:
            clustered_reviews[label] = reviews[i]
        else:
            # 计算与聚类中心的距离，使用自定义的距离函数
            current_dist = euclidean_distance(reviews[i]["review_embedding"], kmeans.cluster_centers_[label])
            existing_dist = euclidean_distance(clustered_reviews[label]["review_embedding"], kmeans.cluster_centers_[label])
            
            if current_dist < existing_dist:
                clustered_reviews[label] = reviews[i]
    
    return list(clustered_reviews.values())


def generate_tags(reviews,user_prompt):
    system_prompt = 'You are a professional Customer Feedback Specialist in analyzing product reviews, based on the historical comments about the product.'
    
    llm_prompt = '''
    <aspects>
    <aspect>advantages</aspect>
    <aspect>disadvantages</aspect>
    <aspect>motivations</aspect>
    <aspect>expectations</aspect>
    </aspects>
    - Your job is to summarize terms in reviews from the following aspects in <aspects> tags.
    - The each term you summarized must be simplified less than 10 words with its corresponding sentiment "positive" or "negative".
    - Please ensure that the terms within each aspect are not semantically similar and limit the number of terms per aspect to between 5 and 10. 
    - Please answer in English lowercase letters in JSON format like:
    {
      "advantages": [
        {"term": "term1", "sentiment": "positive"},
        {"term": "term2", "sentiment": "positive"},
        ...
      ],
      "disadvantages": [
        {"term": "term1", "sentiment": "negative"},
        {"term": "term2", "sentiment": "negative"},
        ...
      ],
      "motivations": [
        {"term": "term1", "sentiment": "positive"},
        {"term": "term2", "sentiment": "positive"},
        ...
      ],
      "expectations": [
        {"term": "term1", "sentiment": "positive"},
        {"term": "term2", "sentiment": "positive"},
        ...
      ]
    }
    - Conduct a product review analysis from the aspect categories mentioned above based on the following reviews, ensuring that there are no semantically similar terms within each aspect:
    ''' + user_prompt+ json.dumps(reviews)

    bedrock_client = boto3.client(service_name="bedrock-runtime", region_name="us-west-2")
    
    system_list = [{"text": system_prompt}]
    message_list = [
        {
            "role": "user",
            "content": [{"text": llm_prompt}],
        }
    ]
    inf_params = {"max_new_tokens": 5000, "top_p": 0.1, "top_k": 20, "temperature": 0.3}
    
    native_request = {
        "schemaVersion": "messages-v1",
        "messages": message_list,
        "system": system_list,
        "inferenceConfig": inf_params,
    }
    MODEL_ID = "us.amazon.nova-lite-v1:0"
    
    response = bedrock_client.invoke_model(modelId=MODEL_ID, body=json.dumps(native_request))
    response_body = json.loads(response.get('body').read())
    content_text = response_body["output"]["message"]["content"][0]["text"]
    
    return json.loads(content_text)