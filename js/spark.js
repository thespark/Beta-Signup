$(document).ready(function() {
    
    function toggle_jobs_display(callback) {
        var def1 = $('#content-jobs').fadeToggle('hidden');            
        var def2 = $('#content-home').fadeToggle('hidden');
        var def3 = $('#header a.back').toggleClass('hidden');

        // fire off the callback
        if (typeof callback === 'function') {
            $.when(def1, def2, def3).then(callback);
        }
    }
    
    function scrollto_job(hash) {
        var scrollTo = $(hash),
            container = scrollTo.parent();
        
        $('body').animate(
            {scrollTop: scrollTo.offset().top},
            500,
            'swing',
            function() {
                location.hash = hash;
            }
        );
    }
    
    function load_and_scrollto_job(hash) {
        $('#content-jobs').load('jobs.html', function() {
            toggle_jobs_display(function() {
                scrollto_job(hash);
            });
        });
    }
    

    /* Signup/Login Overlay */
	$('.overlay').click(function() {
		$(this).addClass('hidden');
	}).children().click(function(event) {
		/* stop clicks in the box from bubbling up to .overlay */
        event.stopImmediatePropagation();

/* 		return false; */
	});

    $('.overlay .signup .closebox').click(function() {
        $(this).closest('.overlay').addClass('hidden');
    });
    $('a.beta.signup').click(function() {
        $('#signup').removeClass('hidden');
    });
    $(document).keyup(function(e) {
        // user hits esc when the dialog is open
        if (e.keyCode == 27 && ! $('#signup').hasClass('hidden')) {
            $('#signup').addClass('hidden');
        }
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

    
    // Job stuff
    $('a.job').click(function(event){
        var hash = this.hash;

        // stop normal behavior until we load or switch content
        event.stopImmediatePropagation();
        event.preventDefault();

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

});