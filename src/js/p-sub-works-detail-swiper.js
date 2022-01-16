//PC
//メイン
var sliderPc = new Swiper ('.js-gallery-slider-pc', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  speed:1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopedSlides: 8, //スライドの枚数と同じ値を指定
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  }
);

//サムネイル
var thumbsPc = new Swiper ('.js-gallery-thumbs-pc', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

//4系～
//メインとサムネイルを紐づける
sliderPc.controller.control = thumbsPc;
thumbsPc.controller.control = sliderPc;


//スマホ
//メイン
var sliderSp = new Swiper ('.js-gallery-slider-sp', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  speed:1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopedSlides: 3, //スライドの枚数と同じ値を指定
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  }
);

//サムネイル
var thumbsSp = new Swiper ('.js-gallery-thumbs-sp', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

//4系～
//メインとサムネイルを紐づける
sliderSp.controller.control = thumbsSp;
thumbsSp.controller.control = sliderSp;