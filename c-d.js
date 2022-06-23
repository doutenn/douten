const main = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //塗りつぶす色の指定
    ctx.fillStyle = "rgb(0, 155, 0)";
   
    let y = 100;
  
    // スタートボタンの変数定義
    var startButton;
    
    // リセットボタンの変数定義
    var resetButton;
      window.onload = function() {
        // スタートボタンが押されたかを判定
        startButton = document.getElementById('start');
        
        // リセットボタンが押されたかを判定
        resetButton = document.getElementById('reset');
    
        //スタートボタンが押された時の処理
        startButton.onclick = function() {
          draw();
        };
       
        //リセットボタンが押された時の処理  
        resetButton.onclick = function() {
          reset();
        };

        ctx.beginPath();
       //円
       ctx.arc(650, y, 7, 0, Math.PI*2, false)
       ctx.fill();
   
       //三角形
       ctx.moveTo(650, y);
       ctx.lineTo(150, 400);
       ctx.lineTo(650, 400);
       ctx.closePath();
       ctx.fill();

        //四角形
        ctx.moveTo(150, 100);
        ctx.lineTo(150, 400);
        ctx.lineTo(650, 400);
        ctx.lineTo(650, 100);
 
        ctx.font = "32px serif";
        ctx.fillText("A",120,410);
        ctx.fillText("B",120,110);
        ctx.fillText("C",660,110);
        ctx.fillText("D",660,410);
        ctx.fillText("P",680,y+10);
        ctx.fillText("6cm",80,260);
        ctx.fillText("10cm",380,90);

         // 開始地点に戻って線を閉じる
       ctx.closePath();
       // 塗りつぶしを実行
       ctx.stroke()
      };
   
    function draw(){
      if(y <= 400){
       // canvas 内をまっさらにする
       ctx.clearRect(0, 0, 800, 480);
       //描画開始
       ctx.beginPath();
       //円
       ctx.arc(650, y, 7, 0, Math.PI*2, false)
       ctx.fill();
       ctx.font = "32px serif";
       ctx.fillText("P",680,y+10);
   
       //三角形
       ctx.moveTo(650, y);
       ctx.lineTo(150, 400);
       ctx.lineTo(650, 400);
       ctx.closePath();
       ctx.fill();
  
       // y を 2 増加
       y += 0.5;
       // 10 ミリ秒(0.01 秒)後に draw を再度呼び出し
       setTimeout(draw, 10, y + 1);
  
       //四角形
       ctx.moveTo(150, 100);
       ctx.lineTo(150, 400);
       ctx.lineTo(650, 400);
       ctx.lineTo(650, 100);

       ctx.font = "32px serif";
       ctx.fillText("A",120,410);
       ctx.fillText("B",120,110);
       ctx.fillText("C",660,110);
       ctx.fillText("D",660,410);
       ctx.fillText("P",680,y+10);
       ctx.fillText("6cm",80,260);
        ctx.fillText("10cm",380,90);
   
       // 開始地点に戻って線を閉じる
       ctx.closePath();
       // 塗りつぶしを実行
       ctx.stroke();
      }else{
        y = 100;
      }
    };

    function reset() {
      y=100;
      // canvas 内をまっさらにする
      ctx.clearRect(0, 0, 800, 480);
      //描画開始
      ctx.beginPath();
      //円
      ctx.arc(650, y, 7, 0, Math.PI*2, false)
      ctx.fill();

      //三角形
      ctx.moveTo(650, y);
      ctx.lineTo(150, 400);
      ctx.lineTo(650, 400);
      ctx.closePath();
      ctx.fill();

       //四角形
      ctx.moveTo(150, 100);
      ctx.lineTo(150, 400);
      ctx.lineTo(650, 400);
      ctx.lineTo(650, 100);

      ctx.font = "32px serif";
      ctx.fillText("A",120,410);
      ctx.fillText("B",120,110);
      ctx.fillText("C",660,110);
      ctx.fillText("D",660,410);
      ctx.fillText("P",680,y+10);
      ctx.fillText("6cm",80,260);
        ctx.fillText("10cm",380,90);
       // 開始地点に戻って線を閉じる
      ctx.closePath();
      // 塗りつぶしを実行
      ctx.stroke();
        
    };
  };
   
  document.addEventListener("DOMContentLoaded", main);
