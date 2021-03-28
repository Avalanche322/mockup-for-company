$(document).ready(function(){
	$('.spoiler__title').click(function(event){
		$(this).toggleClass('block').next().slideToggle("slow")
	});
	$('.reviews__slider').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 2,
		autoplay: true,
		customPaging: '1200px',
		accessibility: false,
		prevArrow: '<img src="/img/reviews/arrow_up_white.png">',
		nextArrow: '<img src="/img/reviews/arrow_down_white.png">'
  });
})
$(document).ready(function () {
	$('#burger').click(function (event) {
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
	});
});