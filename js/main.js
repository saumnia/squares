
var wimg = $('.galimg').width();
var himg = $('.galimg').height(wimg).height();


$('.galimg img').each(function(){

	var w = $(this).width();
	var h = $(this).height();

	if(w > h){
		$(this).addClass('landscape');	
	}

	else if (h > w){
		$(this).addClass('portrait');
	}
	
	var nw = $(this).width();
	var nh = $(this).height();

	if (w > h){
		$(this).css('left', '-' + ((nw-wimg)/2) + 'px')
	}
	
	if (h > w){
		$(this).css('bottom', ((nh-himg)/2) + 'px')
	
	console.log( (nw-wimg)/2, (nh-himg)/2);

	};
});
