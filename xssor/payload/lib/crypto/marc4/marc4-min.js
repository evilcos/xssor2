/*
 * Crypto-JS v2.4.0
 * http://code.google.com/p/crypto-js/
 * Copyright (c) 2011, Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(function(){var g=Crypto,i=g.util,j=g.charenc.UTF8,k=g.MARC4={encrypt:function(f,b){var e=j.stringToBytes(f),a=i.randomBytes(16),d=b.constructor==String?g.PBKDF2(b,a,32,{asBytes:true}):b;k._marc4(e,d,1536);return i.bytesToBase64(a.concat(e))},decrypt:function(f,b){var e=i.base64ToBytes(f),a=e.splice(0,16);a=b.constructor==String?g.PBKDF2(b,a,32,{asBytes:true}):b;k._marc4(e,a,1536);return j.bytesToString(e)},_marc4:function(f,b,e){var a,d,c,h;a=0;for(c=[];a<256;a++)c[a]=a;for(d=a=0;a<256;a++){d=(d+
c[a]+b[a%b.length])%256;h=c[a];c[a]=c[d];c[d]=h}a=d=0;for(b=-e;b<f.length;b++){a=(a+1)%256;d=(d+c[a])%256;h=c[a];c[a]=c[d];c[d]=h;b<0||(f[b]^=c[(c[a]+c[d])%256])}}}})();
