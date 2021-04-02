$(document).ready(function(){
	$('.spoiler__title').click(function(event){
		$(this).toggleClass('block').next().slideToggle("slow")
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
	$('#burger').click(function (event) {
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
	});
	$('.our-team__slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {	
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '40px',
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
