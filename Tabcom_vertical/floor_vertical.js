$(function(){
	// tab内容滑动
	var activity_tit = new Swiper('.activity_tit',{
        direction : "horizontal",
        slidesPerView : 'auto',
        freeMode: true,
    })
	var activity_con_wrap = new Swiper('.vertical_floor_con',{  
	    direction : "horizontal",
	    slidesPerView : 'auto',
	    freeMode: true,
	})
	$(document).ready(function(){

		var activityid = $('.activity_active').attr('selid');
		
		$('.activity_time_list').each(function(){
			if(activityid=activity1){
				$(this).addClass('activity_active');
				return false;
			}
		});
		$('.vertical_floor_con .hot_recommond_wrap').html($('#activity1').html());
    	activity_con_wrap.onResize();
	})

    function selecttap(item){
    	var selectid = $(item).attr('selid');
    	var _html = $('#' + selectid).html();
    	console.log(selectid);
    	$('.vertical_floor_con .hot_recommond_wrap').html(_html);
    	activity_con_wrap.onResize();
    }
	// tab点击效果
	$(document).on('click','.activity_time_list',function(){
		$(this).addClass('activity_active').siblings().removeClass('activity_active');
		var selectid = $(this).attr('selid');
    	var _html = $('#' + selectid).html();
    	$('.vertical_floor_con .hot_recommond_wrap').html(_html);
    	activity_con_wrap.onResize();
	})

})
