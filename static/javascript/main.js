$('html').hide();
$('#menu').hide();

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
    continuousHorizontal: 'true',
    responsiveWidth: 660,
    scrollOverflow: true,
    allowPageScroll: true,
    paddingTop: 24,
    fixedElements: '#menu',
    slideSelector: '.horizontal-scrolling',
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
