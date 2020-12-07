
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

$(document).ready(function(){
  $('.head-content').addClass('show');
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > $('.about-us').offset().top-500) {
    $('.about-us .tittle').addClass('show');
    
    setTimeout(function(){
      $('.about-us p').addClass('show');
    },200)
    
    setTimeout(function(){
      $('.about-plus img').each(function(i){
        setTimeout(function(){
          $('.about-plus img').eq(i).addClass('show');
        }, 300 * (i+1))
      },5000);
    })
  }
  
  if (wScroll > $('.product').offset().top-500) {

    setTimeout(function(){
      $('.product .tittle').addClass('show');
    },150)
    
    
    $('.galery img').each(function(i){
      setTimeout(function(){
        $('.galery img').eq(i).addClass('show');
      }, 200 * (i+1))
    });

    setTimeout(function(){
      $('.product a').addClass('show');
    },2000)
  }

  if (wScroll > $('.testimoni').offset().top-500) {

    setTimeout(function(){
      $('.testimoni .tittle').addClass('show');
    },150)

    $('.testi-container .testi-card').each(function(i){
      setTimeout(function(){
        $('.testi-container .testi-card').eq(i).addClass('show');
      }, 200 * (i+1))
    });
  }

  if (wScroll > $('.client').offset().top-500) {

    setTimeout(function(){
      $('.client .tittle').addClass('show');
    },150)

    $('.testi-container .testi-card').each(function(i){
      setTimeout(function(){
        $('.testi-container .testi-card').eq(i).addClass('show');
      }, 200 * (i+1))
    });

    setTimeout(function(){
      $('.client img').addClass('show');
    },600)
  }

  if (wScroll > $('.howto').offset().top-500) {

    setTimeout(function(){
      $('.howto .tittle').addClass('show');
    },150)

    $('.order-container .order-card').each(function(i){
      setTimeout(function(){
        $('.order-container .order-card').eq(i).addClass('show');
      }, 200 * (i+1))
    });

    setTimeout(function(){
      $('.howto h5').addClass('show');
    },1600)

    setTimeout(function(){
      $('.howto a').addClass('show');
    },1600)
  }

  if (wScroll > $('.footer').offset().top-800) {

    setTimeout(function(){
      $('.footer .action-one').addClass('show');
    },300)

    setTimeout(function(){
      $('.footer .action-two').addClass('show');
    },300)

  }


});
