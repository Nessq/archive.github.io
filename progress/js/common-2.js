var scrollOff = true;



//burger and menu
$(function () {
	
	$('#menu-icon').click(function () {
		let $nav = $('.nav');
		$(this).toggleClass('active');
		if($nav.hasClass('active')){
			$nav.toggleClass('active-end');
			setTimeout(()=> $nav.toggleClass('active-end') , 1350)
		}
		$nav.toggleClass('active');
	
		
	});

	$('.nav a').click(function(e){

		var w = $(window).width() <= 767;
		w = !w;
		// if(w){return};
		e.preventDefault();
		var id  = $(this).attr('href'),	
		top = $(id).offset().top;
		if(id == '#about' && w){	top += 250;	}
		if(id == '#team' && w){	top += 300;	}
		if(id == '#services' && w){	top += 700;	}
		if(id == '#portfolio' && w){	top += 200;	}
		if(id == '#contact' && w){	top += 400;	}
		if(id == '#index' && w){	top = 0;	}
		scrollOff = false;
		$('body,html').animate({scrollTop: top}, 1500, function(){
			scrollOff = true;
			// $(this).stop();
		});


		let $nav = $('.nav');
		$('#menu-icon').toggleClass('active');
		if($nav.hasClass('active')){
			$nav.toggleClass('active-end');
			setTimeout(()=> $nav.toggleClass('active-end') , 1350)
		}
		$nav.toggleClass('active');
  });
  
});
$(function(){
	new WOW().init({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       false,       // default
		live:         true        // default
	})
})

$(window).on('load' , function(){
	$('#preloader').delay(500).fadeOut(1000);
});