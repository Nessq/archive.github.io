$(function() {

		$(document).ready(function(){
		function autoHeight(){
			var h = $(window).height()
			$('.window').css({
				height: h
			});
		};
		autoHeight();
		$(window).resize(function(){
			autoHeight();
		});


        $('h1').addClass('animationH1')
	});


    setInterval(function(){
        $('.wrapImg2').toggleClass('active').toggleClass('active2');
        
        setTimeout(function(){
            $('.wrapImg2').removeClass('active2');
        }, 6000)
    },8000);

//timer
	(function() {
    var _id = "0220e1504b1f46939cd7f7342a8e27d7";
    var tim = $("#timer1")

    while (document.getElementById("timer" + _id)) _id = _id + "0";
    tim.html("<div id='timer" + _id + "' style='min-width:171px;height:50px;'></div>")
    var _t = document.createElement("script");
    _t.src = "http://schooltennis.ru/timer/timer.min.js";
    var _f = function(_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "1",
                "params": {
                    "usertime": false,
                    "tz": "3",
                    "utc": 1483095600000
                }
            },
            "design": {
                "type": "text",
                "params": {
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "76",
                    "number-font-color": "#fff",
                    "separator-margin": "0",
                    "separator-on": true,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "22",
                    "text-font-color": "#c7c7c7"
                }
            },
            "designId": 1,
            "theme": "white",
            "width": 171,
            "height": 50
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function() {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);
});
