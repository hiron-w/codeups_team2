
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.p-top-mv, .p-sub-mv').height() < $(this).scrollTop()) {
      $('.p-header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.p-header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  //ドロワーメニュー
  $(".p-sp-openbtn").click(function () {
    if($('.p-sp-openbtn').hasClass('open')){
      $(".p-sp-nav").fadeOut();
      $(this).removeClass('open');
    }else{
      $(".p-sp-nav").fadeIn();
      $(this).addClass('open');
    }
});

  $(".p-sp-nav a").click(function () {
    $(".p-sp-openbtn").removeClass('open');
    $(".p-sp-nav").fadeOut();
});

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });



  
});
