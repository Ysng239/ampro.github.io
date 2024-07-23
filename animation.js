$(function(){
        //マウスが乗ったり外れたりした時の動き
        let elm = $('.zoomInHoverTrigger');
        //マウスが乗った時
        elm.on('mouseenter',function(){
            $(this).addClass('zoomIn');
            $(this).removeClass('zoomOut');
        });
        //マウスが外れた時の処理
        elm.on('mouseleave',function(){
            $(this).addClass('zoomOut');
            $(this).removeClass('zoomIn');
        });
});

//音楽隊のアニメーション-------------------------------------------------------------------------------------------------
function delayScrollAnime() {
	var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

$(window).on('load', function(){
    delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});


//ローディング画面--------------------------------------------------------------------------------------------------
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }


  function delayScrollAnimeRise() {
	var time = 0.1;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScrollUp').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeRise")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeRise");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeRise");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		delayScrollAnimeRise();/* アニメーション用の関数を呼ぶ*/
	});


	function fadeAnime(){

		// ふわっ
		$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		  let elemPos = $(this).offset().top-30;//要素より、50px上の
		  let scroll = $(window).scrollTop();
		  let windowHeight = $(window).height();
		  if (scroll >= elemPos - windowHeight){
		  $(this).addClass('fadeY');// 画面内に入ったらfadeUpというクラス名を追記
		  }else{
		  $(this).removeClass('fadeY');// 画面外に出たらfadeUpというクラス名を外す
		  }
		  });
	  }
	  
	  // 画面をスクロールをしたら動かしたい場合の記述
		$(window).scroll(function (){
		  fadeAnime();/* アニメーション用の関数を呼ぶ*/
		});


$(function(){
		// #page-topをクリックした際の設定
	$('#page-top').click(function () {
		$('body,html').animate({
			scrollTop: 0//ページトップまでスクロール
		}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
		return false;//リンク自体の無効化
	});
});

