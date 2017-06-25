/*
 * Crypto-JS v2.4.0
 * http://code.google.com/p/crypto-js/
 * Copyright (c) 2011, Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(function(){var l=Crypto,m=l.util,n=l.charenc,o=n.UTF8,p=n.Binary,j=l.SHA1=function(a,g){var c=m.wordsToBytes(j._sha1(a));return g&&g.asBytes?c:g&&g.asString?p.bytesToString(c):m.bytesToHex(c)};j._sha1=function(a){if(a.constructor==String)a=o.stringToBytes(a);var g=m.bytesToWords(a),c=a.length*8;a=[];var h=1732584193,d=-271733879,e=-1732584194,f=271733878,i=-1009589776;g[c>>5]|=128<<24-c%32;g[(c+64>>>9<<4)+15]=c;for(c=0;c<g.length;c+=16){for(var q=h,r=d,s=e,t=f,u=i,b=0;b<80;b++){if(b<16)a[b]=g[c+
b];else{var k=a[b-3]^a[b-8]^a[b-14]^a[b-16];a[b]=k<<1|k>>>31}k=(h<<5|h>>>27)+i+(a[b]>>>0)+(b<20?(d&e|~d&f)+1518500249:b<40?(d^e^f)+1859775393:b<60?(d&e|d&f|e&f)-1894007588:(d^e^f)-899497514);i=f;f=e;e=d<<30|d>>>2;d=h;h=k}h+=q;d+=r;e+=s;f+=t;i+=u}return[h,d,e,f,i]};j._blocksize=16;j._digestsize=20})();
