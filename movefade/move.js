function bar_first(){
    $('#big').addClass('fadeIn').show();
}
bar_first();
function bar_show(){
	$('#big').addClass('slideRight').show();
	$('#small').addClass('slideLeft').hide();
}

function bar_hidden(){
	$('#big').addClass('slideRight').hide();
	$('#small').addClass('slideLeft').show();
}
