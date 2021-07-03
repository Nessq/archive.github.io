$(function() {

	if($(window).width() > 767){
		$('.layer').parallax(
			{ mouseport: $("#main")},
		{ xparallax: '30px',    yparallax: '30px' },      // Layer 1
		{ xparallax: '45px',    yparallax: '45px' },      // Layer 1
		{ xparallax: '50px',    yparallax: '50px' },      // Layer 1
		);
	}



	$('.placeholder input').focus(function(){
		$(this).parent().find('span').addClass('focus')
	}).blur(function(){
		var $this = $(this);
		setTimeout(function(){
		if(!$this.val()){
			$this.parent().find('span').removeClass('focus')
		}

		}, 50);

	});

	$('input[name=phone]').maskinp('+38 (999) 999-99-99');



	//portfolio filter

	$('.portfolio-nav li').click(function(){
		var sort = $(this).data('sort') || "all";
		$('.portfolio-nav li').removeClass("active");
		$(this).addClass("active");
		$('.portfolio-item').removeClass('active noactive')

		if(sort != "all"){
			$('.portfolio-item').each(function(){
				if($(this).data('sort') == sort){
					$(this).addClass('active');
				}else{
					$(this).addClass('noactive');
				}
			});
		}

	});

	var header = $('header');
	var body = $("body");
	$(window).scroll(function(){
		if($(this).scrollTop() != 0){
			header.addClass('fixed');
			body.css({paddingTop : header.outerHeight()})
		}
		else{
			header.removeClass('fixed');
			body.css({paddingTop : 0})
		}
	});


//faq items

	$('.faq-items li a').click(function(e){
		e.preventDefault();
		var $this = $(this).parent();
		$this.toggleClass('show');

		$this.find('div').slideToggle('300ms');
	});



	$('a').click(function(e){
		t = $(this);
		var href = t.attr("href");
		if(href[0] == "#" && href.length > 1){
			e.preventDefault();
			var top = $(href).offset().top;
			$("body,html").stop().animate({scrollTop : top}, 1000);
		}
	});




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



});



document.querySelectorAll('img.svg').forEach(function(img){
    var imgID = img.id;
    var imgClass = img.className;
    var imgURL = img.src;

    fetch(imgURL).then(function(response) {
        return response.text();
    }).then(function(text){

        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(text, "text/xml");

        // Get the SVG tag, ignore the rest
        var svg = xmlDoc.getElementsByTagName('svg')[0];

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            svg.setAttribute('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            svg.setAttribute('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        svg.removeAttribute('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
            svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
        }

        // Replace image with new SVG
        img.parentNode.replaceChild(svg, img);

    });

});


$(function(){
	setTimeout(function(){

	$("body").css({opacity : 1});
	}, 500)
});


$(function(){

	var $calc = $('.calculate-price');


	function calc(s){
		s = s.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		return s+" РУБ."
	};

	$(".form-ind .table label").click(function(){
		setTimeout(function(){
			var sum = 0;
			$('.form-ind').find("input[type='checkbox']:checked").each(function(){
				sum += +($(this).data('price'));
			});
			$('.calculate-price').html(calc(sum));
		}, 10)
	});		

})


$(function(){
	$("form").submit(function(e) {
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

	
$(function(){
	
	var $burger = $('.burger');
	var $nav = $('.burger, nav a');
	var $bars = $('.burger-svg__bars');
	var $bar = $('.burger-svg__bar');
	var $bar1 = $('.burger-svg__bar-1');
	var $bar2 = $('.burger-svg__bar-2');
	var $bar3 = $('.burger-svg__bar-3');
	var isChangingState = false;
	var isOpen = false;
	var burgerTL = new TimelineMax();
	
	function burgerOver() {
			
		if(!isChangingState) {
			burgerTL.clear();
			if(!isOpen) {
				burgerTL.to($bar1, 0.5, { y: -2, ease: Elastic.easeOut })
						.to($bar2, 0.5, { scaleX: 0.6, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5")
						.to($bar3, 0.5, { y: 2, ease: Elastic.easeOut }, "-=0.5");
			}
			else {
				burgerTL.to($bar1, 0.5, { scaleX: 1.2, ease: Elastic.easeOut })
						.to($bar3, 0.5, { scaleX: 1.2, ease: Elastic.easeOut }, "-=0.5");
			}
		}
	}
	
	function burgerOut() {
		if(!isChangingState) {
			burgerTL.clear();
			if(!isOpen) {
				burgerTL.to($bar1, 0.5, { y: 0, ease: Elastic.easeOut })
						.to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5")
						.to($bar3, 0.5, { y: 0, ease: Elastic.easeOut }, "-=0.5");
			}
			else {
				burgerTL.to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut })
						.to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.5");
			}
		}
	}
	
	function showCloseBurger() {
		burgerTL.clear();
		burgerTL.to($bar1, 0.3, { y: 6, ease: Power4.easeIn })
				.to($bar2, 0.3, { scaleX: 1, ease: Power4.easeIn }, "-=0.3")
				.to($bar3, 0.3, { y: -6, ease: Power4.easeIn }, "-=0.3")
				.to($bar1, 0.5, { rotation: 45, ease: Elastic.easeOut, transformOrigin: "50% 50%" })
				.set($bar2, { opacity: 0, immediateRender: false }, "-=0.5")
				.to($bar3, 0.5, { rotation: -45, ease: Elastic.easeOut, transformOrigin: "50% 50%", onComplete: function() { isChangingState = false; isOpen = true; } }, "-=0.5");
	}
	
	function showOpenBurger() {
		burgerTL.clear();
		burgerTL.to($bar1, 0.3, { scaleX: 0, ease: Back.easeIn })
				.to($bar3, 0.3, { scaleX: 0, ease: Back.easeIn }, "-=0.3")
				.set($bar1, { rotation: 0, y: 0 })
				.set($bar2, { scaleX: 0, opacity: 1 })
				.set($bar3, { rotation: 0, y: 0 })
				.to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut })
				.to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.4")
				.to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut, onComplete: function() { isChangingState = false; isOpen = false; } }, "-=0.5");
	}

	$nav.on('click', function(e) {
		
		if(!isChangingState) {
			isChangingState = true;
		
			if(!isOpen) {
				showCloseBurger();
				$('nav').slideToggle('300');
			}
			else {
				showOpenBurger();
				$('nav').slideToggle('300');
			}	
		}
		
	});
	
	$burger.hover( burgerOver, burgerOut );
	
});


wow = new WOW(
{
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       200,          // default
                      mobile:       false,       // default
                      live:         true        // default
                    }
                    )
wow.init();