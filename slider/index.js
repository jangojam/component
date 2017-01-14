jQuery(document).ready(function($){

	// var slideCount = $('.slider ul li').length;
	// ��ȡ����ͼƬ���
	var slideWidth = $('.slider ul li').width();
	// var slideHeight = $('.slider ul li').height();
    
	$('.slider ul').css({
		marginLeft:-slideWidth
	});
	// �����һ��ͼƬ������ǰ��
	$('.slider ul li:last').prependTo('.slider ul');
	// �Զ�����
	setInterval(function(){moveRight();},3000);
	// �����ƶ�
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
	// �����ƶ�
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