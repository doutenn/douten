const main = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  //塗りつぶす色の指定
  ctx.fillStyle = "rgb(63, 81, 181)";
 
  let x = 0;

  // スタートボタンの変数定義
  var startButton;
  // ストップボタンの変数定義
  var stopButton;
  // リセットボタンの変数定義
  var resetButton;
    window.onload = function() {
      // スタートボタンが押されたかを判定
      startButton = document.getElementById('start');
      // ストップボタンが押されたかを判定
      stopButton = document.getElementById('stop');
      // リセットボタンが押されたかを判定
      resetButton = document.getElementById('reset');
  
      //スタートボタンが押された時の処理
      startButton.onclick = function() {
        draw();
      };
      //ストップボタンが押された時の処理
      stopButton.onclick = function() {

      };
      //リセットボタンが押された時の処理  
      resetButton.onclick = function() {
        draw();
      };
    };
 
  function draw(){
    if(x <= 500){
     // canvas 内をまっさらにする
     ctx.clearRect(0, 0, 640, 480);
     //描画開始
     ctx.beginPath();
     //円
     ctx.arc(x, 240, 5, 0, Math.PI*2, false)
     ctx.fill();

     //三角形
     ctx.moveTo(x, 240);
     ctx.lineTo(0, 390);
     ctx.lineTo(500, 390);
     ctx.closePath();

     // x を 20 増加
     x += 20;
     // 100 ミリ秒(0.1 秒)後に draw を再度呼び出し
     setTimeout(draw, 100, x + 20);

     //四角形
     ctx.moveTo(0, 390);
     ctx.lineTo(0, 240);
     ctx.lineTo(500, 240);
     ctx.lineTo(500, 390);
 
     // 開始地点に戻って線を閉じる
     ctx.closePath();
     // 塗りつぶしを実行
     ctx.stroke();
    }else{
      x = 0;
    }
  };
};
 
document.addEventListener("DOMContentLoaded", main);