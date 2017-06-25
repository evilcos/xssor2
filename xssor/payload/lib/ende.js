function _g(x){return document.getElementById(x)}	

var xssorende = {};
	
xssorende.encode = {};
xssorende.encode._escape = function(){_g('ende_textarea').value=escape(_g('ende_textarea').value);}
xssorende.encode._unescape = function(){_g('ende_textarea').value=unescape(_g('ende_textarea').value);}
xssorende.encode._encodeURI = function(){_g('ende_textarea').value=encodeURI(_g('ende_textarea').value);}
xssorende.encode._decodeURI = function(){_g('ende_textarea').value=decodeURI(_g('ende_textarea').value);}
xssorende.encode._encodeURIComponent = function(){_g('ende_textarea').value=encodeURIComponent(_g('ende_textarea').value);}
xssorende.encode._decodeURIComponent = function(){_g('ende_textarea').value=decodeURIComponent(_g('ende_textarea').value);}
xssorende.encode.en = function(x){
	var _a=new Array();
	var txt=_g('ende_textarea').value;
	if(!txt)return _a;
	if(x==10){
		for(i=0;i<txt.length;i++){
			var _a;
			s=txt.charCodeAt(i).toString(16);
			if(_g('dec_0').checked) {if(i<txt.length-1)_a+= txt.charCodeAt(i)+",";else{_a+= txt.charCodeAt(i)}}
			else if(_g('dec_1').checked) {if(i<txt.length-1)_a+= txt.charCodeAt(i)+",";else{_a+= txt.charCodeAt(i)+",";_a="xxx:expression(eval(String.fromCharCode(105,102,40,33,119,105,110,100,111,119,46,120,41,123,"+_a+"59,119,105,110,100,111,119,46,120,61,49,59,125)))";}}
			else if(_g('dec_2').checked) _a+="&#"+new Array(7-String(s).length).join("0")+txt.charCodeAt(i);
			else if(_g('dec_3').checked) _a+="&#"+txt.charCodeAt(i)+";";
		}
		_g('ende_textarea').value=_a;
	}
	if(x==16){
		for(i=0;i<txt.length;i++){
			s=txt.charCodeAt(i).toString(16);
			if(_g('hex_x').checked) _a+="&#x"+new Array(5-String(s).length).join("0")+s+";";
			else _a+="\\u"+new Array(5-String(s).length).join("0")+s;
		}
		_g('ende_textarea').value=_a;

	}
}
xssorende.encode.de = function(x){
	var _a=new Array();
	var txt=_g('ende_textarea').value;
	if(!txt)return _a;
	if(x==10){
		if(_g('dec_0').checked){
			s=txt.split(",");
			for(i=0;i<s.length;i++)
				_a+=String.fromCharCode(s[i])
		}
		if(_g('dec_1').checked){
			txt=txt.substring(txt.indexOf("105,102,40,33,119,105,110,100,111,119,46,120,41,123,")+52,txt.indexOf(",59,119,105,110,100,111,119,46,120,61,49,59,125"));
			s=txt.split(",");
			for(i=0;i<s.length;i++)
				_a+=String.fromCharCode(s[i])
		}
		else if(_g('dec_2').checked){
			s=txt.split("&");
			for(i=1;i<s.length;i++){
				s[i]=s[i].replace('#','');
				_a+=String.fromCharCode(s[i]);}
		}
		else if(_g('dec_3').checked){
			s=txt.substring(0,txt.length-1).split(";");
			for(i=0;i<s.length;i++){
				s[i]=s[i].replace('&#','');
				_a+=String.fromCharCode(s[i]);}
		}
		_g('ende_textarea').value=_a;
	}
	if(x==16){
	if(_g('hex_x').checked){
		var _a=new Array();
		s=txt.substring(0,txt.length-1).split(";");
		for(i=0;i<s.length;i++){
			s[i]=s[i].replace('&#x','');
			_a+=String.fromCharCode(parseInt(s[i],16))}
	}
	else{var _a=new Array();
		s=txt.split("\\");
		for(i=1;i<s.length;i++){
			s[i]=s[i].replace('u','');
			_a+=String.fromCharCode(parseInt(s[i],16))}
	}_g('ende_textarea').value=_a;}
}
xssorende.encode.copy_ok = function(){_g('ende_textarea').style.background='#DDDDDD';setTimeout("_g('ende_textarea').style.background='#FFFFFF'",700);}
xssorende.encode.html2js = function(i){
	var txt=_g('ende_textarea').value;
	if (i == 1)
		_g('ende_textarea').value="document.writeln(\""+ txt.replace(/\\/g, "\\\\").replace(/\//g, "\\/").replace(/\'/g,"\\\'").replace(/\"/g,"\\\"").split('\r\n').join("\");\ndocument.writeln(\"")+ "\");";
	if (i == 2)
		_g('ende_textarea').value=txt.replace(/document.writeln\("/g, "").replace(/"\);/g, "").replace(/\\\"/g,"\"").replace(/\\\'/g,"\'").replace(/\\\//g,"\/").replace(/\\\\/g,"\\");
}
xssorende.encode.htmlencode = function(i){
	var txt=_g('ende_textarea').value;
	if (i == 1)
		_g('ende_textarea').value=txt.replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g,'&gt;');
	if (i == 2)
		_g('ende_textarea').value=txt.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g,'<').replace(/&gt;/g, '>');
}
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
								  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
								  -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
								  58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0,  1,  2,  3,  4,  5,  6,
								  7,  8,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
								  25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
								  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,
								  -1, -1);

