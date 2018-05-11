import Swiper from 'swiper';

const questionsSlider = new Swiper('.questions-slider', {
  init: false,
  speed: 600,
  // navigation: {
  //   nextEl: '.questions-slider__control_next',
  //   prevEl: '.questions-slider__control_prev'
  // },
  pagination: {
    el: '.questions-slider__bullets',
    type: 'bullets',
    bulletClass: 'questions-slider__bullet',
    bulletActiveClass: 'questions-slider__bullet_is_active',
    clickable: true
  },
  loop: true,
  loopedSlides: 10,
  autoHeight: true,
  spaceBetween: 32,
  slidesPerView: 'auto',
  centeredSlides: false,
  slidesOffsetBefore: 300,
  freeModeMomentum: false
});

if (document.querySelector('.questions-slider')) {
  questionsSlider.init();
}
