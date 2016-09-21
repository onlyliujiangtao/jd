$(function(){
	$('#addrass').hover(function(){
		$(this).addClass('hover');
		$(this).find('.arrow').addClass('arrow-down')
		$('.add').show();
		return false;
	},function(){
		$(this).removeClass('hover');
		$(this).find('.arrow').removeClass('arrow-down')
		$('.add').hide();
	})
})

$(function(){
	$('.nav .item').each(function(){
		$(this).hover(function(){
			$(this).addClass('hover');
			$(this).find('.arrow').addClass('arrow-down')
			$(this).find('.phone').css('background-position','left -25px')
		},function(){
			$(this).removeClass('hover');
			$(this).find('.arrow').removeClass('arrow-down')
			$(this).find('.phone').css('background-position','left 0px')
		})
	})
})

$(function(){
	$('.item').each(function(){
		$(this).click(function(){
			$('#add').attr('title',$(this).text())
			$('#add').text($(this).text())
			$('.item').removeClass('active')
			$(this).addClass('active')
		})
	})
})
$(function(){
	var oldVal;
	$('#search').focus(function(){
		oldVal = $(this).val();
		$(this).val("");
	})
	$('#search').blur(function(){
		$(this).val(oldVal)
	})
})
$(function(){
	$('.goodscar').hover(function(){
		$(this).addClass('shadow goodscarHover');
	},function(){
		$(this).removeClass('shadow goodscarHover');
	})
})

$(function(){
	//手动
	var n;
	$('.slider .pager li').each(function(i){
		$(this).mouseover(function(){
			$('.slider .pager li').removeClass('active');
			$(this).addClass('active');
			$('.slider .slider-mian li').hide()
			$('.slider .slider-mian li').eq(i).fadeIn()
		})
	})
	$('.slider .pre').click(function(){
		$('.slider .pager li').each(function(i){
			if($(this).attr('class')=='active'){
				n=i;
			}
		})
		if(n<=0){
			n=5;
			$('.slider .slider-mian li').hide()
			$('.slider .slider-mian li').eq(n).fadeIn()
			$('.slider .pager li').removeClass('active');
			$('.slider .pager li').eq(n).addClass('active');
		}else{
			$('.slider .slider-mian li').hide()
			$('.slider .slider-mian li').eq(n-1).fadeIn()
			$('.slider .pager li').removeClass('active');
			$('.slider .pager li').eq(n-1).addClass('active');
		}
	})
	$('.slider .next').click(function(){
		$('.slider .pager li').each(function(i){
			if($(this).attr('class')=='active'){
				n=i;
			}
		})
		if(n>=5){
			n=0;
			$('.slider .slider-mian li').hide()
			$('.slider .slider-mian li').eq(n).fadeIn()
			$('.slider .pager li').removeClass('active');
			$('.slider .pager li').eq(n).addClass('active');
		}else{
			$('.slider .slider-mian li').hide()
			$('.slider .slider-mian li').eq(n+1).fadeIn()
			$('.slider .pager li').removeClass('active');
			$('.slider .pager li').eq(n+1).addClass('active');
		}
	})
	//自动
	var timer;
	function autoPlay(){
		$('.slider .pager li').each(function(i){
			if($(this).attr('class')=='active'){
				n=i;
			}
		})
		if(n>=5){
			n=0;
			$('.slider .slider-mian li').hide()
			$('.slider .slider-mian li').eq(n).fadeIn()
			$('.slider .pager li').removeClass('active');
			$('.slider .pager li').eq(n).addClass('active');
		}else{
			$('.slider .slider-mian li').hide()
			$('.slider .slider-mian li').eq(n+1).fadeIn()
			$('.slider .pager li').removeClass('active');
			$('.slider .pager li').eq(n+1).addClass('active');
		}
	}
	timer=window.setInterval(autoPlay,4000)
	$('.slider').eq(0).mouseover(function(){
		window.clearInterval(timer);
	})
	$('.slider').eq(0).mouseout(function(){
		timer=window.setInterval(autoPlay,4000);
	})
})

$(function(){
	$('.nav-left .items').each(function(i){
		$(this).mouseover(function(){
			$('.nav-left .items').removeClass('active')
			$(this).addClass('active')
			$('.hiden').show();
		})
		$('.hiden').hover(function(){
			$('.hiden').show();
		},function(){
			$('.nav-left .items').removeClass('active')
			$('.hiden').hide();
		})
	})
})








