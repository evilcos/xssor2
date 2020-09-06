# XSS'OR
XSS'OR - Hack with JavaScript.

## ONLINE
You can have a try:

https://xssor.io and http://xssor.io/

It contains three major modules: Encode/Decode, Codz, Probe.

## INSTALL

Python 3 with Django 3.0.* or Python 2 with Django 1.11.*

* git clone https://github.com/evilcos/xssor2 or download directly
* cd xssor2
* modify xssor/payload/probe.js
```javascript
xssor.cmd_url = location.protocol + '//xssor.io/cmd'; // replace xssor.io to your domain or ip address
```
* pip3/pip install -r requirement.txt
* python3/python manage.py runserver 0.0.0.0:8000

Browser http://[yourip]:8000 to enjoy.

If you want to deploy it with Nginx, you can use uWSGI.

If you want to delete probe automatically, you can use crontab to this script file(xssor/probeclear.py).

Try it by yourself.

## DOCKER

You can build this project with docker

```bash
docker build -t xssor:latest .
```

Run the app with

```bash
docker run -d -p [port]:8000 xssor:latest [probe domain or ip]
```



## CHANGELOG

```
UPDATE: 2020/07/28

*. Increase support for docker.

UPDATE: 2020/02/05

*. Compatible with Python 2 and Python 3.
*. Compatible with Django 1.11.* and Django 3.0.*.
*. Fix some bugs.

UPDATE: 2018/07/29

*. Compatible with HTTP and HTTPS.

UPDATE: 2017/09/23

*. Upgrade JS BEAURIFY.
*. Fix PACKER/UNPACKER error bug.

UPDATE: 2017/08/20

*. Increase support for mobile more friendly.

UPDATE: 2017/08/13

*. Fix Probe bug to file:// protocol.
*. Fix Probe bug in mobile app while without cookie.
*. Improve Probe Status.

UPDATE: 2017/05/07

*. Encode/Decode, enhanced.
*. Codz, enhanced.
*. Probe, free to try.
*. It is helpfull in fixing bugs
*. Complete rewriting with Python, Django, Bootstrap, jQuery, ...
*. Independent domain: xssor.io.
```

BE EVIL, DON'T BE BAD.
