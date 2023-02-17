/*-------------------------------
  SPのみ順番入れ替え
-------------------------------*/
/*** 変数定義 ***/
/** メディアクエリ **/
var mediaQueryList01 = window.matchMedia("(max-width:834px)");
var mediaQueryList02 = window.matchMedia("(min-width:835px)");
const ListItems01 = document.querySelectorAll('.jobs__blockList__item');
const ListItemsArr01 = Array.prototype.slice.call(ListItems01);
const ListItems02 = document.querySelectorAll('.aboutBlock__list__item');
const ListItemsArr02 = Array.prototype.slice.call(ListItems02);

/*** イベントリスナー ***/
var listener01 = function(event) {
  // リサイズ時に行う処理
  if (event.matches) {
    // 835px未満
    ListItemsArr01.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.commonBtn01');
      const Destination = ListItem.querySelector('.jobs__blockList__item__body')

      Destination.parentNode.insertBefore(Target, Destination.nextElementSibling);
    });
    ListItemsArr02.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.aboutBlock__list__item__imgArea');
      const Destination = ListItem.querySelector('.aboutBlock__list__item__txtArea .term')

      if (Target) {
        Destination.parentNode.insertBefore(Target, Destination.nextElementSibling);
      }
    });
  }
};
var listener02 = function(event) {
  // リサイズ時に行う処理
  if (event.matches) {
    // 835px以上
    ListItemsArr01.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.commonBtn01');
      const Destination = ListItem.querySelector('.job-name')

      Destination.parentNode.insertBefore(Target, Destination.nextElementSibling);
    });
    ListItemsArr02.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.aboutBlock__list__item__imgArea');
      const Destination = ListItem.querySelector('.aboutBlock__list__item__txtArea')

      if (Target) {
        Destination.parentNode.insertBefore(Target, Destination.nextElementSibling);
      }
    });
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
