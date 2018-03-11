jQuery(document).ready(function($) {

	// $("#white, #black").click(function() {
	// 	$("#white").toggleClass('hide');
	// 	$("#black").toggleClass('show');
	// 	$(".reBackground").toggleClass('show');
	// 	$("#sign1, #sign2").toggleClass('strokeBlack');
	// });



	// 處理全螢幕

	$('.full').click(function() {
		if (screenfull.enabled) {
		    screenfull.request();
		}
		$(".full").toggleClass('hide');
		$(".notFull").toggleClass('show');
		$(".full").css('zIndex', '1');		
	});


	$('.notFull').click(function() {
		if (screenfull.enabled) {
		    screenfull.exit();
		}
	$(".full").toggleClass('hide');
	$(".notFull").toggleClass('show');
	$(".full").css('zIndex', '5');
	});
	
	// ==============分隔線==============

	// $(document).mousemove(function(e){
 //  		$(".mouse").text("X: " + e.pageX + ", Y: " + e.pageY);
	// });


	// 處理螢幕大小
	w = $(window).width();
	h = $(window).height();
	$(".windowSize").html(w+" : "+h);

	$(window).resize(function() {
		w = $(window).width();
		h = $(window).height();
		$(".windowSize").html(w+" : "+h);		
	});

	// 處理滑鼠移動
	$(document).mousemove(function(e){
		X = e.pageX;
		Y = e.pageY;
  		$(".mouse").text("X: " + X + ", Y: " + Y);
  		Xrange = (X/w)*2;
  		Yrange = (Y/h);
  		XforBlack = 1.3 - Xrange;
  		XforWhite = Xrange - 0.7;
		$(".range").html(Xrange+" : "+Yrange);		
		$("#white").css('opacity', XforWhite);
  		$("#black").css('opacity', XforBlack);
  		$(".reBackground").css('opacity', Yrange);

		// 中間畫界線
  		if (Yrange >= 0.5) {
  			$("#sign1, #sign2").css('stroke', "black");
  		} else {
  			$("#sign1, #sign2").css('stroke', "white");
  		}
  		// 座標上下偵測
  		

	});	

});

