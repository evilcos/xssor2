FROM python:slim
ADD . /xssor/
WORKDIR /xssor
RUN pip3 install -i https://mirrors.aliyun.com/pypi/simple -r requirement.txt && \
  rm -fr ~/.cache/pip
EXPOSE 8000
RUN chmod +x run.sh
ENTRYPOINT ["/xssor/run.sh"]