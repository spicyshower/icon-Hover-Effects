$(function(){
var duration = 500;

	$('.pinkBtn')
		.on('mouseenter', function(){
			$(this).stop(true).animate({borderColor: '#f3c'}, duration, 'easeOutQuad');
			})
		.on('mouseleave', function(){
			$(this).stop(true).animate({borderColor: '#fff'}, duration, 'easeOutQuad');
			});

	$('.orangeBtn')
		.on('mouseenter', function(){
			$(this).stop(true).animate({borderColor: '#FF8C00', backgroundColor: '#ffe7a5' }, duration, 'easeOutQuad');
			})
		.on('mouseleave', function(){
			$(this).stop(true).animate({borderColor: '#FFF', backgroundColor: '#fff' }, duration, 'easeOutQuad');
			});	

	$('.blueBtn')
		.on('mouseenter', function(){
			$(this).stop(true).animate({borderColor: '#87CEFA', opacity: 0.8, backgroundColor: '#F0FFFF'}, duration, 'easeOutQuad');
			})
		.on('mouseleave', function(){
			$(this).stop(true).animate({borderColor: '#FFF', opacity: 1, backgroundColor: '#fff'}, duration, 'easeOutQuad');
			});			
			
});
