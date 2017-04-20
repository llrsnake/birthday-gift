// variables
var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();

$(function () {
    // setup garden
	if ($window.width()> ($("#code").width()+$("#loveHeart").width()+80)){
	$loveHeart = $("#loveHeart");
	$("#content").css("width", ($("#code").width()+$("#loveHeart").width()+80));
	$("#content").css("height", Math.max($loveHeart.height() , $("#code").height()));
	//$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
	$("#content").css("margin-top", 40);
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));
	$("#loveHeart").css("margin-top", ($("#code").height() - $("#loveHeart").height()) / 2);
	// $('#code').css("border","1px solid #000099");		
	// $('#loveHeart').css("border","1px solid #000099");	
	$('.heart-vt').css("left","60%");
	}
	else{
	$loveHeart = $("#loveHeart");
	$("#content").css("width", Math.max($("#code").width(),$("#loveHeart").width()));
	$("#code").css("margin-left",($("#content").width() - $("#code").width()) / 2);
	$("#content").css("height", $loveHeart.height() + $("#code").height());
	//$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
	$("#content").css("margin-top", 300);
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));
	$("#loveHeart").css("margin-top", 20);
	$('.heart-vt').css("left","50%");
	$("#code").css("font-size",40);width: 
	$("#code").css("width",800);
	$("#code").css("line-height", 1.2);
	//$('#content').css("border","1px solid #000099");
	}
});

$(window).resize(function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
					if (current == '<') {
						progress = str.indexOf('>', progress) + 1;
					} else {
						progress++;
					}
				//$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				$ele.html(str.substring(0, progress));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 120);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	$("#elapseClock").html(result);
}

function showMessages() {
	adjustWordsPosition();
	$('#messages').fadeIn(5000, function() {
		showLoveU();
	});
}

function adjustWordsPosition() {
	
	$('#words').css("top", 195);
	$('#words').css("left", 70);
}

function adjustCodePosition() {
	$('#code').css("margin-top", 5);
}

function showLoveU() {
	$('#loveu').fadeIn(3000);
}

function showCODE() {
	
	setTimeout(function () {
                $('#sentence1').fadeIn(3000);
            }, 22596);
	setTimeout(function () {
                $('#sentence2').fadeIn(3000);
            }, 29155);		
	setTimeout(function () {
                $('#sentence3').fadeIn(3000);
            }, 34216);		
	setTimeout(function () {
                $('#sentence4').fadeIn(3000);
            }, 38065);		
	setTimeout(function () {
                $('#sentence5').fadeIn(3000);
            }, 43411);
	setTimeout(function () {
                $('#sentence6').fadeIn(3000);
            }, 53772);		
	setTimeout(function () {
                $('#sentence7').fadeIn(3000);
            }, 57026);		
	setTimeout(function () {
                $('#sentence8').fadeIn(3000);
            }, 62159);		
	setTimeout(function () {
                $('#sentence9').fadeIn(3000);
            }, 70285);
	setTimeout(function () {
                $('#sentence10').fadeIn(3000);
            }, 75132);		
	setTimeout(function () {
                $('#sentence11').fadeIn(3000);
            }, 79053);		
	setTimeout(function () {
                $('#sentence12').fadeIn(3000);
            }, 84756);		
	setTimeout(function () {
                $('#sentence13').fadeIn(3000);
            }, 89888);
	setTimeout(function () {
                $('#sentence14').fadeIn(3000);
            }, 94237);		
	setTimeout(function () {
                $('#sentence15').fadeIn(3000);
            }, 97017);		
	setTimeout(function () {
                $('#sentence16').fadeIn(3000);
            }, 103578);		
	setTimeout(function () {
                $('#sentence17').fadeIn(3000);
            }, 106640);
	setTimeout(function () {
                $('#sentence18').fadeIn(3000);
            }, 112556);		
	setTimeout(function () {
                $('#sentence19').fadeIn(3000);
            }, 118548);		
	setTimeout(function () {
                $('#sentence20').fadeIn(3000);
            }, 124461);
	setTimeout(function () {
                $('#sentence21').fadeIn(3000);
            }, 127312);			

}