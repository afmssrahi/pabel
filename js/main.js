
// (function ($) {
// 	"üse strict";

// 	$(document).ready(function(){
// 		$(".owl-carousel").owlCarousel({
// 			items: 2,
// 			autoplay: flase
// 		});
// 	  });

// }(jQuery));

$('.single-staff-items').owlCarousel({
    loop:true,
	margin:20,
	autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})