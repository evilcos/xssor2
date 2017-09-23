
var packer = new Packer;

new base2.JSB.RuleList({
	"#form": {
		ondocumentready: function() {
			this.removeClass("disabled");
			ende_textarea.value = "";
			this.ready();
		},
		
		ready: function() {
			//message.write("ready");
			ende_textarea.focus();
		}
	},
	/*
	"#input,#ende_textarea": {
		disabled: false,
		spellcheck: false // for mozilla
	},*/
	"#clear-all": {
		disabled: false,
		
		onclick: function() {
			ende_textarea.value = "";
			ende_textarea.value = "";
			uploadScript.style.display = "";
			loadScript.style.display = "";
			uploadScript.disabled = true;
			saveScript.disabled = false;
			form.ready();
		}
	},
	"#pack-script": {
		disabled: false,
		
		onclick: function() {
			try {
				if (ende_textarea.value) {
					//var value = packer.pack(ende_textarea.value, base62.checked, shrink.checked);
					var start = new Date;
					var input_length = ende_textarea.value.length;
					if (!/\r/.test(ende_textarea.value)) { // mozilla trims carriage returns
						input_length += match(ende_textarea.value, /\n/g).length;
					}
					
					var value = packer.pack(ende_textarea.value, true, true);
					ende_textarea.value = value;
					var stop = new Date;
					//message.update("耗时: " + (stop - start) + " milliseconds",input_length);
				}
			} catch (error) {
				//message.error("error packing script", error);
			} finally {
				//saveScript.disabled = !ende_textarea.value;
				//decodeScript.disabled = !ende_textarea.value || !base62.checked;
			}
		}
	},
	"#load-script": {
		disabled: false,
		
		onclick: function() {
			uploadScript.style.display = "inline";
			uploadScript.disabled = false;
			this.style.display = "none";
		}
	},
	"#save-script": {
		onclick: function() {
			form.command.value = "save";
		}
	},
	"#decode-script": {		
		onclick: function() {
			try {
				if (ende_textarea.value) {
					var start = new Date;
					eval("var value=String" + ende_textarea.value.slice(4));
					var stop = new Date;
					ende_textarea.value = value;
					//message.update("耗时: " + (stop - start) + " milliseconds");
				}
			} catch (error) {
				//message.error("error decoding script", error);
			} finally {
				//decodeScript.blur();
				//decodeScript.disabled = true;
			}
		}
	},
	"#upload-script": {
		onchange: function() {
			form.encoding = "multipart/form-data";
			form.command.value = "load";
			form.submit();
		}
	},
	"#base62,#shrink": {
		disabled: false
	},
	"#message": {
		error: function(text, error) {
			this.write(text + ": " + error.message, "error");
		},
		
		update: function(message,input_length) {
			var calc = ende_textarea.value.length + "/" + input_length;
			var ratio = (ende_textarea.value.length / input_length).toFixed(3);
			if (input_length)
				//this.write(format("压缩率: %1=%2%", calc, ratio) + (message ? message : ""));
				this.write(format("压缩率: %1=%2%", calc, ratio));
			else{
				//this.write((message ? message : ""));
				this.write("-");
			}
		},
		
		write: function(text, className) {
			this.innerHTML = text;
			this.className = className || "";
		} 
	}
});

if (!(0).toFixed) Number.prototype.toFixed = function(n) {
	var e = Math.pow(10, n);
	var r = String(Math.round(this * e));
	if (r == 0) for (var i = 0; i < n; i++) r += "0";
	return r.slice(0, r.length - n) + "." + r.slice(r.length - n);
};
