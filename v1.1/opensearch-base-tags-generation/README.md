# 基于Opensearch 的标签生成和统计分析
1. 标签生成：部署 lambda function tags_generate ，并将ApiGateway GenerateTags指向；
2. 标签应用: 部署 lambda function tags_apply ，并将ApiGateway ReviewAnalysis指向；
3. qa_bot: 部署 lambda function qa_bot ，并将ApiGateway qa_bot指向；

### 额外注意：lambda function tags_generate 
- 需要引入额外包依赖，建议通过 docker 镜像部署。
```
docker build -t lambda-python .
docker tag lambda-python:latest xxxx.dkr.ecr.us-west-2.amazonaws.com/aibuilder:tag
docker push xxxx.dkr.ecr.us-west-2.amazonaws.com/aibuilder:tag
```

