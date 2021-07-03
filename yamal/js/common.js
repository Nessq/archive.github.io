$(function() {

	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".feedback-forms form").submit(function() { //Change
		var th = $(this);
		$('.modal-cart').modal();
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".section-cart form").submit(function() { //Change
		var th = $(this);
		$('.modal-cart').modal();
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	

		$('.carousel-banner').owlCarousel({
			items : 1,
			loop : true,
			smartSpeed: 700
		});
		$('.item .button').click(function(){
			$('#view').modal('show')
		});
		$(function(){
		var owl = $('.view-gallery-carousel');
		owl.owlCarousel({
			items : 1,
			smartSpeed : 100,
			dotsContainer : '.custom-owl-dots'
		});
		})
	var mdl = $('.modal-cart');
	mdl.on('show.bs.modal', function(){
		$('#view').modal('hide');
	});
		
	$(document).ready(function(){
		$('body').css({
			opacity : '1'
		});
		setTimeout(function(){
			$('head style').empty();
		},1000)
		
	});
		// info размер в переменной optionSize типа String
		var optionsSize = 'S'
	$('.options-size li').click(function(){
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		optionsSize = $(this).html();		
	});
	//end optionsSize

	// info Колл-во в переменной optionCount типа Integer

	var optionsCount = 1
	$('.options-count li').click(function(){
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		optionsCount = +$(this).html();
	});
	//end optionsCount
 
 // $('.feedback-forms .button').click(function(e){
 // 	e.preventDefault();
 // })
});
