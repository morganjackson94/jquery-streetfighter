$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate (
		{'left': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.hadouken').hide();
	});
});

$(document).keydown(function(x){
	playWorst();
	if (x.keyCode == 88) {
		console.log('test')
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();
	}
}).keyup(function(x){
	if (x.keyCode == 88) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playWorst () {
	$('#worst')[0].volume = 0.5;
	$('#worst')[0].load();
	$('#worst')[0].play();
}