$(function(){
	$(window).scroll(function(){
		$('.up0').each(function(){
			var $height = $(window).height();
			var $check = $height * 0.8;
			var $top = $(window).scrollTop();
			var $offset = $(this).offset().top;
			if($top > ($offset - $check)){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		});

		$('.up1').each(function(){
			var $height = $(window).height();
			var $check = $height * 0.8;
			var $top = $(window).scrollTop();
			var $offset = $(this).offset().top;
			if($top > ($offset - $check)){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		});

		$('.up2').each(function(){
			var $height = $(window).height();
			var $check = $height * 0.8;
			var $top = $(window).scrollTop();
			var $offset = $(this).offset().top;
			if($top > ($offset - $check)){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		});

		$('.up3').each(function(){
			var $height = $(window).height();
			var $check = $height * 0.8;
			var $top = $(window).scrollTop();
			var $offset = $(this).offset().top;
			if($top > ($offset - $check)){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		});

		$('.up4').each(function(){
			var $height = $(window).height();
			var $check = $height * 0.8;
			var $top = $(window).scrollTop();
			var $offset = $(this).offset().top;
			if($top > ($offset - $check)){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		});
	});		
});

$(function(){
	var chart = $('.chart');

	chart.each(function(){
		var item = $(this);
		var title = item.find('h2');
		var targetNum = title.attr('data-num');

		$({rate:0}).animate({rate:targetNum},
			{
				duration:1500,
				progress:function(){
					var now = this.rate;
					title.text(Math.floor(now));
				}
		});
	});
});

