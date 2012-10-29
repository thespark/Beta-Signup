$(document).ready(function() {
<<<<<<< HEAD
=======
	// get our path
    var path = window.location.pathname;
    function toggle_jobs_display(callback) {
        var def1 = $('#content-jobs').fadeToggle('hidden');            
        var def2 = $('#content-home').fadeToggle('hidden');
        var def3 = $('#header a.back').toggleClass('hidden');
>>>>>>> 5542813d01a113eccd04e32435520c2496877dd6

/* Selector caching ************************************************************/
var content = $('#content');
var home = $('#content-home');
var jobs = $('#content-jobs');
var signup = $('#signup');
var back = $('.back');
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
        if (e.keyCode == 27 && $('#signup:visible')) {
            signup.hide();
        }
<<<<<<< HEAD
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
		link = this.href.match(/\/(\w*\.html)/)[1];
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
	$('a.back').click(function(event) {
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
			scroll_to(0)
		}
	});
	// Intercept jobs links
	$('a.job').click(function(event) {
		home.hide();
		event.preventDefault();
		content.hide();
		jobs.fadeIn(500);
		scroll_to($(this.hash).offset().top)
		back.fadeIn(500); 
	});
/****************************************************************************/
=======
    });
	// hides overlay on submit
	
	$('#mc-embedded-subscribe-form').submit(function(){
		$(this).closest('.overlay').addClass('hidden');
	});
	
    /* Issue comments and solutions handler */
/*
    $('.issue .view.solutions').click(function() {
        $(this).closest('.issue-issue').children('.issue-comments, .issue-comments-top').addClass('hidden');
        $(this).closest('.issue-issue').children('.issue-solutions, .issue-solutions-top').toggleClass('hidden');
        $(this).closest('.issue-details').children('.view.comments').removeClass('selected');
        $(this).toggleClass('selected');
    });
    $('.issue .view.comments').click(function() {
        $(this).closest('.issue-issue').children('.issue-solutions, .issue-solutions-top').addClass('hidden');
        $(this).closest('.issue-issue').children('.issue-comments, .issue-comments-top').toggleClass('hidden');
        $(this).closest('.issue-details').children('.view.solutions').removeClass('selected');
        $(this).toggleClass('selected');
    });
*/
    
    /* Tooltip closebutton */
/*
    $('.vote-tooltip-close').click(function () {
        $(this).closest('.vote-tooltip-container').addClass('hidden');
    });
*/
>>>>>>> 5542813d01a113eccd04e32435520c2496877dd6


});    

<<<<<<< HEAD

=======
        if ($('#content-jobs').text().length > 0) {
            // jobs content loaded
            toggle_jobs_display(function() {
                // location.hash = hash;
                scrollto_job(hash);
                console.log('a.job .click if loaded ' + hash);
            });            
        } else {
            // have to load jobs
            load_and_scrollto_job(hash);          
        }
    });
    
    // Deal with direct link clicks
    $('a.back').click(function() {
		if ($('#content-home').is(":visible")) {
        location.hash = '';
        toggle_jobs_display();        
        return false; }
        
    });
    
    $('#spark-logo a').click(function() {
		if ($('#content-jobs').is(":visible")) {
        location.hash = '';
        toggle_jobs_display();        
        return false; }
    });
	
    // Handle for URLs
    if (location.hash.length > 0) {
        hash = location.hash;
        location.hash = '';
        
        switch(hash) {
            case '#Partnerships-and-Fundraising-Lead':
                load_and_scrollto_job(hash);
                break;
            case '#Offline-Communications-Lead':
                load_and_scrollto_job(hash);
                break;
            case '#Crowd-sourcing-Expert':
                load_and_scrollto_job(hash);
                break;
            case '#Front-end-Developer':
                load_and_scrollto_job(hash);
                break;
            case '#Application-Developer':
                load_and_scrollto_job(hash);
                break;
        }
    }

	// Privacy  and terms transitions
   
	   if (path.match(/(.*privacy\.html|.*terms\.html)/)) {
		   
		   $("body").css("display", "none");
		   $("body").fadeIn(800);
		
	   }

});
>>>>>>> 5542813d01a113eccd04e32435520c2496877dd6
