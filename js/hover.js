$(function(){
var duration = 500;

	$('.pinkBtn')
		.on('mouseenter', function(){
			$(this).stop(true).animate({borderColor: '#f3c'}, duration, 'easeOutQuad');
			})
		.on('mouseleave', function(){
			$(this).stop(true).animate({borderColor: '#fff'}, duration, 'easeOutQuad');
			});

	$('.greenBtn')
		.on('mouseenter', function(){
			$(this).stop(true).animate({backgroundColor: '#7cdcd7'}, duration, 'easeOutQuad');
			})
		.on('mouseleave', function(){
			$(this).stop(true).animate({backgroundColor: '#fff'}, duration, 'easeOutQuad');
			});

	$('.orangeBtn')
		.on('mouseenter', function(){
			$(this).stop(true).animate({borderColor: '#FF8C00'}, duration, 'easeOutQuad');
			})
		.on('mouseleave', function(){
			$(this).stop(true).animate({borderColor: '#FFF'}, duration, 'easeOutQuad');
			});	

	$('.blueBtn')
		.on('mouseenter', function(){
			$(this).stop(true).animate({borderColor: '#87CEFA', opacity: 0.8, backgroundColor: '#F0FFFF'}, duration, 'easeOutQuad');
			})
		.on('mouseleave', function(){
			$(this).stop(true).animate({borderColor: '#FFF', opacity: 1, backgroundColor: '#fff'}, duration, 'easeOutQuad');
			});			
			
});
