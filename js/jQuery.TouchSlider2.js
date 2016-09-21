// 图片切换
jQuery.fn.TouchSllider2=function(Options){
	var timer;
	//设置参数默认值
		var def = {mainClass:'.banner'};
		//设置参数
		var setting=jQuery.extend({},def,Options);
	//手动
	$(setting.mainClass+' '+'.xb span').each(function(i){
		$(this).mouseover(function(){
			$(setting.mainClass+' '+'.xb span').removeClass('active')
			$(this).addClass('active')
			$(setting.mainClass+' '+'.slider-main li').hide();
			$(setting.mainClass+' '+'.slider-main li').eq(i).fadeIn();
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
			$(setting.mainClass+' '+'.slider-main li').hide();
			$(setting.mainClass+' '+'.slider-main li').eq(n-1).fadeIn();
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
			$(setting.mainClass+' '+'.slider-main li').hide();
			$(setting.mainClass+' '+'.slider-main li').eq(n+1).fadeIn();
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
			$(setting.mainClass+' '+'.slider-main li').hide();
			$(setting.mainClass+' '+'.slider-main li').eq(n+1).fadeIn();
		}else{
			$(setting.mainClass+' '+'.xb span').removeClass('active')
			$(setting.mainClass+' '+'.xb span').eq(0).addClass('active')
			$(setting.mainClass+' '+'.slider-main li').hide();
			$(setting.mainClass+' '+'.slider-main li').eq(0).fadeIn();
		}
	}
	timer = setInterval(autoPlay,2000);
	//控制播放
	$(setting.mainClass+' '+'.slider').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,2000);
	})
}
