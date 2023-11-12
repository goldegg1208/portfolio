<script type="text/javascript">
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
</script>
