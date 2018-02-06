$(document).ready(function() {
	var selected = 0;
	var val1 = 0;
	var val2 = 0;
	var val3 = 0;
	var val4 = 0;
	$(".inner").click(function(){
		console.log('Selected center circle.');
		selected = 1;
	});
	$(".second").click(function(){
		console.log('Selected second circle.');
		selected = 2;
	});
	$(".third").click(function(){
		console.log('Selected third circle.');
		selected = 3;
	});
	$(".outer").click(function(){
		console.log('Selected outer circle.');
		selected = 4;
	});

	$(".left").click(function(){
		if (selected == 1) {
			val1 +=72;
			$(".inner").rotate({ animateTo:val1})
		}
		if (selected == 2) {
			val2 +=72;
			$(".second").rotate({ animateTo:val2})
		}
		if (selected == 3) {
			val3 +=72;
			$(".third").rotate({ animateTo:val3})
		}
		if (selected == 4) {
			val4 +=72;
			$(".outer").rotate({ animateTo:val4})
		}			
	});
	$(".right").click(function(){
		if (selected == 1) {
			val1 -=72;
			$(".inner").rotate({ animateTo:val1})
		}
		if (selected == 2) {
			val2 -=72;
			$(".second").rotate({ animateTo:val2})
		}
		if (selected == 3) {
			val3 -=72;
			$(".third").rotate({ animateTo:val3})
		}
		if (selected == 4) {
			val4 -=72;
			$(".outer").rotate({ animateTo:val4})
		}			
	});	
});