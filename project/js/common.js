$(function() {

	//SVG Fallback
//	if(!Modernizr.svg) {
//		$("img[src*='svg']").attr("src", function() {
//			return $(this).attr("src").replace(".svg", ".png");
//		});
//	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    $('.nav1 li:not(".nav1 > li:first-child")').addClass('li1');
    $('.dropdownMenu li').removeClass('li1').addClass('li2');
    jQuery('ul.nav1 > .li1').hover(function() {
    jQuery(this).find('.dropdownMenu').stop(true, true).delay(200).fadeIn();
}, function() {
    jQuery(this).find('.dropdownMenu').stop(true, true).delay(200).fadeOut();
})
    jQuery('.dropdownMenu > .li2').hover(function() {
    jQuery(this).find('.dropdownMenu2').stop(true, true).delay(200).fadeIn();
}, function() {
    jQuery(this).find('.dropdownMenu2').stop(true, true).delay(200).fadeOut();
})
    $('#Carousel').carousel({
		interval: 2000
	});
    $('#Carousel2').carousel({
        interval: false
    });
    $('#Carousel3').carousel({
        interval: false
    });
    var searchI = $('#search .searchIcon i');
    var search = $('#search .submit');
    search.mouseover(function(){
        searchI.css({color: '#ff5c00'})
    }).mouseout(function() {searchI.css({color: '#e6e6e6'})});
    $('.nav1 .menuMob').click(function(){
        $('.nav1 li:not(".nav1 > li:first-child")').slideToggle();
    });
//    $('.nav1 .li2').click(function(){
//        $('.dropdownMenu2').slideToggle();
//    })
//    $('.nav1 .li1').click(function(){
//        $('.dropdownMenu').slideToggle();
//    })
    
    var $rh = $('.tovar .itemPhotoTovar').height();
    $('.tovar .itemTextTovar').height($rh);
    $(window).resize(function(){
    var $rh = $('.tovar .itemPhotoTovar').height();
        $('.tovar .itemTextTovar').height($rh);
    })
    
    $('.countPlus').click(function(){
        var defoult = $(this).siblings("span").html();
        $(this).siblings("span").empty().html(+defoult+1)
    });
    $('.countMinus').click(function(){
        var defoult = $(this).siblings("span").html();
        if(+defoult > 1){
        $(this).siblings("span").empty().html(+defoult-1);
        }
        
    });
    $('.tovCart img').wrap('<div style="text-align: center"></div>').parent().parent().addClass('borderRight')
    var cou = 1;
    $('.imageItem img').wrap('<a class="fancybox-thumb" rel="fancybox-thumb" href="img/tovar/1.jpg"></a>')
    $(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
    
});
