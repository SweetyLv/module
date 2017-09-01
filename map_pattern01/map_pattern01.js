$(function(){
	changemove('.England','.England_show');
	changemove('.America','.America_show');
	changemove('.Holland','.Holland_show');
	changemove('.Germany','.Germany_show');
	changemove('.France','.France_show');
	changemove('.Japan','.Japan_show');
	changemove('.Korea','.Korea_show');
	changemove('.Swiss','.Swiss_show');
	changemove('.HongTai','.HongTai_show');
	changemove('.Europe','.Europe_show');
});

	function changemove(pro,proShow){
		$(pro).mouseover(
			function(){
				$(proShow).removeClass("opc_0");
				$(proShow).addClass("opc_1");
			}
		);
		$(pro).mouseout(
			function(){
				$(proShow).addClass("opc_0");
				$(proShow).removeClass("opc_1");
			}
		);
	}
