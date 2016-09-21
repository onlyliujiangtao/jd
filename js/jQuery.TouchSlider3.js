// 图片无缝隙滚动
jQuery.fn.TouchSllider3=function(Options){
	var timer;
	//设置参数默认值
	var def = {mainClass:'.banner'};
	//设置参数
	var setting=jQuery.extend({},def,Options);
	//自动
	var l=0;
	function autoPlay(){
		if($(setting.mainClass+' .slider').scrollLeft()>=$(setting.mainClass+' .slider').width()){
			l=0;
		}
		$(setting.mainClass+' .slider').scrollLeft(l);
		l+=1;
	}
	timer = setInterval(autoPlay,10);
	//控制播放
	$(setting.mainClass+' '+'.slider').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,10);
	})
}
