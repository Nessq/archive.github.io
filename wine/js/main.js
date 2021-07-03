(function ($) {

    $(document).ready(function(){

        $.fatNav();

        var data = [
            { 'value': 'Бургундское', 'number': 1, 'label': 'Бургундское' },
            { 'value': 'Бордо Руж', 'number': 3, 'label': 'Бордо Руж' },
            { 'value': 'Бонакки Кьянти Ризерва', 'number': 4, 'label': 'Бонакки Кьянти Ризерва' },
            { 'value': 'Бартон и Гестье Шардоне', 'number': 5, 'label': 'Бартон и Гестье Шардоне' }
        ];

        $('.header_search_form input').autocompleter({
            source: data,

            template: '{{ value }} <span>{{ number }}</span>',
        });

        $('.autocompleter-node').focusin(function () {
           $(this).closest('form').addClass('active');
        });
        $('.autocompleter-node').focusout(function () {
            $(this).closest('form').removeClass('active');
        });

        $('.grid').masonry({
            // options...
            itemSelector: '.grid-item',
            columnWidth: 300
        });

        $('.front-slider, .bottle-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true
        });

        $('.wine-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1500,
            autoplay: true,
            infinite: true,
            centerPadding: '60px',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '130px',
                        centerMode: false
                    }
                }
            ]
        });

        $('.history-carousel').slick({
            slidesToShow: 4,
            autoplay: false,
            centerPadding: '120px',
            infinite: true,
            centerMode: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '90px'
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '60px'
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '40px'
                    }
                }
            ]
        });

        $('.comments-slider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        arrows: true,
                        centerMode: false
                    }
                }
            ]
        });

        // Mobile or Desktop add class
        var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
        var isWinPhoneDevice = /Windows Phone/.test(navigator.userAgent);

        if (isTouchDevice || isWinPhoneDevice) {
            $('body').addClass('touch-device');
        } else {
            $('body').addClass('no-touch-device');
        }

    });

    jcf.replaceAll();

    var $range = $("#range");

    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 8000,
        from: 500,
        to: 3500,
        hide_min_max: true,
        hide_from_to: true,
        onStart: function (data) {
            $('.range').prepend("<span class='js-price-from js-price'>"+ data.from + '<span>₽</span>' +"</span>")
                .append("<span class='js-price-to js-price'>"+ data.to + '<span>₽</span>' +"</span>");
        }
    });

    $range.on("change", function () {
        var $this = $(this),
            from = $this.data("from"),
            to = $this.data("to");

        $('.js-price-from').html(from + '<span>₽</span>');
        $('.js-price-to').html(to + '<span>₽</span>');
    });


    var $infoTeam = $('.team-info-page .vacancy');
    $infoTeam.find('.details-close').click(function(e){
        e.preventDefault();
        $(this).parent().slideToggle("slow");
        $(this).parent().parent().find('.vacancy__title').toggleClass('active');
    });
    $infoTeam.find('.vacancy__title').click(function(e){
        $(this).toggleClass('active');
        var d = $(this).parent().find('.vacancy__details');
        d.slideToggle("slow");
        d.css({ 'display' : 'flex'});
    
        
    });
})(jQuery);
