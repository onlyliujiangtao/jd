// 图片滚动
jQuery.fn.TouchSllider=function(Options){
	var timer;
	//设置参数默认值
		var def = {mainClass:'.banner'};
		//设置参数
		var setting=jQuery.extend({},def,Options);
	// $(setting.mainClass+' '+'.slider .slider-main li').width($(setting.mainClass+' '+'.slider').width());
	//手动
	$(setting.mainClass+' '+'.xb span').each(function(i){
		$(this).mouseover(function(){
			$(setting.mainClass+' '+'.xb span').removeClass('active')
			$(this).addClass('active')
			$(setting.mainClass+' '+'.slider-main').stop().animate({left:-i*$(setting.mainClass+' '+'.slider').width()})
		})
	})
	var n=0;
	//上一个
	$(setting.mainClass+' '+'.blank .pre').click(function(){
		$(setting.mainClass+' '+'.xb span').each(function(i){
			if($(this).attr('class')=='active'){
				n=i
			}
		})
		if(n>0){
			$(setting.mainClass+' '+'.xb span').removeClass('active')
			$(setting.mainClass+' '+'.xb span').eq(n-1).addClass('active')
			$(setting.mainClass+' '+'.slider-main').stop().animate({left:-(n-1)*$(setting.mainClass+' '+'.slider').width()})
		}
	})
	//下一个
	$(setting.mainClass+' '+'.blank .next').click(function(){
		$(setting.mainClass+' '+'.xb span').each(function(i){
			if($(this).attr('class')=='active'){
				n=i
			}
		})
		if(n<$(setting.mainClass+' '+'.xb span').length-1){
			$(setting.mainClass+' '+'.xb span').removeClass('active')
			$(setting.mainClass+' '+'.xb span').eq(n+1).addClass('active')
			$(setting.mainClass+' '+'.slider-main').stop().animate({left:-(n+1)*$(setting.mainClass+' '+'.slider').width()})
		}
	})
	//自动
	function autoPlay(){
		$(setting.mainClass+' '+'.xb span').each(function(i){
			if($(this).attr('class')=='active'){
				n=i
			}
		})
		if(n<$(setting.mainClass+' '+'.xb span').length-1){
			$(setting.mainClass+' '+'.xb span').removeClass('active')
			$(setting.mainClass+' '+'.xb span').eq(n+1).addClass('active')
			$(setting.mainClass+' '+'.slider-main').stop().animate({left:-(n+1)*$(setting.mainClass+' '+'.slider').width()})
		}else{
			$(setting.mainClass+' '+'.xb span').removeClass('active')
			$(setting.mainClass+' '+'.xb span').eq(0).addClass('active')
			$(setting.mainClass+' '+'.slider-main').stop().animate({left:-0*$(setting.mainClass+' '+'.slider').width()})
		}
	}
	timer = setInterval(autoPlay,2000);
	//控制播放
	$(setting.mainClass+' '+'.slider').hover(function(){
		window.clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,2000);
	})
}
