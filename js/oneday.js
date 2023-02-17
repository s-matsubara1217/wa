/*-------------------------------
  福利厚生 swiper
-------------------------------*/
const welfare_swiper = new Swiper('.welfare__swiper', {
  // loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,

  pagination: {
    el: '.welfare__swiper-pagination',
    clickable: true,
  },
  watchOverflow: true,
});

$('.welfare__swiper').each(function () {

  let slide = $(this).find('.welfare__swiper-slide')

  if (slide.length == 1) {
    $(this).addClass('oneSlide')
  }

});
