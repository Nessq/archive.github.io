$(function(){

  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    appendDots: $('.home-nav'),
    dots: true,
    autoplay: 1000
  });

  $('.main-direction .item').matchHeight();
  $('.press .item').matchHeight();
  $('.main-direction .item .item__title').matchHeight();

});