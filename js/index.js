/*-------------------------------
	メインビジュアル アニメーション gsap
-------------------------------*/
var heroAnim = function () {

  const jsHeroCopy = '.js-mainVisual__copy'
  const jsHeroCirleBtn = '.js-circleBtn'
  const jsHeroCircleImg = '.js-mainVisual__sliderList [id*=js-item]'
  const jsHeroHuman = '.js-human'

  //アニメーション前の初期状態をセット
  gsap.set(
    jsHeroCopy, {
      opacity: 0,
      // y: 40,
      scale: 0.8,
    }
  );
  gsap.set(
    jsHeroCirleBtn, {
      opacity: 0,
      y: -32,
    }
  );
  gsap.set(
    jsHeroCircleImg, {
      opacity: 0,
      y: 40,
    }
  );
  gsap.set(
    jsHeroHuman, {
      opacity: 0,
      y: 40,
    }
  );
  // timelineを作成
  // const tl01 = gsap.timeline();
  const tl02 = gsap.timeline();


  $(window).on('load', function () {
    // タイムライン上で各アニメーションを連動
    // tl01.to(
    //   jsHeroCopy, {
    //     opacity: 1,
    //     // y: 0,
    //     scale: 1,
    //     duration: 0.6,
    //     ease: 'back'
    //   }
    // )
    tl02.to(
      jsHeroCircleImg, {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 0.6,
        ease: 'back',
        stagger: {
          amount: 0.25,
        }
      },
    ).to(
      jsHeroCopy, {
        opacity: 1,
        // y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'back'
      },
      "-=0.25"
    ).to(
      jsHeroHuman, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'back',
      },
      "-=0.6"
    ).to(
      jsHeroCirleBtn, {
        opacity: 1,
        y: 0,
        delay: -0.2,
        duration: 0.6,
        ease: 'power2',
      },
      "+=0.3"
    )
  });

}
heroAnim();


/*-------------------------------
  メインビジュアル swiper
-------------------------------*/
const mv_swiper = new Swiper('.mv_swiper', {
  loop: true,
  speed: 750,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  parallax: true,
  // allowTouchMove: false,
  autoplay: {
  	delay: 10000,
  	stopOnLastSlide: false,
  	disableOnInteraction: false,
  	reverseDirection: false
  },
});


/*-------------------------------
  新着求人情報 swiper
-------------------------------*/
const newJobs__Swiper = new Swiper('.newJobs__swiper', {
  spaceBetween: 50,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  breakpoints: {
    835: {
      spaceBetween: 24,
    }
  },

  navigation: {
    nextEl: '.newJobs__swiper-button-next',
    prevEl: '.newJobs__swiper-button-prev',
  },
});
//画面に現れるまでswiperを停止
newJobs__Swiper.autoplay.stop();
$(window).on('scroll', function () {
  let position = $('.newJobs__swiper').offset().top - $(window).innerHeight() + 100,
  scrollTop = $(window).scrollTop();
  if (scrollTop > position) {
    //画面に現れたらswiperを開始
    newJobs__Swiper.autoplay.start();
  } else {
    // 画面外にスクロールしたらswiperを停止
    newJobs__Swiper.autoplay.stop();
  }
});


/*-------------------------------
  SPのみ順番入れ替え
-------------------------------*/
/*** 変数定義 ***/
/** メディアクエリ **/
var mediaQueryList01 = window.matchMedia("(max-width:834px)");
var mediaQueryList02 = window.matchMedia("(min-width:835px)");
const ListItems01 = document.querySelectorAll('.sec__common');
const ListItemsArr01 = Array.prototype.slice.call(ListItems01);
/*** イベントリスナー ***/
var listener01 = function(event) {
  // リサイズ時に行う処理
  if (event.matches) {
    // 835px未満
    $('.jobs .lead').before($('.jobs .imgArea'))
    ListItemsArr01.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.imgArea');
      const Destination = ListItem.querySelector('.commonHead01')
      const ParentNode = ListItem.querySelector('.txtArea');

      Destination.parentNode.insertBefore(Target, Destination.nextElementSibling);
    })
  }
};
var listener02 = function(event) {
  // リサイズ時に行う処理
  if (event.matches) {
    // 835px以上
    $('.jobs .txtArea').before($('.jobs .imgArea'))
    ListItemsArr01.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.imgArea');
      const Destination = ListItem.querySelector('.commonHead01')
      const BenchMark = ListItem.querySelector('.txtArea');

      BenchMark.parentNode.insertBefore(Target, BenchMark);
    })
  }
};
/*** リスナー登録 ***/
if (mediaQueryList01.addEventListener) {
  mediaQueryList01.addEventListener("change", listener01, false);
} else if (mediaQueryList01.attachEvent) {
  mediaQueryList01.attachEvent("change", listener01);
}
if (mediaQueryList02.addEventListener) {
  mediaQueryList02.addEventListener("change", listener02, false);
} else if (mediaQueryList02.attachEvent) {
  mediaQueryList02.attachEvent("change", listener02);
}
/*** 初期化処理 ***/
listener01(mediaQueryList01);
listener02(mediaQueryList02);
