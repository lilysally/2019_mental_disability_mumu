$(document).ready(function() {
  $(".again").css("display", "none"); //再玩一次按鈕消失
  $(".leave").css("display", "none"); //退出按鈕消失
  //點擊遊戲開始
  $("#gamesStart").on("click", function() {
    console.log("進入遊戲");
    rand1(randomCookies1);
  });
  //簡單關卡
  function rand1(randomCookies) {
    $(".again").css("display", "none"); //再玩一次按鈕消失
    $(".leave").css("display", "none"); //退出按鈕消失
    //     let random1 = Math.floor(Math.random() * 3) + 1; //計算餅乾數量[一邊] (輕:3,中:5,重
    $("#gamesStart").css("display", "none"); //隱藏遊戲開始按鈕
    //將遊戲規則移置角落
    $("#gameRules").css({
      position: "relative",
      padding: "2%",
      top: "3%",
      right: "-38%"
    });
    $(".home-page").css({
      margin: "0"
    });
    // 左邊餅乾數量(PNG)
    let demo1 = document.getElementById("demo1");
    //左邊餅乾數字圖形，抓 random1變數 (NUMBER)
    let gui1 = document.getElementById("gui1");
    let cookiesNum1 = cookies(
      demo1,
      "imgdemo1",
      "gui1img",
      gui1,
      randomCookies
    );
    // 右邊餅乾數量(PNG)
    let demo2 = document.getElementById("demo2");
    //右邊餅乾數字圖形，抓 random2變數 (NUMBER)
    let gui2 = document.getElementById("gui2");
    let cookiesNum2 = cookies(
      demo2,
      "imgdemo2",
      "gui2img",
      gui2,
      randomCookies
    );

    //顯示運算子
    operator();
    //正確答案
    let answer = cookiesNum1 + cookiesNum2;
    console.log(answer);
    //載入選項
    let choose = chooses(answer);
    console.log(choose);
    //打亂選項
    choose = upset(choose);
    console.log(choose);

    //顯示選項
    let choose1 = document.getElementById("choose1");
    let choose2 = document.getElementById("choose2");
    let choose3 = document.getElementById("choose3");
    let chooseHtml = [choose1, choose2, choose3];
    let choose_imgHtml = ["choose1img", "choose2img", "choose3img"];
    displayOption(chooseHtml, choose_imgHtml, choose);

    //為正確選項，做DOM
    let bingo = "";
    if (choose[0] == answer) {
      bingo = document.getElementById("choose1img");
    } else if (choose[1] == answer) {
      bingo = document.getElementById("choose2img");
    } else {
      bingo = document.getElementById("choose3img");
    }

    //   //判斷哪一個餅乾數量選擇的選項是正確答案? random3為正確答案的變數
    //   let message = [];
    //   for (let i = 0; i < 3; i++) {
    //     if (choose[i] === answer) {
    //       message.push("答對了，點擊紅色按鈕");
    //     } else {
    //       message.push("答錯了，再想想");
    //     }
    //   }

    //   //Speech Synthesis 文字轉聲音
    //   //
    //   //餅乾數量選擇1的聲音設置
    //   let msg1 = new SpeechSynthesisUtterance();
    //   const speakButton1 = document.querySelector(`#${choose_imgHtml[0]}`);
    //   // 設置要說什麼
    //   msg1.text = `${message[0]}`;
    //   speakButton1.addEventListener("click", toggle1);
    //   // 播放語音的函式
    //   function toggle1() {
    //     speechSynthesis.speak(msg1); // 讀出語音需求
    //   }

    //   let msg2 = new SpeechSynthesisUtterance();
    //   const speakButton2 = document.querySelector(`#${choose_imgHtml[1]}`);
    //   // 設置要說什麼
    //   msg2.text = `${message[1]}`;
    //   speakButton2.addEventListener("click", toggle2);
    //   // 播放語音的函式
    //   function toggle2() {
    //     speechSynthesis.speak(msg2); // 讀出語音需求
    //   }

    //   let msg3 = new SpeechSynthesisUtterance();
    //   const speakButton3 = document.querySelector(`#${choose_imgHtml[2]}`);
    //   // 設置要說什麼
    //   msg3.text = `${message[2]}`;
    //   speakButton3.addEventListener("click", toggle3);
    //   // 播放語音的函式
    //   function toggle3() {
    //     speechSynthesis.speak(msg3); // 讀出語音需求
    //   }

    //點到 餅乾數量選擇，除了顯示聲音外，如果碰到正確選項，會出現 聲音 跟 下一關按鈕
    //點選到正確選項，出現 下一關按鈕
    //點選 下一關按鈕，開始新的一局
    bingo.addEventListener("click", function() {
      console.log("下一關");
      let connectdemo = document.getElementById("connectdemo");
      let adddemo = document.getElementById("adddemo");
      $(".nextbutton").css("display", "block");
      gui1.innerHTML = "";
      gui2.innerHTML = "";
      connectdemo.innerHTML = "";
      adddemo.innerHTML = "";
      choose1.innerHTML = "";
      choose2.innerHTML = "";
      choose3.innerHTML = "";
      demo1.innerHTML = "";
      demo2.innerHTML = "";
    });
    $(".nextbutton").css("display", "none");
  }

  //亂數初級
  function randomCookies1() {
    let random1 = Math.floor(Math.random() * 3) + 1; //計算餅乾數量[一邊] (輕:3,中:5,重
    return random1;
  }
  //亂數中級
  function randomCookies2() {
    let random11 = Math.floor(Math.random() * 5) + 1; //計算餅乾數量[一邊] (輕:3,中:5,重
    return random11;
  }
  //亂數高級
  function randomCookies3() {
    let random111 = Math.floor(Math.random() * 5) + 3; //計算餅乾數量[一邊] (輕:3,中:5,重
    return random111;
  }
  //顯示並乾
  function cookies(demo, imgdemol, gui_img, gui, randomCookies) {
    let random1 = randomCookies();
    //顯示餅乾
    for (let i = 0; i < random1; i++) {
      let img = document.createElement("img");
      img.setAttribute("id", `${imgdemol}`);
      img.src = "images/c_cookie.png";
      img.class = "img-responsive";
      demo.appendChild(img);
    }
    //顯示餅乾數量
    let gui1img = document.createElement("span");
    gui1img.setAttribute("id", `${gui_img}`);
    gui1img.innerHTML = `${random1}`;
    gui.appendChild(gui1img);
    return random1;
  }

  //顯示運算子
  function operator() {
    // 兩邊餅乾連接符號
    let connectdemo = document.getElementById("connectdemo");
    let connectimg = document.createElement("img");
    connectimg.src = "images/add.png";
    connectdemo.appendChild(connectimg);

    //兩邊餅乾相加等於符號
    let adddemo = document.getElementById("adddemo");
    let addimg = document.createElement("img");
    addimg.src = "images/equal.png";
    adddemo.appendChild(addimg);
  }

  //載入選項
  function chooses(answer) {
    let choose = [answer];
    let x = Math.floor(Math.random() * 6) + 1;
    let count = 1;
    //使用while 迴圈，確保選項不重複
    while (count < 3) {
      if (choose.indexOf(x) == -1) {
        choose.push(x);
        count++;
      } else {
        x = Math.floor(Math.random() * 6) + 1;
      }
    }
    return choose;
  }
  //打亂選項
  function upset(choose) {
    // 選項裡的數字位置做隨機排序
    let randomposition = Math.floor(Math.random() * 3); //隨機產生0~2
    let numberposition = [];
    let positioncount = 0;
    // 使choose索引值隨機產生
    while (positioncount < 3) {
      if (numberposition.indexOf(randomposition) == -1) {
        numberposition.push(randomposition);
        positioncount++;
      } else {
        randomposition = Math.floor(Math.random() * 3);
      }
    }
    let chooseposition = [
      choose[numberposition[0]],
      choose[numberposition[1]],
      choose[numberposition[2]]
    ];
    return chooseposition;
  }

  //顯示選項
  function displayOption(chooseHtml, choose_imgHtml, choose) {
    //餅乾數量選擇1
    for (let i = 0; i < 3; i++) {
      let choose1img = document.createElement("button");
      choose1img.setAttribute("id", `${choose_imgHtml[i]}`);
      choose1img.innerHTML = `${choose[i]}`;
      chooseHtml[i].appendChild(choose1img);
    }
  }

  //跑關卡控制流程
  let gamenumber = 0;
  $(".nextbutton").click(function() {
    gamenumber++;
    console.log(gamenumber);
    if (gamenumber > 0 && gamenumber < 4) {
      console.log(gamenumber + "次");
      rand1(randomCookies1);
    } else if (gamenumber >= 4 && gamenumber < 9) {
      rand1(randomCookies2);
    } else if (gamenumber >= 9 && gamenumber < 16) {
      rand1(randomCookies3);
    } else {
      $(".nextbutton").css("display", "none");
      $("#gamesStart").css("display", "none");
      $(".again").css("display", "block");
      $(".again").click(function() {
        rand1(randomCookies1);
      });
      $(".leave").css("display", "block");
      gamenumber = 0;
      const message = new SpeechSynthesisUtterance();
      const speakagain = document.querySelector(".again");
      function again() {
        speechSynthesis.speak(message); // 讀出語音需求
      }
      message.text = "再玩一次";
      speakagain.addEventListener("click", again);
      $(".leave").click(function() {
        console.log(123);
        window.location.href = "index.html";
      });
    }
  });
});
