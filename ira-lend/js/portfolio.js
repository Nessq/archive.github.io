var oldMode, carousel, slideCount, startSlide;

$(function(){
	$('a[data-modal]').click( function(event){
		event.preventDefault();
		var current = $(this).data('modal');
		$('#overlay').stop().fadeIn(400, 
		 	function(){
		 		$(this).css("display" , "flex");
				$(current) 
					.css('display', 'block')
					.animate({opacity: 1, top: '0px'}, 200);
		});
	});
	
	$('.modal-close, #overlay').click( function(e){
		var targ = $(e.target);
		if(targ.hasClass('modal-close') || targ.hasClass('overlay')){
		
		$('.modal').stop()
			.animate({opacity: 0, top: '-100px'}, 200,
				function(){
					$(this).css('display', 'none').find('form').trigger('reset');
					$('.calculate-price').html('0 РУБ.')
					$('#overlay').fadeOut(400);
				}
			);
		}
	});
	
	$(".modal-form form").submit(function(e) {
		e.preventDefault(); 
		$this = $(this);
		$btn = $(this).find('.btn');
		var url = "/send.php"; 

		$.ajax({
			type: "POST",
			url: url,
			data: $this.serialize(),
			beforeSend: function(){
				$this.find('.btn').replaceWith('<div class="ajax-img"><img src="img/ajax-loader.gif" width="26" height="26" style="margin-bottom: 0"/></div>')
			},
			success: function(data)
			{
				$this.find('.ajax-img').replaceWith('<p class="ajax-yes">Заявка успешно отправлена!</p>');
			},
			error: function(data)
			{
				$this.find('.ajax-img').replaceWith('<p class="ajax-no">Заявка не отправлена!<br> попробуйте еще раз!</p>');
				setTimeout(function(){
					$this.find('.ajax-no').replaceWith($btn);
				}, 3000);
			}
		});

	});
})


$(document).ready(function(){
	
	$('body').append('<div class="set-mode"></div>');
    oldMode = $('.set-mode').css('z-index');
	
	contentHeight();
	
	$('.fancy').fancybox({
		afterShow: function(){
			sendForm('m','/sendmessage_m.php');
		}
	});
	
	$('input[name=phone]').maskinp('+7 ( 999 ) 999-99-99');
	
	$('.carousel li > a').each(function(){
		var type = $(this).data('type');
		switch(type){
			case 1:
				
				var width = '93';
				var height = '81';
			
			break;
			case 2:
			
				var width = '96';
				var height = '76';
			
			break;
			case 3:
			
				var width = '94';
				var height = '84';
			
			break;
		}
		$(this).append('<canvas class="type-' + type + '" width="' + width + '" height="' + height + '"></canvas>');
		$(this).find('canvas').draw();
	});
	
	startSlide = 0;
	var hash = window.location.hash.slice(1);
	var href = $('.carousel > ul > li:first > a').attr('href');
	if(hash.length > 0 && $('a[data-name="' + hash + '"]').length){
		var el = $('a[data-name="' + hash + '"]');
		startSlide = el.parent().index();
		href = el.attr('href');
	} else {
		window.location.hash = $('.carousel > ul > li:first > a').data('name');
	}
	$('.content > iframe').attr('src',href);
	$('.content > iframe').on('load',function(){
		$(this).addClass('visible');
	});
	$('.carousel > ul > li:eq(' + startSlide + ') > a').addClass('active');
	
	setMode();
	
	$('.carousel ul > li > a').click(function(){
		if(!$(this).hasClass('active')){
			var href = $(this).attr('href');
			$('.content > iframe').removeClass('visible');
			$('.content > iframe').attr('src',href);
			$('.content > iframe').on('load',function(){
				$(this).addClass('visible');
			});
			window.location.hash = $(this).data('name');
			$('.carousel .active').removeClass('active');
			$(this).addClass('active');
		}
		return false;
	});
	
	
	//var flag = false;
	var header = $('header');
	
	//setTimeout(function(){
	//	if(!flag){
	//		header.stop().animate({
	//			marginTop: '-105px'
	//		}, 500, function() {
	//			header.addClass('lite')
	//			contentHeight();
	//		});
	//	}
	//},5000);
	
	header.find('.header-arrow').click(function(){
		if (header.hasClass('lite')) {
			header.removeClass('lite');
			header.stop().animate({
			marginTop: 0
			}, 500, function() {
				contentHeight();
			});
		} else {
			header.addClass('lite');
			var margin = header.height()-15;
			margin *= -1;
			header.stop().animate({
				marginTop: margin+'px'
			}, 500, function() {
				contentHeight();
			});
		}
	});
	
	
	//header.hover(function(){
	//	flag = true;
	//	header.removeClass('lite').stop().animate({
	//		marginTop: 0
	//	}, 500, function() {
	//		contentHeight();
	//	});
	//},function(){
	//	flag = true;
	//	header.stop().animate({
	//		marginTop: '-105px'
	//	}, 500, function() {
	//		header.addClass('lite')
	//		contentHeight();
	//	});
	//});
	
});

