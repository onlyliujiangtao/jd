$(function(){
	$('#addrass').hover(function(){
		$(this).addClass('active');
		$(this).find('.arrow').removeClass('arrow-b');
		$(this).find('.arrow').addClass('arrow-t');
		$(this).find('.add').show();
	},function(){
		$('#addrass').removeClass('active');
		$(this).find('.arrow').removeClass('arrow-t');
		$(this).find('.arrow').addClass('arrow-b');
		$(this).find('.add').hide();
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
	$('.nav .list').each(function(){
		$(this).hover(function(){
			$(this).addClass('active');
			$(this).find('span').removeClass('arrow-b');
			$(this).find('span').addClass('arrow-t');
			$(this).find('.phone').css('background-position','left -25px')
		},function(){
			$('.nav .list').removeClass('active');
			$(this).find('span').removeClass('arrow-t');
			$(this).find('span').addClass('arrow-b');
			$(this).find('.phone').css('background-position','top left')
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

/*选项卡*/
$(function(){
	$('.tab-item').click(function(){
		$('.tab-item').next('span').show();
		$(this).prev('span').hide();
		$(this).next('span').hide();
		$('.tab-item').removeClass('tab-selected');
		$(this).addClass('tab-selected')
	})
})
/*图片滚动*/
$(function(){
	$(window).TouchSllider({mainClass:'.top7'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top8'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top9'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top10'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top11'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top12'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top13'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top14'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top15'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top16'});
})
$(function(){
	$(window).TouchSllider({mainClass:'.top17'});
})
// 图片切换
$(function(){
	$(window).TouchSllider2({mainClass:'.top3'});
})
// 无缝隙滚动
$(function(){
	$(window).TouchSllider3({mainClass:'.top4'});
})
/*楼层*/
$(function(){
	$('.elevator .handler').hover(function(){
		$(this).find('a').hide();
		$(this).find(".etitle").show();
	},function(){
		$(this).find('a').show();
		$(this).find(".etitle").hide();
	})
})