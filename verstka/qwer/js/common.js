	function mfpClose(){
		$.magnificPopup.close();
	}
$(function() {


$('.navicon').click( function() {
  $(this).toggleClass('navicon--toggle');
  $('nav').slideToggle();
})
if($(window).width() < 992){
		$('nav a').click( function() {
		$('.navicon').toggleClass('navicon--toggle');
		$('nav').slideToggle();
		})
}
	if($(window).width() > 991){

		$('.main-title').parallax({
		invertX: true,
		invertY: true,
		scalarX: 2,
		frictionY: 0.8
	});
	}
	// 	$('.main-item').parallax({
	// 	invertX: true,
	// 	invertY: true,
	// 	scalarX: 15,
	// 	scalarY: 1,	
	// 	frictionY: 0.1
	// });
	// 	$('#wallets').parallax({
	// 	invertX: true,
	// 	invertY: true,
	// 	scalarX: 5,
	// 	scalarY: 5,	
	// 	frictionY: 0.2
	// });

	// $('#join').parallax({
	// 	invertX: true,
	// 	invertY: true,
	// 	scalarX: 5,
	// 	scalarY: 5,	
	// 	frictionY: 0.2
	// });

	wow = new WOW(
	{
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       250,          // default
	  mobile:       false,       // default
	  live:         true        // default
	});
	wow.init();

	$('.open-popup-link').magnificPopup({
		type:'inline',
		removalDelay: 350,
		showCloseBtn: false,
		mainClass: 'mfp-fade',
	});


	 $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            if(id == "#home"){
            	top = 0;
            }
        $('body,html').animate({scrollTop: top}, 1500);
    });

	 var $header = $('header');
	 	$(window).scroll(function(){
	 		$(this).scrollTop() > 350 ?	$header.addClass('fixed') : $header.removeClass('fixed');

	 		
	 	});

		
			// function fnCount(){
   //   	if($(this).scrollTop() > countItem){
   //   		$(this).off('scroll', fnCount);
   //    $('.countTo').countTo({
   //    	decimals : $(this).data("decimals"),
   //    	formatter: function (value, options) {
   //        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
   //      },
   //    });
   //   	}
   //   }
   //   $(window).on('scroll', fnCount);

     

// newwwwww
$('form input').focus(function(){
		$(this).parent().find('span').addClass('focus')
	}).blur(function(){
		var $this = $(this);
		if(!$this.val()){
			$this.parent().find('span').removeClass('focus')
		}
	});

	

	var btn = $('form .result').html();
$('form').submit(function(event){
	event.preventDefault();
	var $this = $(this);
	var date = $this.serialize();
	var $result = $this.find('.result');
	var s = $result.data('success');
	var e = $result.data('error');
	$.ajax({
		method: "POST",
		url: "/sub.php",
		dataType: 'json',
		data: date,
		beforeSend : function(){
			$this.find('button[type="submit"]').attr('disabled', 'disabled').html('Wait...');
		},
		success: function(data){
			console.log(data);
			if(data == 200){
				$result.html('<span class="text-success">'+s+' close 3s</span>');
				setTimeout(()=> $result.html('<span class="text-success">'+s+' close 2s</span>'),1000);
				setTimeout(()=> $result.html('<span class="text-success">'+s+' close 1s</span>'),2000);
				$this.find('.input-group span').removeClass('focus');
				$this.trigger('reset');
				setTimeout(()=> $result.html(btn),3000);
				setTimeout(()=> $.magnificPopup.close(),3000);
			}else{
				$result.html('<span class="text-error">'+e+' 3s</span>');
				setTimeout(()=> $result.html('<span class="text-error">'+e+' 2s</span>'), 1000);
				setTimeout(()=> $result.html('<span class="text-error">'+e+' 1s</span>'), 2000);
				setTimeout(()=> $result.html(btn), 3000);
				$this.find('.input-group span').removeClass('focus');
				$this.trigger('reset');
			}
		},
	});
});


});


$(function(){
	$('.leng>li>a').click(function(e){
		e.preventDefault();
		$(this).parent().find('ul').slideToggle({duration : 100});
	});
});

$(function(){
	var arr = [0, 90, -90, 180];
	$('.roadmap-q img').each(function(i){
		var $t = $(this);
		$t.css({transform : "rotate("+arr[i]+"deg)"});
	});
});

