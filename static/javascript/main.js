// var themeArray = [
//   'nil',
//   'transparent',
//   'light',
//   'dark',
//   'dark',
//   'light',
//   'dark'
// ];

$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors:[ 'adult-women', 'about', 'stories', 'photos', 'merchandise', 'contact'],
      menu: '#menu',
      continuousHorizontal: 'true',
      responsiveWidth: 660,
      scrollOverflow: true,
      allowPageScroll: true,
      paddingTop: 24,
      fixedElements: '#menu',
      slideSelector: '.horizontal-scrolling'
      // onLeave: function(index, nextIndex, direction) {
      //   var theme = themeArray[nextIndex];
      //   $header.attr('data-theme', theme);
      //   $header.addClass('active');
      //   $('.event-date').addClass('active');
      //   $('#fp-nav').addClass('mobile-active');
      // }
    });
  });