xssorende.encode.base64encode = function(str){
	var out, i, len;
	var c1, c2, c3;
	len = str.length;
	i = 0;
	out = "";
	while (i < len){
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len){
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt((c1 & 0x3) << 4);
			out += "==";
			break;
			}
		c2 = str.charCodeAt(i++);
		if (i == len){
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			out += base64EncodeChars.charAt((c2 & 0xF) << 2);
			out += "=";
			break;
			}
		c3 = str.charCodeAt(i++);
		out += base64EncodeChars.charAt(c1 >> 2);
		out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		out += base64EncodeChars.charAt(c3 & 0x3F);
		}
	return out;
}
xssorende.encode.base64decode = function(str){
	var c1, c2, c3, c4;
	var i, len, out;
	len = str.length;
	i = 0;
	out = "";
	while (i < len){
		do
			{
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
			} while (i < len && c1 == -1);

		if (c1 == -1)
			break;
		do
			{
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
			} while (i < len && c2 == -1);

		if (c2 == -1)
			break;
		out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
		do
			{
			c3 = str.charCodeAt(i++) & 0xff;

			if (c3 == 61)
				return out;
			c3 = base64DecodeChars[c3];
			} while (i < len && c3 == -1);
		if (c3 == -1)
			break;
		out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
		do
			{
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61)
				return out;
			c4 = base64DecodeChars[c4]
			} while (i < len && c4 == -1);
		if (c4 == -1)
			break;
		out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
		}
	return out;
}
xssorende.encode.utf16to8 = function(str)
	{
	var out, i, len, c;
	out = "";
	len = str.length;
	for (i = 0; i < len; i++){
		c = str.charCodeAt(i);
		if ((c >= 0x0001) && (c <= 0x007F)){
			out += str.charAt(i);
			}
		else if (c > 0x07FF){
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			}
		else{
			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			}
		}
	return out;
}
xssorende.encode.utf8to16 = function(str){
	var out, i, len, c;
	var char2, char3;
	out = "";
	len = str.length;
	i = 0;
	while (i < len){
		c = str.charCodeAt(i++);
		switch (c >> 4){
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				out += str.charAt(i - 1);
				break;
			case 12:
			case 13:
				char2 = str.charCodeAt(i++);
				out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
				break;
			case 14:
				char2 = str.charCodeAt(i++);
				char3 = str.charCodeAt(i++);
				out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6)
											   | ((char3 & 0x3F) << 0));
				break;
			}
		}
	return out;
}
xssorende.encode.base64Code = function(i){
	var txt=_g('ende_textarea').value;
	if (i == 1)
		_g('ende_textarea').value=xssorende.encode.base64encode(xssorende.encode.utf16to8(txt));
	if (i == 2)
		_g('ende_textarea').value=xssorende.encode.utf8to16(xssorende.encode.base64decode(txt));
}
xssorende.encode.replaceC = function(){
	var txt=_g('ende_textarea').value;
	var _t = new Array();
	var oldV = _g('oldC').value;
	var newV = _g('newC').value;
	var s = txt.split(oldV);
	if(s.length>1){
		if(s[0]==''){
			for (i=1;i<s.length;i++)
				_t += newV + s[i]
		}else if(s[s.length-1]==''){
			for (i=0;i<s.length-1;i++)
				_t += s[i] + newV;
		}else{
			for (i=0;i<s.length;i++)
				if(i==s.length-1)_t+=s[i];
				else
				_t += s[i] + newV;
		}
		_g('ende_textarea').value=_t;
	}
}