$(window).resize(function(){
	
	setTimeout('contentHeight()',50);
	
    var newMode = $('.set-mode').css('z-index');
	if (newMode != oldMode) {
		oldMode = newMode;
		setMode();
	}
	
});

function contentHeight(){
	
	var header = $('header');
	var iframe = $('.content > iframe');
	var windowHeight = $(window).height();

	if(header.hasClass('lite')){
		var height = header.height() + parseInt(header.css('margin-top'));
		iframe.height(windowHeight - height);
	} else {
		iframe.height(windowHeight - header.height());
	}
	
	iframe.width('100%');
	
}

$.fn.draw = function(){
	
	var el = $(this);
	var ctx = el.get(0).getContext('2d');
	var img = new Image();
	img.src = el.parent().data('image');

	img.onload = function() {

		
		ctx.drawImage(img, 0, 0, 100, 100);
		ctx.globalCompositeOperation = 'destination-in';
		
		ctx.beginPath();
		var className = el.attr('class');
		switch(className){
			case 'type-1':
				
				ctx.moveTo(0,17);
				ctx.lineTo(30,0);
				ctx.lineTo(93,25);
				ctx.lineTo(79,63);
				ctx.lineTo(11,81);
			
			break;
			case 'type-2':
			
				ctx.moveTo(0,7);
				ctx.lineTo(75,0);
				ctx.lineTo(96,20);
				ctx.lineTo(77,76);
				ctx.lineTo(7,64);
			
			break;
			case 'type-3':
			
				ctx.moveTo(0,52);
				ctx.lineTo(9,7);
				ctx.lineTo(72,0);
				ctx.lineTo(94,51);
				ctx.lineTo(68,84);
			
			break;
		}
		
		ctx.fill();
	
	}

}

function redraw(){

	$('.carousel li > a').each(function(){
		var canvas = $(this).find('canvas');
		var ctx = canvas.get(0).getContext('2d');
		var w = canvas.width = canvas.height = 100;
		var drawn = null;
		var d = ctx.getImageData(0, 0, w, w); //image data 
		var len = d.data.length;
		for(var i =0; i< len; i++){
			if(!d.data[i]) {
				drawn = false;
			}else if(d.data[i]) {
				drawn = true;
				break;
			}
		}
		if(!drawn) {
			canvas.draw();
		}
	});

}

function setMode(){
	
	switch ($('.set-mode').css('z-index')){
		case '1':
			slideCount = 1;
		break;
		case '2':
			slideCount = 2;
		break;
		case '3':
			slideCount = 3;
		break;
		case '4':
			slideCount = 4;
		break;
		case '5':
			slideCount = 5;
		break;
		case '6':
			slideCount = 6;
		break;
		case '7':
			slideCount = 7;
		break;
		case '8':
			slideCount = 8;
		break;
	}
	
	slideCount = 12;
	if ($(window).width() < 2119) {
		slideCount = 10;
	}
	if ($(window).width() < 1900) {
		slideCount = 8;
	}
	if ($(window).width() < 1711) {
		slideCount = 6;
	}
	if ($(window).width() < 1461) {
		slideCount = 4;
	}
	if ($(window).width() < 1254) {
		slideCount = 3;
	}
	if ($(window).width() < 1254) {
		slideCount = 2;
	}
	
	
	
	
	if ($('.carousel').find('.bx-wrapper').length){
		carousel.reloadSlider({
			pager: false,
			speed: 500,
			controls: true,
			prevText: '',
			nextText: '',
			slideWidth: 107,
			minSlides: slideCount,
			maxSlides: slideCount,
			moveSlides: 1,
			startSlide: startSlide,
			onSliderLoad: function(){
				redraw();
			},
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				redraw();
				startSlide = newIndex;
			}
		});
	} else {
		carousel = $('.carousel > ul').bxSlider({
			pager: false,
			speed: 500,
			controls: true,
			prevText: '',
			nextText: '',
			slideWidth: 107,
			minSlides: slideCount,
			maxSlides: slideCount,
			moveSlides: 1,
			startSlide: startSlide,
			onSliderLoad: function(){
				redraw();
			},
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				redraw();
				startSlide = newIndex;
			}
		});
	}
	
}



