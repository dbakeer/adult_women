$('html').hide();

if (Modernizr.touchevents === false) {
  $('#menu').hide();
}

$(window).load(function() {
  $('html').fadeIn(2000);
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:[
      'adult-women',
      'about',
      'stories',
      'photos',
      'merchandise',
      'contact'
    ],
    menu: '#menu',
    // continuousHorizontal: 'true',
    allowPageScroll: true,
    scrollOverflow: true,
    paddingTop: 24,
    fixedElements: '#menu',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    navigationPosition: 'left',
    afterRender: function() {
      $('#menu').hide();
    },
    afterLoad: function(anchor, index){
      if(index == 1) {
        $('#menu').fadeOut();
      } else {
        $('#menu').fadeIn();
      }
    }
  });
});

$('a').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});
