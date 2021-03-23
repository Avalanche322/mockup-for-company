$(document).ready(function(){
	$('.spoiler__title').click(function(event){
		$(this).toggleClass('block').next().slideToggle("slow")
	})
})
$(document).ready(function () {
	$('#burger').click(function (event) {
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
	});
});