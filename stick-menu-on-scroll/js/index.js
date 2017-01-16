jQuery(document).ready(function($) {
 	$('.menu').addClass('origin')
 	.clone().addClass('clone').insertAfter('.menu').css({'position':'fixed','top':'0px'}).hide();
 	function stickScroll () {
 		var menuWidth=$('.menu').width();
 		if ($(window).scrollTop() >= $('.menu').offset().top) {
 			console.log($('.menu').offset().top);
 			$('.clone').css('width',menuWidth).show();
 			$('.origin').css('visibility','none');
 		} else {
 			$('.clone').hide();
 			$('.origin').css('visibility','visible');
 		}
  	}
 	setInterval(stickScroll, 10);
 });