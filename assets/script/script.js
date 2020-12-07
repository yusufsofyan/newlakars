
function toggleSlide() {
    $('.menu').toggleClass('slide');
}

$('.menu-toggle input').on('click', function() {
  toggleSlide();
});

$('.nav-link').on('click', function(e){
  
  var href = $(this).attr('href');
  var tujuan = $(href);

  if($(window).width() < 992){
    var margin = 70
  } else {
    var margin = 92
  }
  
  $('body,html').animate({
    scrollTop: tujuan.offset().top - margin
  }, 1250, 'easeInOutExpo');
  
  toggleSlide();
  if ($('.menu-toggle input').prop('checked') == true) {
    $('.menu-toggle input').prop('checked',false);  
  }

  e.preventDefault();

});
