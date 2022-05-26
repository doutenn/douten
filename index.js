const main = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const tateElement = document.getElementById('tate');
	  console.log(tateElement.value);

    const yokoElement = document.getElementById('yoko');
	  console.log(yokoElement.value);

    //塗りつぶす色の指定
    ctx.fillStyle = "rgb(0, 155, 0)";

    let x = 150;
    let y1 = 0;
    let y2 = 100;
  
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
          start();
        };
        //ストップボタンが押された時の処理
        stopButton.onclick = function() {
          stop();
        };
        //リセットボタンが押された時の処理  
        resetButton.onclick = function() {
          reset();
        };
      };
   
    function draw(){
      if(y1 >= 100){
       // canvas 内をまっさらにする
       ctx.clearRect(0, 0, 1000, 2000);
       //描画開始
       ctx.beginPath();
       //円
       ctx.arc(150, y1, 7, 0, Math.PI*2, false)
       ctx.fill();
   
       //三角形
       ctx.moveTo(150, y1);
       ctx.lineTo(150, tateElement.value*100);
       ctx.lineTo(yokoElement.value*100, tateElement.value*100);
       ctx.closePath();
       ctx.fill();
       
       // y1 を 1 増加
       y1 -= 1;
       // 10 ミリ秒(0.1 秒)後に draw を再度呼び出し
       setTimeout(draw, 10, y1 - 1);

       //四角形
       ctx.moveTo(150, 100);
       ctx.lineTo(150, tateElement.value*100);
       ctx.lineTo(yokoElement.value*100, tateElement.value*100);
       ctx.lineTo(yokoElement.value*100, 100);
   
       // 開始地点に戻って線を閉じる
       ctx.closePath();
       // 塗りつぶしを実行
       ctx.stroke();

      }else if(y1 <= 100 && x <= yokoElement.value*100){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 1000, 2000);
        //描画開始
        ctx.beginPath();
        //円
        ctx.arc(x, 100, 7, 0, Math.PI*2, false)
        ctx.fill();
    
        //三角形
        ctx.moveTo(x, 100);
        ctx.lineTo(150, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, tateElement.value*100);
        ctx.closePath();
        ctx.fill();
   
        // x を 1 増加
        x += 1;
        // 10 ミリ秒(0.01 秒)後に draw を再度呼び出し
        setTimeout(draw, 10, x + 1);
   
        //四角形
        ctx.moveTo(150, 100);
        ctx.lineTo(150, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, 100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
      }else if(y1 <= 100 && x >= yokoElement.value*100 && y2 <= tateElement.value*100){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 1000, 2000);
        //描画開始
        ctx.beginPath();
        //円
        ctx.arc(yokoElement.value*100, y2, 7, 0, Math.PI*2, false)
        ctx.fill();
    
        //三角形
        ctx.moveTo(yokoElement.value*100, y2);
        ctx.lineTo(150, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, tateElement.value*100);
        ctx.closePath();
        ctx.fill();
        
        // y2 を 1 増加
        y2 += 1;
        // 10 ミリ秒(0.1 秒)後に draw を再度呼び出し
        setTimeout(draw, 10, y2 + 1);
 
   
        //四角形
        ctx.moveTo(150, 100);
        ctx.lineTo(150, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, 100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
       }
    };

    function start() {
        y1 = tateElement.value*100;
        draw(); 
    }

    function reset() {
        x = 150;
        y1 = tateElement.value*100;
        y2 = 100;
        draw(); 
    }
  };

   
  document.addEventListener("DOMContentLoaded", main);
