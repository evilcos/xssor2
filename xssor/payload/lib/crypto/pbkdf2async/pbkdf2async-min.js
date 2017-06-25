/*
 * Crypto-JS v2.4.0
 * http://code.google.com/p/crypto-js/
 * Copyright (c) 2011, Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(function(){var b=Crypto,n=b.util,o=b.charenc,p=o.UTF8,w=o.Binary;if(!b.nextTick)if(typeof process!="undefined"&&typeof process.nextTick!=="undefined")b.nextTick=process.nextTick;else if(typeof setTimeout!=="undefined")b.nextTick=function(e){setTimeout(e,0)};b.PBKDF2Async=function(e,g,j,x,a){function q(c){if(r){var f=d.length/k._digestsize*l+c;setTimeout(function(){r(Math.round(f/y*100))},0)}}function s(c,f){return b.HMAC(k,f,c,{asBytes:true})}if(e.constructor==String)e=p.stringToBytes(e);if(g.constructor==
String)g=p.stringToBytes(g);var k=a&&a.hasher||b.SHA1,l=a&&a.iterations||1,r=a&&a.onProgressChange,y=Math.ceil(j/k._digestsize)*l,h=b.nextTick,d=[],t=1,u,v;h(u=function(){if(d.length<j){var c=s(e,g.concat(n.wordsToBytes([t])));q(1);var f=c,m=1;h(v=function(){if(m<l){f=s(e,f);for(var i=0;i<c.length;i++)c[i]^=f[i];m++;q(m);h(v)}else{d=d.concat(c);t++;h(u)}})}else{d.length=j;x(a&&a.asBytes?d:a&&a.asString?w.bytesToString(d):n.bytesToHex(d))}})}})();
