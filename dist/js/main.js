//responsive menu
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', e => {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(() => {
    var width = $(this).width();
    if (width > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', e => {
    var width = $(window).width();
    if (width < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// Scroll to Top
if ($('#back-to-top').length) {
  var scrollTrigger = 100, // px
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
  backToTop();
  $(window).on('scroll', function() {
    backToTop();
  });
  $('#back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: 0
      },
      700
    );
  });
}
