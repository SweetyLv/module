//每次打开页面，可视区域居中显示弹窗
$(function(){

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
				$('.advertisingPopups').css('visibility','visible');
			$('.advertisingPopups .close').attr('style',"top:"+mTop/2+"px"+";right:"+mLeft/2+"px");
			
			$('.advertisingPopups').delegate('.close','click',function(){
				$('.advertisingPopups').hide();
				
			});

			$('.advertisingPopups').delegate('img','click',function(){
				var href=$(this).attr('url');
				$('.advertisingPopups').hide();
				
				if(''!=href){
					location.href=href;
				}
			});
		});
