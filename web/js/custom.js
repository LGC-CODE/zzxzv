(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  // MENU
  $('.menu-burger').on('click', function () {
    $('#player').hasClass('hide-player') ? $('#player').removeClass('hide-player') : $('#player').addClass('hide-player');
    $('.menu-burger').text() == "HIDE" ? $('.menu-burger').text('SHOW') : $('.menu-burger').text('HIDE');
  });


  // ABOUT SLIDER
  $('body').vegas({
    timer: false,
    slides: [
      { src: 'images/slide-image01.jpg' },
      { src: 'images/slide-image02.jpg' }
    ],
    transition: ['zoomOut',]
  });
})(jQuery);
