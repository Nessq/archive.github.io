$(document).ready(function(){
	$('.filter__btn').click(function(event) {
		
	});
	function showresult(data){
		$('#filterresults').html(data['found']);
		filterforms();
	}
	function viewresult(el){
		$.each($('.filter input'), function(index, val) {
			if($(this).val()==$(this).data('value')){
				$(this).val('');
			}
		});
		$('#filterresults').html('<img src="/img/icons/preload.gif" alt="" />');
		$('.filter__result').addClass('active').css({
			top:el.offset().top-$('.filter').offset().top-5
		});
	}
	$('.filter').on('change', 'input', function(event) {
			var form=$(this).parents('form');
			var el=$(this);
			viewresult(el);
		form.ajaxSubmit({
			success:function(data){
				console.log(data);
				showresult(data,el);
			},
			dataType:'json'
		});
	});
	$('.filter').on('click', '.check', function(event) {
			var form=$(this).parents('form');
			var el=$(this);
			viewresult(el);
		form.ajaxSubmit({
			success:function(data){
				showresult(data);
			},
			dataType:'json'
		});
	});

	$('.filter__result_close').click(function(event) {
		$('.filter__result').removeClass('active');
	});

	$('.filter__clear').click(function(event) {
			var form=$(this).parents('form');
		$.each(form.find('input[type="text"]'), function(index, val) {
			$(this).val($(this).data('value'));
		});
		$.each(form.find('input[type="checkbox"]'), function(index, val) {
			$(this).parent().removeClass('active');
			$(this).prop('checked', false);
		});
		return false;
	});
	
	$('.filter-item__input').click(function(event) {
			$(this).attr("placeholder",'');
		return false;
	});

	function filterforms(){
		$('input,textarea').focus(function(){
			if($(this).val() == $(this).attr('data-value')){
					$(this).addClass('focus');
					$(this).parent().addClass('focus');
					$(this).removeClass('err');
					$(this).parent().removeClass('err');
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','password');
				};
				$(this).val('');
			};
		});
		$('input[data-value], textarea[data-value]').each(function() {
			if (this.value == '' || this.value == $(this).attr('data-value')) {
				this.value = $(this).attr('data-value');
				//if(!$(this).hasClass('nolabel')) {
					//$(this).parent().append('<div class="form__label animated">'+$(this).attr('data-value')+'</div>');
				//}
			}
			$(this).click(function() {
				if (this.value == $(this).attr('data-value')) {
					if($(this).attr('data-type')=='pass'){
						$(this).attr('type','password');
					};
					this.value = '';
				};
			});
			$(this).blur(function() {
				if (this.value == '') {
					this.value = $(this).attr('data-value');
						$(this).removeClass('focus');
						$(this).parent().removeClass('focus');
					if($(this).attr('data-type')=='pass'){
						$(this).attr('type','text');
					};
				};
			});
		});
	};
});
