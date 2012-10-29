$(document).ready(function() {
	
/* Sign-up Overlay *************************************************************/
	// shows overlay when "sign up" links are clicked
	$('a.beta').click(function(event){
		event.preventDefault();
		$("#signup").show();
	});
	// hides overlay on clicking corner  X
	$('.closebox').click(function() {
		$("#signup").hide();
	});
	// hides overlay on submit
	$('#mc-embedded-subscribe-form').submit(function(){
		$('#signup').hide();
	});
	// hides overlay on esc
    $(document).keyup(function(e) {
        // user hits esc when the dialog is open
        if (e.keyCode == 27 && $('#signup:visible')) {
            $('#signup').hide();
        }
	});
		
/******************************************************************************/		

/* Switch out content ********************************************************/
	// Intercept privacy and terms links
	$('a.privacy, a.terms').click(function(event) {
		event.preventDefault();
		// Prevents flicker on slower machines
		$('#content').hide();
		if($('#content-jobs').is(':visible')) {
			$('#content-jobs').hide();
		}
		link = this.href.match(/\/(\w*\.html)/)[1];
		$.get(link, function(data) {
			$('#content').empty();
			$('#content').html($(data).filter('#content').html());
			$('#content-home').fadeOut(200);
			$('.back').fadeIn(500);
			$('#content').fadeIn(500); 
			scroll_to(0);
		});

	});
	
	// Intercept back to home link
	$('a.back').click(function(event) {
		event.preventDefault();
		// Workaround for code execution prevention in loaded pages
		if($('#content-jobs').is(':visible')) {
			$('#content-jobs').hide();
			$('#content-home').fadeIn(500);
			$('.back').hide();
		} else {
			$('#content').hide();
			$('.back').hide(); 
			$('#content-home').fadeIn(500);
			scroll_to(0)
		}
	});
	// Intercept jobs links
	$('a.job').click(function(event) {
		$('#content-home').hide();
		event.preventDefault();
		$('#content').hide();
		$('#content-jobs').fadeIn(500);
		scroll_to($(this.hash).offset().top)
		$('.back').fadeIn(500); 
	});
/****************************************************************************/


/* Scroll to position ******************************************************/
function scroll_to(position) {
	$('body').animate({scrollTop: position}, 500);
}
/****************************************************************************/

});    


