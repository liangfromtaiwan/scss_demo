// ヘッダーの出たり消えたりのです
var startPos = 0;
$(window).scroll(function () {
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if ($(window).scrollTop() >= 160) {
      $(".header").css("top", "-" + 220 + "px");
    }
  } else {
    $(".header").css("top", 0 + "px");
  }
  startPos = currentPos;
});

// scroll
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 256) {
    $(".header__sp__logo").css("display", "block");
    $(".header__wrap").css("background", "#fff");
    $(".header__wrap").css("border-bottom", "1px solid #5CCDE0");
  } else {
    $(".header__sp__logo").css("display", "none");
    $(".header__wrap").css("background", "none");
    $(".header__wrap").css("border-bottom", "1px solid transparent");
  }
});

//header menu hover
$(function () {
  $('.hoverArea').hover(function () {
    var w = $(window).width();
    if (w > 1024) {
      $(this).toggleClass('active');
      $(this).parent().toggleClass("active");
      $(this).children('.hoverContent').stop().slideToggle();
    }
  }, function () {
    var w = $(window).width();
    if (w > 1024) {
      $(this).removeClass('active');
      $(this).children('.hoverContent').stop().slideUp();
    }
  });
});

// header menu click
$(function () {
  $(".slideDown__link").click(function () {
    var w = $(window).width();
    if (w < 1024) {
      var $parent = $(this).parent();
      $parent.toggleClass("active");
      $parent.find(".slideDownContent").stop().slideToggle();
        $parent.siblings().removeClass("active");
      $parent.siblings().children(".slideDownContent").stop().slideUp();
    }
    
  });
});
// hamburger
$(document).ready(function () {
  $(".header__hamburger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".header__inner").toggleClass("active");
    $(".header__menu").fadeToggle();
  });
});



//入塾までの流れについてに戻る
$(document).ready(function () {
  $("#toStep").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#step").offset().top - 150
    }, 500);
    $(this).parent().parent().parent().parent().find("#step .faq__content__list__item__a").slideDown(1000);
    $(this).parent().parent().parent().parent().find("#step").addClass("active");
  });
});



//faq slide down
$(document).ready(function () {
  $(".faq__content__list--active .faq__content__list__item__q").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().find(".faq__content__list__item__a").slideToggle();
  });
});
$(document).ready(function () {
  $(".faq__content__list .faq__content__list__item__q").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().find(".faq__content__list__item__a").slideToggle();
  });
});


//ページ内リンクのスムーズスクロールを実装
// スムーズスクロール
$(function () {
  $('a[href^="#"]:not(a.lightbox)').click(function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 30; // 60pxの余白をつける
    $('html,body').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});


//コピーライト
var TodayData = new Date();
var thisYear = TodayData.getFullYear();
window.onload = function () {
  document.getElementById('copyright').innerHTML = '&copy;' + thisYear + ' みらい創研 中学受験学院';
};