/*===================Preloader=========================*/
function loadData() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 2300);
	})
}
loadData().then(() => {
	let preloaderEl = document.getElementById('preloader');
	preloaderEl.classList.add('preloader__hidden');
	preloaderEl.classList.remove('preloader__visible');
	$('body').removeClass('loading');
});

/*=======================Spoiler for services=============================*/
$(document).ready(function(){
	$('.spoiler__title').click(function(event){
		$(this).toggleClass('block').next().slideToggle("slow")
	});
})
	/*=======================Menu for mobile=============================*/
$(document).ready(function () {
	$('#burger').click(function (event) {
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
		$(this).toggleClass('fa-times')
	});
})
	/*=======================Modal Sing up=============================*/
$(document).ready(function () {
	$(function(){
		$('#sing__up-btn').click(function (event) {
			$('#modal-form').removeClass('modal-form__hidden').addClass('modal-form__visible');
			$('body').addClass('overflow-hidden');
		});
		$('#modal-form__close').click(function (event) {
			$('#modal-form').removeClass('modal-form__visible').addClass('modal-form__hidden');
			$('body').removeClass('overflow-hidden');
		});
	});
})
	/*=======================Slider for reviews=============================*/
$(document).ready(function () {
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
})
	/*=======================Double slider for our team=============================*/
$(document).ready(function () {
	$('.our-team__slider-content').slick({
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		accessibility: false,
		asNavFor: '.our-team__slider-img',
		zIndex: 10,
		autoplay: true,
		autoplaySpeed: 2000,
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
		autoplay: true,
		autoplaySpeed: 2000,
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
/*=======================Sticky header=============================*/
window.addEventListener('scroll', function(){
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});
/*=======================Animation=============================*/
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 1500);
}