// UTF-7编解码函数
var tocharcodes = function (code, params) {
	if (params[0] == "''") {
	  var splitChar = "";
	} else {
	  var splitChar = new RegExp(params[0], 'g');
	}
	if (params[1] == "','") {
	  var joinChar = ',';
	} else {
	  var joinChar = params[1];
	}
	code = code.split(splitChar);
	for (var i = 0; i < code.length; i++) {
	  code[i] = code[i].charCodeAt();
	}
	code.join(joinChar);
	return code.toString();
};
var zerofill = function (code, params) {
	len = parseInt(params[0]);
	if (len > 10000 || len < 0) {
	  len = 0;
	}
	code = code + '';
	while (len > code.length) {
	  code = '0' + code;
	}
	return code;
};
var repeat = function (code, params) {
	return Array(parseInt(params[0]) + 1).join(code);
};
var utf7_encode = function (str, chars) {
  var outputstring = str.replace(/\+/g, '+-');
  return outputstring.replace(new RegExp('([^' + chars + ']+)', 'g'), function ($1) {
	var base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var tmp_codes1 = tocharcodes($1, Array('', ','));
	var codes = tmp_codes1.split(',');
	code = '';
	var len = codes.length;
	for (var i = 0; i < len; i++) {
	  var strchar = parseInt(codes[i]);
	  var tmp_codes2 = zerofill(strchar.toString(2), [16]);
	  code += tmp_codes2;
	}
	var sixBits = [];
	for (var i = 0; i < code.length; i += 6) {
	  sixBits.push(code.substr(i, 6));
	}
	if (sixBits[sixBits.length - 1].length < 6) {
	  var tmp_codes3 = repeat('0', [6 - sixBits[sixBits.length - 1].length]);
	  sixBits[sixBits.length - 1] = sixBits[sixBits.length - 1] + tmp_codes3;
	}
	base64chars = base64chars.split('');
	for (var i = 0; i < sixBits.length; i++) {
	  sixBits[i] = base64chars[parseInt(sixBits[i], 2)];
	}
	return '+' + sixBits.join('') + '-';
  });
};
utf7_decode = function (str) {
  return str.replace(/(\+[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+\/]+-)/g, function ($1) {
	var base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var sixBits = [];
	var code = $1;
	var decoded = '';
	code = code.replace(/^\+|-$/g, '').split("");
	for (var i = 0; i < code.length; i++) {
	  var tmp_codes1 = base64chars.indexOf(code[i]).toString(2);
	  decoded += zerofill(tmp_codes1, [6]);
	}
	var sixteenBits = Array();
	for (var i = 0; i < decoded.length; i += 16) {
	  sixteenBits.push(decoded.substr(i, 16));
	}
	decoded = '';
	for (var i = 0; i < sixteenBits.length; i++) {
	  strchar = sixteenBits[i];
	  if (strchar.length < 16) {
		if (strchar.length > 4 || strchar.match(/[^0]/)) {
		  return 'Invalid UTF-7';
		}
	  } else {
		decoded += String.fromCharCode(parseInt(strchar, 2));
	  }
	}
	return decoded;
  });
};

xssorende.encode.utf7_encode = function() {
	_g('ende_textarea').value = utf7_encode(_g('ende_textarea').value);
};
xssorende.encode.utf7_decode = function() {
	_g('ende_textarea').value = utf7_decode(_g('ende_textarea').value);
};

function bind_event(o, e, fn){
	//o object
	//e event
	//fn function
	if (typeof o == "undefined" || typeof e == "undefined" || typeof fn == "undefined" || o === null){
		return false;
	}
	if (o.addEventListener){
		o.addEventListener(e, fn, false);
	} 
	else if (o.attachEvent){  // IE
		o.attachEvent("on"+e, fn);
	}
	else {
		var oldhandler = o["on"+e];
		if (oldhandler) {
			o["on"+e] = function(x){ 
				oldhandler(x);
				fn();
			};
		}
		else {
			o["on"+e] = function(x){ 
				fn();
			};
		}
	}
	try{o.focus();}catch(e){}
}

window.onload = function(){
    function ende_save(){
        if (window.localStorage) {
            localStorage.setItem('ende_local_db', _g('ende_textarea').value);
        }
    }
    if(/msie/i.test(navigator.userAgent)){
        _g('ende_textarea').onpropertychange = ende_save;
    }else{
        _g('ende_textarea').addEventListener("input", ende_save, false);
    }
    if (window.localStorage) {
    	var v = localStorage.getItem('ende_local_db');
        if(v) _g('ende_textarea').value = v;
    }
    bind_event(window,'blur',ende_save);
	bind_event(window,'beforeunload',ende_save);
	
	// hash encode
	_g('btn_hash').onclick = function() {
		var hash_type = _g('hash').value;
		var v = _g('ende_textarea').value;
		if(hash_type == 'md5') hash_v = Crypto.MD5(v);
		if(hash_type == 'sha1') hash_v = Crypto.SHA1(v);
		if(hash_type == 'sha256') hash_v = Crypto.SHA256(v);
		_g('ende_textarea').value = hash_v;
	};

}
