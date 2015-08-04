var sliderCurrent = 0;
var sliderNext = 1;
var sliderCount = $('#slider').children('img').size() - 1;

$(document).ready(function() {
	$('#slider').children().first().fadeIn();
});

function prev(){
	var newSlide = sliderCurrent - 1;
	showSlide(newSlide)
}

function next(){
	var newSlide = sliderCurrent + 1;
	showSlide(newSlide);
}

function showSlide(id){
	if(id > sliderCount) id = 0;
	else if(id < 0) id = sliderCount;
	
	$('#slider').children('img').fadeOut();
	setTimeout(function(){
		$('#slider').find('#' + id).fadeIn();
	}, 500);
	
	sliderCurrent = id;
	sliderNext = id + 1;
}