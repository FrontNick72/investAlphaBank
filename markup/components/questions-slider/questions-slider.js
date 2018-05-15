import Swiper from 'swiper';
// import $ from 'jquery';

function closeQuestions(wrapperSlider) {
  [...wrapperSlider.querySelectorAll('.questions-slider__item')].forEach((element) => {
    element.classList.remove('questions-slider__item_active');
  });
}

const questionsSlider = new Swiper('.questions-slider', {
  init: false,
  slidesPerView : 'auto',
  longSwipes: false,
  slidesPerGroup : 1,
  centeredSlides: true,
  loop : true,
  loopFillGroupWithBlank : true,
  grabCursor: true,
  slidesOffsetBefore: 0,
  spaceBetween: 32,
  pagination: {
    el: '.questions-slider__bullets',
    type: 'bullets',
    bulletClass: 'questions-slider__bullet',
    bulletActiveClass: 'questions-slider__bullet_is_active',
    clickable: true
  },
});

if (document.querySelector('.questions-slider')) {
  questionsSlider.init();

  const wrapperSlider = document.querySelector('.questions-slider');

  questionsSlider.on('slideChangeTransitionEnd', () => {
    questionsSlider.update();
    closeQuestions(wrapperSlider);
    document.querySelector(`.swiper-slide-active`).classList.add('questions-slider__item_active');

  });

  [...wrapperSlider.querySelectorAll('.questions-slider__button')].forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const self = event.currentTarget;

      closeQuestions(wrapperSlider);

      const currentSlide = self.closest('.questions-slider__item').getAttribute('data-swiper-slide-index');
      console.log('slide', currentSlide);
      questionsSlider.slideTo(currentSlide);


      questionsSlider.update();
    });
  });
}

// $(document).ready(() => {
//   const slider = $('.owl-carousel');

//   slider.owlCarousel({
//     loop:true,
//     margin: 32,
//     autoWidth:true,
//     items: 3,
//     autoHeight:true,
//     nav: true,
//     center: false,
//     singleItem: true,
//     stagePadding: 2,
//   });

//   slider.on('changed.owl.carousel', (event) => {
//     console.log('change', $('.owl-item.active'));

//     // $('.questions-slider__item').removeClass('questions-slider__item_active');
//     // $($('.owl-item.active')[0]).find('.questions-slider__item').addClass('questions-slider__item_active');

//     // slider.trigger('refresh.owl.carousel');
//   });
//   $('.questions-slider__button').on('click', (event) => {

//     // slider.trigger('refresh.owl.carousel');
//   })
// });


// $(document).ready(() => {
//   const slider = $('.owl-carousel');

//   slider.owlCarousel({
//     loop:true,
//     margin: 32,
//     autoWidth:true,
//     items: 3,
//     autoHeight:true,
//     nav: true,
//     center: false,
//     singleItem: true,
//     stagePadding: 2,
//   });

//   slider.on('changed.owl.carousel', (event) => {
//     console.log('change', $('.owl-item.active'));

//     // $('.questions-slider__item').removeClass('questions-slider__item_active');
//     // $($('.owl-item.active')[0]).find('.questions-slider__item').addClass('questions-slider__item_active');

//     // slider.trigger('refresh.owl.carousel');
//   });
//   $('.questions-slider__button').on('click', (event) => {

//     // slider.trigger('refresh.owl.carousel');
//   })
// });
