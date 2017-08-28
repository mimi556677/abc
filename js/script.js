 $(function(){
      $(".openbox").on("click", function() {
            $(this).next().slideToggle();
        });
    });

// -----------gallery---------------
 
// $('#theslideshow').slick({
//     arrows: false,
//     autoplay: true,
//     /* ポイントここから～ */
//     autoplaySpeed: 0,
//     cssEase: 'linear',
//     speed: 5000,
//     /* ～ここまで */
//     slidesToShow: 7,
//     slidesToScroll: 1,
// });

var loop = setInterval(function() {
    //li先頭要素のクローンを作成
    var clone = $(".slide li:first").clone(true);
    //li先頭要素のマージンレフトにマイナスを指定しアニメーションさせる
    $(".slide li:first").animate({
    marginLeft : "-100%"
    }, {
    duration : 3000,    
    complete : function() {
        //処理完了時に先頭要素を削除
        $(".slide li:first").remove();
        //クローンをliの最後に追加
        clone.clone(true).insertAfter($(".slide li:last"));
    }
    });
}, 0);



