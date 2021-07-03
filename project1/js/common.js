$(function() {
	var aPos = 1;
	$('.arrow1').click(function(){
				if(aPos == 1){
				$(this).css({
					'transform': 'rotateX(180deg)'
				});
				$('.row2').attr('rowspan', '2')

				aPos = 0;
			}
			else{
				$(this).css({
					'transform': 'rotateX(0)'
				});
				$('.row2').attr('rowspan', '1')
				aPos = 1;
			}
			$('.cnt1').toggle();
	});
	var bPos = 1;
	$('.arrow2').click(function(){
				if(bPos == 1){
				$(this).css({
					'transform': 'rotateX(180deg)'
				});
				$('.row2_2').attr('rowspan', '2')

				bPos = 0;
			}
			else{
				$(this).css({
					'transform': 'rotateX(0)'
				});
				$('.row2_2').attr('rowspan', '1')
				bPos = 1;
			}
			$('.cnt2').toggle();
	});

	$('.tabsList li').click(function(){
			var a = $(this).index();
			$('.tabsList li').removeClass('active');
			$(this).addClass('active');
			$('.tabs').removeClass('active');
			$('.tabs:eq('+a+')').addClass('active');
			
	});

	$('.burger').click(function(){
		$(this).toggleClass('active');
		$('header nav').slideToggle();
	});
	$('.mobile i').click(function(){
		$('.mobile i').removeClass('active');
		$(this).addClass('active');
	});
});
