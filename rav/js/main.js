
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
  $('#slidewrapper').owlCarousel({
    items : 3,
    margin : 30,
    nav : true,
    navText : false,
    dots : false,
    responsive : {
        0 : { items : 1},
        768 : { items : 3}
    }
  });
  $('#comentslider').owlCarousel({
    items : 2,
    margin : 30,
    nav : true,
    navText : false,
    dots : false,
    responsive : {
        0 : { items : 1},
        768 : { items : 2}
    }
  });
});



$(function() {
    $('.model-window1-actiway').click(function(){
        $('.model-window1').fadeIn(500);
    });
    $('.modal-close-1').click(function(){
      $('.model-window1').fadeOut(500);  
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".model-window1").length || $(event.target).closest(".model-window1-actiway").length ) return;
    $('.model-window1').fadeOut(500);
    event.stopPropagation();
});
})
$(function() {
    $('.model-window2-actiway').click(function(){
        $('.model-window2').fadeIn(500);
    });
    $('.modal-close-2').click(function(){
      $('.model-window2').fadeOut(500);  
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".model-window2").length || $(event.target).closest(".model-window2-actiway").length ) return;
    $('.model-window2').fadeOut(500);
    event.stopPropagation();
});
})

$(function() {
    $('.model-window3-actiway').click(function(){
        $('.model-window3').fadeIn(500);
    })
    $('.modal-close-3').click(function(){
      $('.model-window3').fadeOut(500);  
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".model-window3").length || $(event.target).closest(".model-window3-actiway").length ) return;
    $('.model-window3').fadeOut(500);
    event.stopPropagation();
});
})

$(function() {
    $('.model-window4-actiway').click(function(){
        $('.model-window4').fadeIn(500);
    });
     $('.modal-close-4').click(function(){
      $('.model-window4').fadeOut(500);  
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".model-window4").length || $(event.target).closest(".model-window4-actiway").length ) return;
    $('.model-window4').fadeOut(500);
    event.stopPropagation();
});
})


$(function() {
    $('.model-window5-actiway').click(function(){
        $('.model-window5').css('display', 'block');
    });
     $('.modal-close-5').click(function(){
      $('.model-window5').fadeOut(500);  
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".model-window5").length || $(event.target).closest(".model-window5-actiway").length ) return;
    $('.model-window5').fadeOut(500);
    event.stopPropagation();
});
})

$(function() {
    $('.model-window6-actiway').click(function(){
        $('.model-window6').fadeIn(500);
    });
    $('.modal-close-6').click(function(){
      $('.model-window6').fadeOut(500);  
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".model-window6").length || $(event.target).closest(".model-window6-actiway").length ) return;
    $('.model-window6').fadeOut(500);
    event.stopPropagation();
});
})


$(function() {
    $('.model-window7-actiway').click(function(){
        $('.model-window7').fadeIn(500);
    });
    $('.modal-close-7').click(function(){
      $('.model-window7').fadeOut(500);  
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".model-window7").length || $(event.target).closest(".model-window7-actiway").length ) return;
    $('.model-window7').fadeOut(500);
    event.stopPropagation();
});
})

$(document).ready(function(){

 

        var $menu = $("#menu");

 

        $(window).scroll(function(){

            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){

                $menu.removeClass("default").addClass("fixed");

            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll

    });


$(document).ready(function(){

 

        var $menu = $("#menu");

 

        $(window).scroll(function(){

            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){

                $menu.fadeOut('fast',function(){

                    $(this).removeClass("default")

                           .addClass("fixed transbg")

                           .fadeIn('fast');

                });

            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {

                $menu.fadeOut('fast',function(){

                    $(this).removeClass("fixed transbg")

                           .addClass("default")

                           .fadeIn('fast');

                });

            }

        });//scroll

 

        $menu.hover(

            function(){

                if( $(this).hasClass('fixed') ){

                    $(this).removeClass('transbg');

                }

            },

            function(){

                if( $(this).hasClass('fixed') ){

                    $(this).addClass('transbg');

                }

            });//hover

    });//jQuery


$(document).ready(function(){

 

        var $menu = $("#menu-mob");

 

        $(window).scroll(function(){

            if ( $(this).scrollTop() > 100 && $menu.hasClass("dd") ){

                $menu.removeClass("dd").addClass("fixed");

            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("dd");
            }
        });//scroll

        if($(window).width() >= 768){
        $('.permit').matchHeight();
        $('#slidewrapper h5').matchHeight();
        $('#slidewrapper p').matchHeight();
        $('.teble > .row > .col-md-12 > div').matchHeight();
        }


    });
    

    $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });
});