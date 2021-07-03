$(document).ready(function(){
	function autoHeight(){
		var h = $(window).height()
		$('.parallax').css({
			height: h
		});
	};
	autoHeight();
	$(window).resize(function(){
		autoHeight();
	});



});