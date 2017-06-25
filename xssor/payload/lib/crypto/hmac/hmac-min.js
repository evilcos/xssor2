/*
 * Crypto-JS v2.4.0
 * http://code.google.com/p/crypto-js/
 * Copyright (c) 2011, Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(function(){var f=Crypto,j=f.util,g=f.charenc,h=g.UTF8,k=g.Binary;f.HMAC=function(b,c,a,d){if(c.constructor==String)c=h.stringToBytes(c);if(a.constructor==String)a=h.stringToBytes(a);if(a.length>b._blocksize*4)a=b(a,{asBytes:true});var i=a.slice(0);a=a.slice(0);for(var e=0;e<b._blocksize*4;e++){i[e]^=92;a[e]^=54}b=b(i.concat(b(a.concat(c),{asBytes:true})),{asBytes:true});return d&&d.asBytes?b:d&&d.asString?k.bytesToString(b):j.bytesToHex(b)}})();
