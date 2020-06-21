// Animate Smooth Scroll
$('').on('click', function() {
	const images = $('#about').position().top;

	$('html, body').animate(
		{
			scrollTop: images
		},
		900
	);
});
$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	if (scroll >= 200) {
		$('body').addClass('blue');
	} else {
		$('body').removeClass('blue');
	}
});
