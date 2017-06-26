FROM ubuntu:16.04

RUN sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list && \
    apt-get -y update && apt-get install -y  supervisor git                   && \
    mkdir -p /var/log/supervisor                                              && \
    mkdir -p /etc/supervisord.d/                                              && \
    mkdir -p /var/run/supervisor/ 
COPY config/supervisord.conf  /etc/supervisord.conf 


#create user xssor 
RUN useradd -d /home/xssor -s /usr/sbin/nologin  xssor &&\
  git clone https://github.com/evilcos/xssor2.git /home/xssor &&\
  chown -R xssor:xssor /home/xssor/


#django 
RUN apt-get install -y python-pip && \
    mkdir ~/.pip

COPY config/pip.conf ~/.pip/pip.conf
#run
RUN cd /home/xssor/ && pip install -r requirement.txt
#config
COPY config/xssor.conf  /etc/supervisord.d/xssor.conf


EXPOSE 8000 
VOLUME ["/home/xssor/"]

CMD ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]
