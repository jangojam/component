jQuery(document).ready(function($){

	// var slideCount = $('.slider ul li').length;
	// 获取播放图片宽度
	var slideWidth = $('.slider ul li').width();
	// var slideHeight = $('.slider ul li').height();
    
	$('.slider ul').css({
		marginLeft:-slideWidth
	});
	// 将最后一个图片放在最前面
	$('.slider ul li:last').prependTo('.slider ul');
	// 自动播放
	setInterval(function(){moveRight();},3000);
	// 向右移动
	function moveRight () {
		$('.slider ul').animate({
			left: -slideWidth},
			200, function() {
			$('.slider ul li:first').appendTo('.slider ul');
			$('.slider ul').css({
				left: '',
			});
		});
	}
	// 向左移动
	function moveLeft () {
		$('.slider ul').animate({
			left: +slideWidth},
			200, function() {
			$('.slider ul li:last').prependTo('.slider ul');
			$('.slider ul').css({
				left: '',
			});
		}); 
	}
	$('.left').click(function(event) {
		if (! $('.slider ul').is(':animated')) {
			moveLeft ();
		}
		
	});
	$('.right').click(function(event) {
		if (! $('.slider ul').is(':animated')) {
		moveRight ();
		}
	});
})