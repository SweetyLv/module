//每天仅出现一次弹窗，cookie记录了，可视区域全屏居中显示弹窗信息
$(function(){
	var current_date=new Date().getDate();
    var mTop=$(window).height()-$('.advertisingPopups img').attr('height');
				var mLeft=$(window).width()-$('.advertisingPopups img').attr('width');
			$(window).resize(function(){
mTop=$(window).height()-$('.advertisingPopups img').attr('height');
				mLeft=$(window).width()-$('.advertisingPopups img').attr('width');
$('.advertisingPopups img').css('margin-top',mTop/2+'px');
$('.advertisingPopups .close').attr('style',"top:"+mTop/2+"px"+";right:"+mLeft/2+"px");

});
				var mTop=$(window).height()-$('.advertisingPopups img').attr('height');
				var mLeft=$(window).width()-$('.advertisingPopups img').attr('width');
				//var mRight=$(document).width()-mLeft;

				$('.advertisingPopups img').css('margin-top',mTop/2+'px');
				$('.advertisingPopups img').css('margin-left',mLeft/2+'px');
				if(current_date!=$.cookie('advertisingPopups_expires')){
					$('.advertisingPopups').css('visibility','visible');
				}else{
					$('.advertisingPopups').css('visibility','hidden');
				}
			$('.advertisingPopups .close').attr('style',"top:"+mTop/2+"px"+";right:"+mLeft/2+"px");
			
			$('.advertisingPopups').delegate('.close','click',function(){
				$('.advertisingPopups').hide();
				$.cookie('advertisingPopups_expires',current_date,{path:'/',expires:1});
			});

			$('.advertisingPopups').delegate('img','click',function(){
				var href=$(this).attr('url');
				$('.advertisingPopups').hide();
				$.cookie('advertisingPopups_expires',current_date,{path:'/',expires:1});
				if(''!=href){
					location.href=href;
				}
			});
		});
