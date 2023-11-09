$(function() {

$("#sandwich").on("click", function() { 
  $(".navbar").toggleClass("navbar-white");
  $("body").toggleClass("menubar");
});

  function navbar() {
    if ($(this).scrollTop() >= 200) {
      $('.nav-white').addClass("sticky");
    } else {
      $('.nav-white').removeClass("sticky");
    };
  };
  navbar();
  $(window).on("scroll", navbar);

  $('.owl-1').owlCarousel({
  	responsive: {
  		0: {
  			items: 1,
  		},
  		400: {
  			items: 1,
  		},
  		600: {
  			items: 1,
  		},
  	},
	  smartSpeed: 400,
	  nav: true,
	  dots: false,
	  navText: ['','']
  });

});

