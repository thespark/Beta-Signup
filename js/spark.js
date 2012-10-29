
$(document).ready(function() {

/* Selector caching ************************************************************/
var content = $('#content')
 , home = $('#content-home')
 , jobs = $('#content-jobs')
 , signup = $('#signup')
 , back = $('.back');
/*******************************************************************************/

/* Scroll to position ******************************************************/
function scroll_to(position) {
	$('body').animate({scrollTop: position}, 500);
}
/****************************************************************************/
 
/* Sign-up Overlay *************************************************************/
	// shows overlay when "sign up" links are clicked
	$('a.beta').click(function(event){
		event.preventDefault();
		signup.show();
	});
	// hides overlay on clicking corner  X
	$('.closebox').click(function() {
		signup.hide();
	});
	// hides overlay on submit
	$('#mc-embedded-subscribe-form').submit(function(){
		signup.hide();
	});
	// hides overlay on esc
    $(document).keyup(function(e) {
        // user hits esc when the dialog is open
        if (e.keyCode === 27 && $('#signup:visible')) {
            signup.hide();
        }
	});
		
/******************************************************************************/		

/* Switch out content ********************************************************/
	// Intercept privacy and terms links
	$('a.privacy, a.terms').click(function(event) {
		event.preventDefault();
		// Mitigates flicker on slower machines
		content.hide();
		if(jobs.is(':visible')) {
			jobs.hide();
		}
		var link = this.href.match(/\/(\w*\.html)/)[1];
		$.get(link, function(data) {
			content.empty();
			content.html($(data).filter('#content').html());
			home.fadeOut(200);
			back.fadeIn(500);
			content.fadeIn(500); 
			scroll_to(0);
		});

	});
	
	// Intercept back to home link
	$('a.back, a.logo').click(function(event) {
		event.preventDefault();
		// Workaround for code execution prevention in loaded pages
		if(jobs.is(':visible')) {
			jobs.hide();
			home.fadeIn(500);
			back.hide();
		} else {
			content.hide();
			back.hide(); 
			home.fadeIn(500);
			scroll_to(0);
		}
	});
	// Intercept jobs links
	$('a.job').click(function(event) {
		home.hide();
		event.preventDefault();
		content.hide();
		jobs.fadeIn(500);
		scroll_to($(this.hash).offset().top - 100);
		back.fadeIn(500); 
	});
/****************************************************************************/


});    

