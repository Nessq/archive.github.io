// !function(e){"use strict";e(".index-wrap");var i=e(".slides"),t=e(".index"),n=i.first(),l={},r=!1,d=null,s=null,o=0,u=null;function a(){var e;l.slideWidth=n.width(),l.slideHeight=n.height(),l.sliderWidth=Math.ceil(l.slideWidth*i.length),l.sliderHeight=n.outerHeight(!0),t.width(l.sliderWidth),e={x:-i.width()*(i.length-1),ease:Power2.easeInOut},null!=u&&null!=s?(o=0,u.progress(o),(s=new TimelineMax).to(t,2,e),u.setTween(s),u.refresh()):(d=new ScrollMagic.Controller,(s=new TimelineMax).to(t,2,e),s.progress(o),u=new ScrollMagic.Scene({triggerElement:l.slider,triggerHook:"onLeave",duration:l.sliderWidth}).setPin(l.slider).setTween(s).addTo(d).on("start",function(e){s.time(0)}))}e(document).ready(function(){var i;l=e.extend({slider:".index-wrap",sliderWrapper:".index",slides:".slides",slideWidth:null,slideHeight:null},i),a(),e(window).on("resize",function(){clearTimeout(r),r=setTimeout(function(){a()},250)})})}(jQuery);

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
	var w = $(window).width() <= 767;
	var controller = new ScrollMagic.Controller();
	console.log(w)
	// define movement of panels
	var wipeAnimation = new TimelineMax()
		// animate to second panel
		
		.fromTo("h1", 1,   {x: "0"} , {x: "-67%"})
		.to('.index', 1, {backgroundColor : "transparent"})

	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: ".index",
			triggerHook: "onLeave",
			duration: "50%"
		})
		.setPin(".index", {pushFollowers: w})
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);


});




//section about scrollMagic.js



$(function(){
	if($(window).width() < 767){return};
		var btn = $('#menu-icon');
		var logo = $('.logo');
		var lang = $('.lang');

		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			
			.to("#about", 0.1,   {y: "0", 'delay': 0, 'opacity' : 1})
			.to("#about .section-1 .section-bg", 0,   {y: "0%", css :{ transform : "translateX(0)"}})
			.to("#about .section-1 .bg-crop", 0,   {y: "0%", css :{ left : '100%'}})
			.to("#about .section-1 .preview", 0,   {y: "0%", css : {
				transform : "translateX(0)",
				backgroundColor : "#fff"
			}})
			.add( function(){ 
				btn.toggleClass('inverse');
				lang.toggleClass('inverse'); 
			})
			

			.to(["#about .section-1 .preview h2","#about .section-1 .preview p","#about .section-1 .preview li"], 0,   { css : {
				transform : "translateY(0)",
				opacity : '1'
			}})
		
			.to(["#about .section-1 .preview h2","#about .section-1 .preview p","#about .section-1 .preview li"], 0,   {delay : 1, css : {
				transform : "translateY(50px)",
				opacity : '0'
			}})
		
			.to("#about .section-1 .preview", 0,   { css : {
				transform : "translateX(0)",
				width : "100vw"
			}})

			.to("#about", 0,   {y: "-33.333%", 'delay': 0})

			.add( function(){ 
				logo.toggleClass('inverse');
			})
			.to("#about .section-2 .preview", 0, {css : {width : '40vw'}})
			.to("#about .section-2 .section-bg", 0, {css : {opacity : '1'}})
			.to(["#about .section-2 h2", "#about .section-2 p"], 0, { css : {opacity : '1', transform: "translateY(0)"}})	
			
			.to(["#about .section-2 h2", "#about .section-2 p"], 0, {delay : 1, css : {opacity : '0', transform: "translateY(50px)"}})
			
			.to("#about .section-2 .preview", 0, {css : {width : '100vw'}})
			
			.to("#about", 0,   {y: "-66.666%", 'delay':0})
			
			.to("#about .section-3 .section-bg", 0,   {css :{ transform : "translateX(0)"}})
			.to("#about .section-3 .bg-crop", 0,   { css :{ left : '-100%'}})
			.to("#about .section-3 .preview", 0,   { css : {
				transform : "translateX(60vw)",
				backgroundColor : "#fff"
			}})
			.add( function(){ 
				btn.toggleClass('inverse');
				lang.toggleClass('inverse'); 
			})

			.to(["#about .section-3 .preview h2","#about .section-3 .preview p"], 0,   {css : {
				transform : "translateY(0)",
				opacity : '1'
			}})
			.to(["#about .section-3 .preview h2","#about .section-3 .preview p"], 0,   {delay: 1, css : {
				transform : "translateY(50px)",
				opacity : '0'
			}})
		

			.add( function(){ 
				logo.toggleClass('inverse');
				
			})
			.to("#about .section-3 .preview", 0,   {css : {
				transform : "translateX(0)",
				width : "350vw"
			}})
			.call(function(){
				var a = window.pageYOffset;
				var b = $(window).height();
				var res = a + b;
				

				controller.scrollTo(function (newScrollPos, callback) {
					setTimeout(()=>{
						if(a < window.pageYOffset && scrollOff){
							$('html, body').animate({scrollTop : newScrollPos}, 1000, "swing", callback);
						}
					}, 50)
				});
			
				controller.scrollTo(res, function() {
				});
			})
			.to("#about", 0,   {y: "-100%", 'delay': 0})
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#about-container",
				triggerHook: "0",
				duration: "200%",
				// reverse: false
				// offset : "-50%"
			})
			.setPin("#about-container", {pushFollowers: false})
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	

});



