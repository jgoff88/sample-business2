// Animate Smooth Scroll
$('#about').on('click', function() {
	const images = $('#about').position().top;

	$('html, body').animate(
		{
			scrollTop: images
		},
		900
	);
});
