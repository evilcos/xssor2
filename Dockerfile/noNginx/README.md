# Docker for XSSOR2

## 安装Docker

Docker 要求内核3.10以上并且要求64位操作系统。CentOS7.X的内核为3.10 CentOS6.X的2.6.32。

CentOS 安装Docker

```shell
sudo yum install docker
#开机自启动
sudo systemctl enable docker
#启动docker
sudo systemctl start docker
```

ubuntu 安装Docker(未经测试全靠记忆)

```shell
apt-get install docker.io docker
#开机自启动
update-rc.d docker default
#启动docker
services start 
#注如果使用的ubuntu16.04以上的也可以使用systemd
sudo systemctl enable docker
sudo systemctl start docker
```

## 目录结构

```
Dockerfile/
└── noNginx
    ├── config
    │   ├── pip.conf
    │   ├── supervisord.conf
    │   └── xssor.conf
    └── Dockerfile
```

## 使用

根据需求切换到相应的Dockerfile文件下建立docker镜像

```
docker build -t xssor .
```

运行

```
docker run -d -p  --name xssor 主机端口:8000 xssor
#eg
docker run -d --name xssor --restart=always  -p 8004:8000 testxss
```

## 注意事项

modify xssor/payload/probe.js

有两种方式。

- 容器内修改

  ```shell
  docker exec -i -t  xssor /bin/bash
  #正常修改然后执行
  supervisorctl restart all
  ```

- 提前修改好挂载主机内的目录

```
#主机的shell下
mkdir /opt/xssor/
git clone https://github.com/evilcos/xssor2.git /opt/xssor/
#修改文件
docker run -d --name xssor --restart=always  -v /opt/xssor/:/home/xssor/ -p 8004:8000 testxss
```

