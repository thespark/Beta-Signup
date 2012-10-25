(function($){ 
	$.fn.extend({ 
		hashbang: function(){
		
			$("a").live("click", function(event){
			    var href = $(this).attr("href");
			    if(href[0] == "/" 
					&& href.substring(href.length - 4) != '.png'
					&& href.substring(href.length - 4) != '.jpg'
					&& href.substring(href.length - 5) != '.jpeg'
					&& href.substring(href.length - 4) != '.gif' ){
			        event.preventDefault();
			        window.location.hash = "#!" + href;
			    }
			});


			$(window).bind('hashchange', function(){
				$('.hashbangContentDiv').hashbangLoad( location.hash );
			});
			$(this).addClass('hashbangContentDiv').hashbangLoad( location.hash, false );
			
			return $();
		},
	
		hashbangLoad: function(hash, fn){
			if(!hash || hash == ''){
				if(typeof _gaq !== 'undefined')
					_gaq.push(['_trackPageview']);
				return; // nothing to do
			}

			var url = (hash[0] == '#') ? hash.substring(2): hash; console.info(url, $(this));

			$(this).html('Loading Content...'); // replace with loading screen code

			var callback = function(responseText, textStatus, XMLHttpRequest){
				$(document).attr('title',  $(responseText).filter('title').text());

				if(fn) fn();

				// track the page view
				if(typeof _gaq !== 'undefined')
					_gaq.push(['_trackPageview', url]);
			}

			$(this).load(url + ' #' + $(this).attr('id'), callback);
		}
	
	});
})(jQuery);