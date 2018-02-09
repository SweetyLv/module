$(function(){

	$(".goodlist_mul_sku>ul>li").each(function(){
		var dd = $(this).find(".item_pic_minsku ul li:nth-child(1)").find('img').attr("data-original");
		var csal_pr = $(this).find(".item_pic_minsku ul li .hid_salepri").html();
		var cyuan_pr =$(this).find(".hid_yuanpri").html();
		var ca_src = $(this).find(".item_pic_minsku ul li:nth-child(1)").find("a").attr("href");
		var cpro_name = $(this).find(".item_pic_minsku ul li:nth-child(1)").find(".hid_proname").html();

		$(this).find(".item_pic_sku .main_pic_dd img").attr('src',dd);
		$(this).find('.item_info_ttt .item_salepri .sell_price').html(csal_pr);
		$(this).find('.item_info_ttt .item_yuanpri .market_price').html(cyuan_pr);
		$(this).find('.main_pic_dd').attr('href',ca_src);
   	    $(this).find('.item_info_ttt .buy_button a').attr('href',ca_src);
   	    $(this).find('.item_info_ttt .item_desc_sku').html(cpro_name);
	});

	var num = 0;
	$(".item_pic_minsku ul li").hover(function(){
		num = $(this).index();
		var ss = $(this).find("img").attr("src");
		var sal_pri = $(this).find(".hid_salepri").html();
		var yuan_pri = $(this).find(".hid_yuanpri").html();
		var a_src = $(this).find("a").attr("href");
		var pro_name = $(this).find(".hid_proname").html();
		$(this).parents('.item_pic_sku').find('.main_pic_dd img').attr('src',ss);

		$(this).parents('.item_pic_sku').find('.main_pic_dd').attr('href',a_src);
		$(this).parents('.import_item_inner').find('.item_info_ttt .buy_button a').attr('href',a_src);

		$(this).parents('.import_item_inner').find('.item_info_ttt .item_salepri .sell_price').html(sal_pri);
		$(this).parents('.import_item_inner').find('.item_info_ttt .item_yuanpri .market_price').html(yuan_pri);
		$(this).parents('.import_item_inner').find('.item_info_ttt .item_desc_sku').html(pro_name);	
	});
});
