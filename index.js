const main = () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    //縦の長さのスライダー
    function inputChange1(event){
      msg1.innerText = '縦の長さは ' + tateElement.value + ' cmです';
    }
    const tateElement = document.getElementById('tate');
    tateElement.addEventListener('input', inputChange1);
	  console.log(tateElement.value);
    let msg1 = document.getElementById('msg1');

    //横の長さのスライダー
    function inputChange2(event){
      msg2.innerText = '横の長さは ' +  yokoElement.value + ' cmです';
    }
    const yokoElement = document.getElementById('yoko');
    yokoElement.addEventListener('input', inputChange2);
	  console.log(yokoElement.value);
    let msg2 = document.getElementById('msg2');

    //速さのスライダー
    function inputChange3(event){
      msg3.innerText = '速さは ' +  hayasaElement.value + ' cm/sです';
    }
    const hayasaElement = document.getElementById('hayasa');
    hayasaElement.addEventListener('input', inputChange3);
	  console.log(hayasaElement.value);
    let msg3 = document.getElementById('msg3');

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
       ctx.clearRect(0, 0, 2000, 3000);
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
       y1 -= hayasaElement.value;
       // 10 ミリ秒(0.1 秒)後に draw を再度呼び出し
       setTimeout(draw, 10);

       //四角形
       ctx.moveTo(150, 100);
       ctx.lineTo(150, tateElement.value*100);
       ctx.lineTo(yokoElement.value*100, tateElement.value*100);
       ctx.lineTo(yokoElement.value*100, 100);
   
       // 開始地点に戻って線を閉じる
       ctx.closePath();
       // 塗りつぶしを実行
       ctx.stroke();
       //点の名前
       ctx.font = "32px serif";
       ctx.fillText("A",120,tateElement.value*100+10)
       ctx.fillText("B",120,110)
       ctx.fillText("C",yokoElement.value*100+10,110)
       ctx.fillText("D",yokoElement.value*100+10,tateElement.value*100+10)

      }else if(y1 <= 100 && x <= yokoElement.value*100){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 2000, 3000);
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
        x += 2;
        // 10 ミリ秒(0.01 秒)後に draw を再度呼び出し
        setTimeout(draw, 10);
   
        //四角形
        ctx.moveTo(150, 100);
        ctx.lineTo(150, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, 100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
        //点の名前
        ctx.font = "32px serif";
        ctx.fillText("A",120,tateElement.value*100+10)
        ctx.fillText("B",120,110)
        ctx.fillText("C",yokoElement.value*100+10,110)
        ctx.fillText("D",yokoElement.value*100+10,tateElement.value*100+10)
      }else if(y1 <= 100 && x >= yokoElement.value*100 && y2 <= tateElement.value*100){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 2000, 3000);
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
        y2 += 2;
        // 10 ミリ秒(0.1 秒)後に draw を再度呼び出し
        setTimeout(draw, 10, y2 + 2);
 
   
        //四角形
        ctx.moveTo(150, 100);
        ctx.lineTo(150, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, tateElement.value*100);
        ctx.lineTo(yokoElement.value*100, 100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
        //点の名前
        ctx.font = "32px serif";
        ctx.fillText("A",120,tateElement.value*100+10)
        ctx.fillText("B",120,110)
        ctx.fillText("C",yokoElement.value*100+10,110)
        ctx.fillText("D",yokoElement.value*100+10,tateElement.value*100+10)
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
