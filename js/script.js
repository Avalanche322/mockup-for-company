$(document).ready(function(){
	$('.spoiler__title').click(function(event){
		$(this).toggleClass('block').next().slideToggle("slow")
	});
	$('#burger').click(function (event) {
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
		$(this).toggleClass('fa-times')
	});
	$(function(){
		$('#sing__up-btn').click(function (event) {
			$('#modal-form').removeClass('hidden');
			$('body').addClass('overflow-hidden');
		});
		$('#modal-form__close').click(function (event) {
			$('#modal-form').addClass('hidden');
			$('body').removeClass('overflow-hidden');
		});
	});
	$('.reviews__slider').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 2,
		autoplay: true,
		accessibility: false,
		prevArrow: '<img src="img/reviews/arrow_up_white.png">',
		nextArrow: '<img src="img/reviews/arrow_down_white.png">',
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			}
		]
  });

	$('.our-team__slider-content').slick({
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		accessibility: false,
		asNavFor: '.our-team__slider-img',
		zIndex: 10,
	});
	$('.our-team__slider-img').slick({
		centerMode: true,
		slidesToShow:3,
		slidesToScroll: 1,
		asNavFor: '.our-team__slider-content',
		accessibility: false,
		arrows: false,
		focusOnSelect: true,
		zIndex: 10,
		centerPadding: '40px',
		//variableWidth: true
		responsive: [
			{
				breakpoint: 732,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
})
window.addEventListener('scroll', function(){
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});
