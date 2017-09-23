# XSS'OR
XSS'OR - Hack with JavaScript.

## ONLINE
You can have a try:
http://xssor.io/

It contains three major modules: Encode/Decode, Codz, Probe.

## INSTALL

Python 2.7.*

* git clone https://github.com/evilcos/xssor2 or download directly
* cd xssor2
* modify xssor/payload/probe.js
```javascript
xssor.cmd_url = 'http://xssor.io/cmd'; // replace xssor.io to your domain or ip address
```
* pip install -r requirement.txt
* python manage.py runserver 0.0.0.0:8000

Browser http://[yourip]:8000 to enjoy.

If you want to deploy it with Nginx, you can use uWSGI.

If you want to delete probe automatically, you can use crontab to this script file(xssor/probeclear.py).

Try it by yourself.

## SCREENSHOTS

Have a look at ![screenshots](https://github.com/evilcos/xssor2/tree/master/screenshots)

## CHANGELOG

```
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
*. Complete rewriting with Python, Django, Bootstrap, jQuery, ...
*. Independent domain: xssor.io.
```

BE EVIL, DON'T BE BAD.
