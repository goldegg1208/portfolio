$(function(){
    $('#main .img').css({'animation':'fadeIn 1.0s ease-in-out 1 forwards','animation-delay':'0.3s'});
    $('#main .b_text1').css({'animation':'fadeIn 1.0s ease-in-out 1 forwards','animation-delay':'0.5s'});
    $('#main .b_text2').css({'animation':'fadeIn 1.0s ease-in-out 1 forwards','animation-delay':'0.7s'});
    $('#main .b_text3').css({'animation':'fadeIn 1.0s ease-in-out 1 forwards','animation-delay':'0.9s'});
    $('#main .s_text1').css({'animation':'fadeIn 1.0s ease-in-out 1 forwards','animation-delay':'1.1s'});
    $('#main .s_text2').css({'animation':'fadeIn 1.0s ease-in-out 1 forwards','animation-delay':'1.3s'});
    $('#main .s_text3').css({'animation':'fadeIn 1.0s ease-in-out 1 forwards','animation-delay':'1.5s'});
});

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

		$('.up5').each(function(){
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
	var height2 = $(window).height();
	var check2 = height2 * 0.8;
	
	var chart = $('.chart');
	var chartOST = chart.offset().top - check2;
	var excuted = false;
	
	$(window).scroll(function(){
		var currentSCT = $(this).scrollTop();
		if(currentSCT >= chartOST){
			if(excuted == false){
				chart.each(function(){
					var item = $(this);
					var title = item.find('h2');
					var targetNum = title.attr('data-num');
					var circle = item.find('circle');
			
					$({rate:0}).animate({rate:targetNum},
						{
							duration:1500,
							progress:function(){
								var now = this.rate;
								var amount = 630 - (630*now/100);
								title.text(Math.floor(now)+"%");
								circle.css({strokeDashoffset:amount});
							}
					});
				}); 
				excuted = true;
			}
		}
	});
	
});

$(document).ready(function(){	
       var swiper = new Swiper('.swiper01', {
           loop:true,
		   speed:5000,
		   effect : 'fade',
		   autoplay:{delay:5000},
			pagination: {
			  el: ".main-page",
			  clickable: true,
			},
        });
    });











