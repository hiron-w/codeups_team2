jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

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
  
    // If we need pagination
    pagination: {
     el: '.swiper-pagination',
      clickable : true,
     },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     },
    // And if we need scrollbar
    // scrollbar: {
    // el: '.swiper-scrollbar',
    // },
  
  //ビューごとのスライド
   // speed: 600,
    //loopedSlides: 6,
    //sp
    //spaceBetween: 24,
    //width: 274,
    //pc,tab
    //breakpoints: {
      //768: {
        //spaceBetween: 40,
        //width: 400,
      //}
   //}
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

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
// And if we need scrollbar
// scrollbar: {
// el: '.swiper-scrollbar',
// },

//ビューごとのスライド
// speed: 600,
//loopedSlides: 6,
//sp
//spaceBetween: 24,
//width: 274,
//pc,tab
//breakpoints: {
//768: {
  //spaceBetween: 40,
  //width: 400,
//}
//}

});

let slider3 = new Swiper ('.slider3', {
  //各種設定

});
let slider4 = new Swiper ('.slider4', {
  //各種設定

});

});