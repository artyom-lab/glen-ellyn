$(function() {

    $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

$("#sandwich").on("click", function() { 
  $(".navbar").toggleClass("navbar-white");
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

