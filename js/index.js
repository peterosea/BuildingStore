/***********************************************************************************
* Copyright (C)RFLOGIX since 2010.08.24 (rflogix@rflogix.com)
************************************************************************************
* ● 프로젝트	: 빌딩포인트코리아-스토어
* ○ 파일		: index.js
* ○ 생성		: 2017.02.24
* ○ 최종변경	: 2022.06.08 (peter@peterosea.com)
***********************************************************************************/

/***********************************************************************************
* 화면 시작
***********************************************************************************/

var LOADING_SHOW_YN = false;
var slider_main;

$(document).ready(function () {

  // 메인 슬라이더 : 2022.06.08 수정
  slider_main = new Swiper('.swiper-container.main_banner', {
    loop: true
    , autoplay: {
      delay: 3000
    }, pagination: {
      el: '.swiper-pagination',
      clickable: true
    }, on: {
      slideChange: function () {
        //
      }
      , slideChangeTransitionStart: function () {
        //
      }
      , slideChangeTransitionEnd: function () {
        //
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  //slider_main.autoplay.stop();



  // 팝업관련 아래 주석


  getCookieMobile();

  $(".modal .btn_today").click(function () {
    setCookieMobile("todayCookie", "done", 1);
    $(".modal").hide();
  });

  $(".modal2 .btn_today2").click(function () {
    setCookieMobile("todayCookie2", "done", 1);
    $(".modal2").hide();
  });


});

function setCookieMobile(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookieMobile() {
  var cookiedata = document.cookie;

  if (cookiedata.indexOf("todayCookie=done") < 0) {
    openPopup_popup_index();
  }

  if (cookiedata.indexOf("todayCookie2=done") < 0) {
    openPopup_popup2_index();
  }

}

function showMain() {
  LOADING_SHOW_YN = false;
  $(".loading_wrap").removeClass("active");
  setTimeout(function () {
    $(".page_wrap").showElement();
    slider_main.autoplay.start();
  }, 500);
}

//index 팝업
function openPopup_popup_index() {
  $(".popup_index").addClass("active").addClass("show");
}
function closePopup_popup_index() {
  $(".popup_index").removeClass("show");
  setTimeout(function () {
    $(".popup_index").removeClass("active");
  }, 300);
}

function openPopup_popup2_index() {
  $(".popup_index2").addClass("active").addClass("show");
}
function closePopup_popup2_index() {
  $(".popup_index2").removeClass("show");
  setTimeout(function () {
    $(".popup_index2").removeClass("active");
  }, 300);
}