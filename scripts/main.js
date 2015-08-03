$(document).ready(function() {
	$('.job a').mouseenter(function() {
		$(this).fadeTo('fast', .5);
	});
	
	$('.job a').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
});