// wow js
$(function(){
	new WOW().init({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       false,       // default
		live:         true        // default
	})
})

// team scrollMagic.js

$(function(){
	
	if($(window).width() <= 767){return}

	var btn = $('#menu-icon');
	var logo = $('.logo');
	var lang = $('.lang');
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax();
		// animate to second panel
		wipeAnimation.add(TweenLite.to('.overlay', 1, {opacity: 0.5}));
		wipeAnimation.add( function(){ 
			btn.toggleClass('inverse');
			logo.toggleClass('inverse');
			lang.toggleClass('inverse');
			
		});
		wipeAnimation.add(TweenLite.to('.overlay', 1, {opacity: 1}));

		wipeAnimation.fromTo(".title", 1,   {x: "0", delay: "1"} , {left: "0"});
		wipeAnimation.to('.title', 2, {opacity : '0'});
		
		

	// create scene to pin and link animation
		
		new ScrollMagic.Scene({
				triggerElement: ".team-title",
				triggerHook: "0.3",
				duration: "100%",
				// offset: '700',
			})
			.setPin(".team-title", {pushFollowers: false})
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	
})

$(function(){
	var btn = $('#menu-icon');
	var logo = $('.logo');
	var lang = $('.lang');
	var w = $(window).width() <= 767;


	for(let i = 0; TEAM.length > i; i++){

		$('.team-container .title-container').append(`
		<div class="title-${i+1}">
			<h4>${TEAM[i][0]}</h4>
			<h5>${TEAM[i][1]}</h5
		</div
		`);
		$('.team-container .photo-container').append(`
			<div class="photo-${i+1}">
				<img src="${TEAM[i][3]}" alt=""/>
			</div>
		`);
		$('.team-container .desc-container').append(`
		<div class="desc-${i+1}">
			${TEAM[i][2]}
		</div>
		`);
		$('.team-container .team-menu .nav-menu').append(`
			<li>${TEAM[i][0]}</li>
		`);

	}
	

	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax();
		// animate to second panel

		if($(window).width() <= 767){
				wipeAnimation.add(TweenLite.to('.overlay', 0.5, {opacity: 0.5}));
			wipeAnimation.add( function(){ 
				btn.toggleClass('inverse');
				logo.toggleClass('inverse');
				lang.toggleClass('inverse');
				
			});
			wipeAnimation.add(TweenLite.fromTo('.team-container__mobile', 0.5, {opacity : 0},{opacity: 1}));
			wipeAnimation.add(TweenLite.to('.overlay', 0.5, {opacity: 1}));
			wipeAnimation.add(TweenLite.to('.team-container__mobile', 0.5, {opacity:1}));
		}



	
	if(!w){
		wipeAnimation.add(TweenLite.to('.overlay', 1, {css : {filter: 'brightness(1.1)'}}));
		wipeAnimation.set('.nav-menu li:first-child', {className : '+=active'} );
		wipeAnimation.add(TweenLite.fromTo('.team-menu', 0.5, {opacity: '0'},{opacity : '1'}));
		
		for(let i = 1; TEAM.length >= i; i++){
			if(i > 1){
				let x = i - 1;
				wipeAnimation.set('.nav-menu li:nth-child('+x+')', {className : '-=active'} );
			}
			wipeAnimation.set('.nav-menu li:nth-child('+i+')', {className : '+=active'} );

		
			// wipeAnimation.set('.photo-container .photo-'+i, {display : 'block'} );
			// wipeAnimation.set('.title-container .title-'+i, {css :{display : 'block'}} );
			// wipeAnimation.set('.desc-container .desc-'+i, { css :{display : 'block'}} );

			wipeAnimation.to('.photo-container .photo-'+i, 0, {opacity : '1'} );
			wipeAnimation.to('.title-container .title-'+i, 0, {css :{opacity : '1'}} );
			wipeAnimation.to('.desc-container .desc-'+i, 0, {css :{opacity : '0.5'}} );
			
			if(TEAM.length != i){

				wipeAnimation.to('.photo-container .photo-'+i, 0, {delay : 1, css :{opacity : '0'}} );			
					wipeAnimation.to('.title-container .title-'+i, 0, { css :{opacity : '0'}} );
					wipeAnimation.to('.desc-container .desc-'+i, 0, { css :{opacity : '0'}} );
			}else{
				wipeAnimation.to('.photo-container .photo-'+i, 0, {delay : 1, css :{opacity : '0'}} );			
					wipeAnimation.to('.title-container .title-'+i, 0, { css :{opacity : '0'}} );
					wipeAnimation.to('.desc-container .desc-'+i, 0, { css :{opacity : '0'}} );
					wipeAnimation.to('.team-menu', 0, { delay: 0, opacity : 0});
			}

				// wipeAnimation.set('.photo-container .photo-'+i, {display : 'none'} );
				// wipeAnimation.set('.title-container .title-'+i, {css :{display : 'none'}} );
				// wipeAnimation.set('.desc-container .desc-'+i, {css :{display : 'none'}} );
			
		


			// wipeAnimation.to('.title-container .title-'+i+1, 0.5, {css :{opacity : '1'}} );
		}

		
		// wipeAnimation.add(TweenLite.to('.overlay', 1, { opacity: 0}));
		// wipeAnimation.delay(70);
	}
		// .fromTo(".title", 1,   {x: "0", delay: "1"} , {left: "0"})
		// .to('.title', 2, {opacity : '0'})
		
	
	// create scene to pin and link animation
	if(w){
		new ScrollMagic.Scene({
			triggerElement: ".team-container__mobile",
			triggerHook: "0.5",
			duration: '10%',
			// offset: '700',
		})
		.setPin(".team-container__mobile", {pushFollowers: true})
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}else{
	new ScrollMagic.Scene({
			triggerElement: ".team-container",
			triggerHook: "0",
			duration: (TEAM.length+1)*20+"%",
			// offset: '700',
		})
		.setPin(".team-container", {pushFollowers: false})
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}
	
		// $('.team-slick').slick({
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	vertical : true,
		// 	arrows: false,
		// 	fade: true,
		// 	verticalSwiping : true,
		// 	// asNavFor: '.slider-nav'
		// });
		
})


