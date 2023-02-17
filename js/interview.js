/*-------------------------------
  SPのみ順番入れ替え
-------------------------------*/
/*** 変数定義 ***/
/** メディアクエリ **/
var mediaQueryList01 = window.matchMedia("(max-width:834px)");
var mediaQueryList02 = window.matchMedia("(min-width:835px)");
const ListItems01 = document.querySelectorAll('.interview__list__item');
const ListItemsArr01 = Array.prototype.slice.call(ListItems01);

/*** イベントリスナー ***/
var listener01 = function(event) {
  // リサイズ時に行う処理
  if (event.matches) {
    // 835px未満
    ListItemsArr01.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.imgArea');
      const Destination = ListItem.querySelector('.lead')
      const ParentNode = ListItem.querySelector('.txtArea');

      Destination.parentNode.insertBefore(Target, Destination.nextElementSibling);
    })
  }
};
var listener02 = function(event) {
  // リサイズ時に行う処理
  if (event.matches) {
    // 835px以上
    ListItemsArr01.forEach(function (ListItem) {
      const Target = ListItem.querySelector('.imgArea');
      const Destination = ListItem.querySelector('.lead')
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
