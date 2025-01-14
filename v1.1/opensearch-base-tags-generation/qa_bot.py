import json
import boto3


def lambda_handler(event, context):
    
    accept = 'application/json'
    contentType = 'application/json'
    client = boto3.client(service_name="bedrock-runtime",region_name="us-west-2")
    llm_prompt = event.get('question')
    metric_data = event.get('metric_data')
    system_prompt = """
- 分析 BlueAnt Supertooth Light Bluetooth Speakerphone (Black) 的用户评价和反馈，总结其优点、缺点、用户动机和期望。结合产品背景信息和评论分析数据，找出关键问题，并提出可操作的改进建议，包括产品优化、售后服务改善及营销策略等方面。
- 产品背景：BlueAnt Supertooth Light Bluetooth Speakerphone (Black) ，Handsfree speakerphone for a safer, legal alternative to talking on your cell phone while driving; affix to the sun-visor via a two sided magnetic clipFull duplex, high-performance speaker; DSP noise cancellation/echo cancellation adjusts sound levels to compensate for loud engine noise, windSliding microphone shaft retracts when not in use; supports voice dial activation, redial and call rejectBluetooth version 2.0; up to 15 hours of talk time, up to 800 hours of standbyIncludes: Bluetooth handsfree unit, travel charger, 1 sun visor clips, user manual  
"""
    system_list = [    {
            "text": system_prompt
        }
    ]
    # Define a "user" message including both the image and a text prompt.
    message_list = [
        {
            "role": "user",
            "content": [
                {
                    "text": "结合对于用户反馈的标签统计分析数据：" + str(metric_data) + "结合分析师提问："  + str(llm_prompt)
                }
            ],
        }
    ]
    # Configure the inference parameters.
    inf_params = {"max_new_tokens": 5000, "top_p": 0.1, "top_k": 20, "temperature": 0.3}

    native_request = {
        "schemaVersion": "messages-v1",
        "messages": message_list,
        "system": system_list,
        "inferenceConfig": inf_params,
    }
    MODEL_ID = "us.amazon.nova-lite-v1:0"

    response = client.invoke_model(modelId=MODEL_ID, body=json.dumps(native_request))
    response_body = json.loads(response.get('body').read())
    content_text = response_body["output"]["message"]["content"][0]["text"]
        
    return {
        'statusCode': 200,
        'body': json.dumps({
            'question': llm_prompt,
            'answers': content_text
        })
    }
    
