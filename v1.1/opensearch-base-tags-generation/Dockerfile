# 使用 Amazon Linux 2 和 Python 3.8 运行时
FROM public.ecr.aws/lambda/python:3.8

# 设置工作目录
WORKDIR /var/task

# 将应用代码复制到容器中
COPY app.py .

# 将 requirements.txt 复制到容器中
COPY requirements.txt .

# 使用 pip 安装依赖
RUN pip install -r requirements.txt

# 设置 Lambda 函数的入口点
CMD ["app.lambda_handler"]