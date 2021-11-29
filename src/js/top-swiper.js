jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる



});


// Swiper
let topMvSlider = new Swiper ('.js-top-mv-slider', {
  //自動スライド
      autoplay: {
        delay: 500,
      },
   //切り替えエフェクトの指定
    //slide  fade  cube coverflow  flip
    effect: "fade",
    //切り替わる速さ
    speed: 6000,
    //ループの有無
    loop: true,

});

let TopWorksSlider = new Swiper ('.slider2', {
 //自動スライド
 autoplay: {
  delay: 500,
},
//切り替えエフェクトの指定
//slide  fade  cube coverflow  flip
effect: "fade",
//切り替わる速さ
speed: 4000,
//ループの有無
loop: true,
// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable : true,
},

});