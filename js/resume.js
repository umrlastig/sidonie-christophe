(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // portfolio
  if($('.isotopeWrapper').length){

    var $container = $('.isotopeWrapper');
    var $resize = $('.isotopeWrapper').attr('id');
    // initialize isotope

    $container.isotope({
      itemSelector: '.isotopeItem',
      resizable: false, // disable normal resizing
      masonry: {
        columnWidth: $container.width() / $resize
      }
    });

    $('#filter a').click(function(){
      $('#filter a').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
			var test = selector.substring(1);
			$('article').each(function(){
				if($(this).hasClass(test)){
					$(this).removeClass('hidden');
				}
			});
    $container.isotope({
      filter: selector,
      animationOptions: {
      duration: 1000,
      easing: 'easeOutQuart',
      queue: false
      }
    });

    return false;
  });

  $(window).smartresize(function(){
    $container.isotope({
      // update columnWidth to a percentage of container width
      masonry: {
        columnWidth: $container.width() / $resize
      }
    });
  });
	}

})(jQuery); // End of use strict
