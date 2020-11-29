(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        new ScrollHint('.js-scrollable');
    });

}());

(function($){
$(function(){

// slick
$('.echo-mt-be-slider .js-slider')
  .slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: false
  });

}); // end document.ready
})(jQuery); // end jquery