$(function(){
	var btn = $('#menu-icon');
	var logo = $('.logo');
	var lang = $('.lang');
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax();
		// animate to second panel

		if($(window).width() <= 767){

			wipeAnimation.add(TweenLite.to('.overlay', 0.5, {opacity: 0.5}));
			wipeAnimation.add( function(){ 
				btn.toggleClass('inverse');
				logo.toggleClass('inverse');
				lang.toggleClass('inverse');
				
			});
	
			wipeAnimation.add(TweenLite.to('.overlay', 0.5, {opacity: 0}));
			wipeAnimation.add(TweenLite.fromTo('.services-mobile', 0.2, {opacity: 0}, {opacity : 1}));
			
			
		}else{
			
			wipeAnimation.add(TweenLite.to('.overlay', 0.5, {opacity: 0}));
			wipeAnimation.add( function(){ 
				btn.toggleClass('inverse');
				logo.toggleClass('inverse');
				lang.toggleClass('inverse');
				
			});
			// wipeAnimation.add(TweenLite.fromTo(['.services-main h2', '.services-main p'], 0.5, {className : "-=fadeInUp"},{className : "+=fadeInUp"}));
			wipeAnimation.to('.services .bg-white', 0, {className : "-=slideOutRight"});
			wipeAnimation.add(TweenLite.fromTo(['.services-main h2', '.services-main p'], 0.1, {opacity : 0},{opacity : 1}));
			wipeAnimation.to('.services-main__image .overlay-image', 0, {opacity : "1"});
			wipeAnimation.to('.services .bg-white', 0, {className : "+=slideOutRight"});
			wipeAnimation.to('.services-main__image .overlay-image', 1, {delay: 0, opacity : "1"});
			// wipeAnimation.to('.services-main__image .overlay-image', 2, {delay: 0, opacity : "1.5"});

		}
		// .add(TweenLine.fromTo('.services-main'))
	// create scene to pin and link animation

	if($(window).width() <= 767){
		new ScrollMagic.Scene({
			triggerElement: ".services",
			triggerHook: "0",
			duration: "25%",
			// offset: '700',
		})
		.setPin(".services")
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}else{

		new ScrollMagic.Scene({
				triggerElement: ".services-main",
				triggerHook: "0",
				duration: "75%",
				// offset: '700',
			})
			.setPin(".services-main")
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
});

$(function(){
	var w = $(window).width() <= 767;
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax()
		// animate to second panel
		.fromTo(".portfolio-title", 1,   {x: "0"} , {left: "0"})
		.to(".portfolio-title", 1, {fontSize: "90px"})
		


		// .to([".logo-to-bottom", ".logo-to-up"], 12, {delay : '2', className : '+=active'})
		// .to([".logo-to-bottom", ".logo-to-up"], 12, {delay : '2', className : '+=active-end'})

		.to([".logo-to-up", ".logo-to-bottom"], 2, {delay : '0', top : '-200%', bottom : '-200%'})
		// .to(".logo-to-bottom", 1, {delay : '0', top : '100vh'})
		
	// create scene to pin and link animation
	if(!w){

		new ScrollMagic.Scene({
				triggerElement: ".portfolio-container",
				triggerHook: "onLeave",
				duration: "200%"
			})
			.setPin(".portfolio-container")
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}



});

$(function(){

	var w = $(window).width() <= 767;
	if(w){return};
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax()
		// animate to second panel
	
		.fromTo(".contact-main h2", 0.5, {x : '100%'},{x : '0%' , fontSize : '90px'})

	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: ".contact-main",
			triggerHook: "onLeave",
			duration: "50%"
		})
		.setPin(".contact-main")
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);



})


$(function(){

	$('.slick-team').slick({
		dots: true,
		// accessibility: false,
		// infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow: null,
		nextArrow: null,
	});

	$('.services-slick').slick({
		dots: true,
		// accessibility: false,
		// infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow: null,
		nextArrow: null,
	});

});


$(window).on('load' , function(){
	$('#preloader').delay(500).fadeOut(1000);
});