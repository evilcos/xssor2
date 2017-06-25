/*
 * Crypto-JS v2.4.0
 * http://code.google.com/p/crypto-js/
 * Copyright (c) 2011, Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(function(){var c=Crypto,i=c.util,j=c.charenc,k=j.UTF8,p=j.Binary;c.PBKDF2=function(d,e,l,a){function m(q,r){return c.HMAC(s,r,q,{asBytes:true})}if(d.constructor==String)d=k.stringToBytes(d);if(e.constructor==String)e=k.stringToBytes(e);for(var s=a&&a.hasher||c.SHA1,t=a&&a.iterations||1,b=[],n=1;b.length<l;){for(var f=m(d,e.concat(i.wordsToBytes([n]))),h=f,o=1;o<t;o++){h=m(d,h);for(var g=0;g<f.length;g++)f[g]^=h[g]}b=b.concat(f);n++}b.length=l;return a&&a.asBytes?b:a&&a.asString?p.bytesToString(b):
i.bytesToHex(b)}})();
