jQuery(function($){
    $('.menu').on('click',function(){
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
    });
});


// ページトップ
jQuery(function() {
	var showFlag = false;
	var topBtn = jQuery('#page-top');
	topBtn.css('bottom', '-100px');
	var showFlag = false;

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				topBtn.stop().animate({'bottom' : '10px'}, 1000);
			}
		} else {
			if (showFlag) {
				showFlag = false;
				topBtn.stop().animate({'bottom' : '-100px'}, 1000);
			}
		}
	});

    topBtn.click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1500);
		return false;
    });
});
