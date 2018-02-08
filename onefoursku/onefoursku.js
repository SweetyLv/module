$(function(){
	var num = 0;
	$(".item_pic_minsku ul li").hover(function(){
		num = $(this).index();
		var ss = $(this).find("img").attr("src");
		$(this).parents('.item_pic_sku').find('.main_pic_dd img').attr('src',ss);
	});
});
