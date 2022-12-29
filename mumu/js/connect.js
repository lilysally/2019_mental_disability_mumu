$(document).ready(function() {
  $(".again").css("display", "none");
  $(".leave").css("display", "none");
  $(".nextbutton").css("display", "none");
  let topcircle = ["#item_left1", "#item_left2", "#item_left3", "#item_left4"];
  let bottomcircle = ["#dot2", "#dot3", "#dot4", "#dot5"];
  for (let i = 0; i < 4; i++) {
    $(topcircle[i]).css("display", "none");
    $(bottomcircle[i]).css("display", "none");
  }
  //點擊遊戲開始
  $("#gamesStart").on("click", function() {
    console.log("進入遊戲");
    rand1(case1);
  });

  //蘋果
  let case1 = 1;
  function rand1(case1) {
    $("path").hide();
    //選項
    let fruitchoose = ["蘋果", "葡萄", "橘子", "鳳梨", "草莓"];
    let choose1 = document.getElementById("choose1");
    choose1.innerHTML = `${fruitchoose[0]}`;
    $(".btn-danger").css("display", "none");
    $("#choose1").css("display", "block");
    $(".btn-success").css("display", "block"); //點遊戲規則後，遊戲規則鈕放在右上方
    if ($(window).width() > 991) {
      $(".btn-success").css({
        position: "relative",
        top: "50%",
        right: "-20%"
      });
    } else if ($(window).width() > 767) {
      $(".btn-success").css({
        position: "relative",
        //    top: "50%",
        //    right: "-20%"
        //    position: 'relative',
        padding: "2%",
        top: "3%",
        right: "10%"
      });
    } else {
      //小於767
      $(".btn-success").css({
        position: "relative",
        //    top: '50%',
        //    right: '-70%',
        padding: "2%",
        top: "3%",
        right: "10%"
      });
    }
    //水果圖片
    let fruit1 = [
      "images/l_apple.png",
      "images/l_grapes.png",
      "images/l_orange.png",
      "images/l_pineapple.png",
      "images/l_strawberry.png"
    ];
    let img1 = document.getElementById("img1");
    img1.src = fruit1[0];

    //水果連接點
    jsPlumb.ready(function() {
      let common = {
        isSource: true,
        isTarget: true,
        connector: ["Straight"]
      };

      jsPlumb.addEndpoint(
        "item_left",
        {
          anchors: ["Right"]
        },
        common
      );

      jsPlumb.addEndpoint(
        "dot1",
        {
          anchor: "Left"
        },
        common
      );
      jsPlumb.bind("connection", function() {
        alert("答對了");
        console.log("連線成功");
        $("#item_left").css("display", "none");
        $("#dot1").css("display", "none");
        $("#img1").css("display", "none");
        $("svg").hide();
        $("path").hide();
        $("#img1").removeAttr("src");
        $("#choose1").css("display", "none");
        $(".nextbutton").css("display", "block"); //下一關按鈕出現
        $("path").hide();
        $(".nextbutton").click(function() {
          $("path").hide();
          rand2(case2);
        });
      });
    });
  }

  //葡萄
  let case2 = 2;
  $("path").hide();
  function rand2(case2) {
    $(".btn-danger").css("display", "none"); //下一關消失
    //選項
    let fruitchoose = ["葡萄"];
    let choose1 = document.getElementById("choose1");
    //水果圖片
    let fruit1 = [
      "images/l_apple.png",
      "images/l_grapes.png",
      "images/l_orange.png",
      "images/l_pineapple.png",
      "images/l_strawberry.png"
    ];
    let img1 = document.getElementById("img1");

    $("#choose1").css("display", "block");
    choose1.innerHTML = `${fruitchoose[0]}`;
    img1.src = fruit1[1];
    $("#img1").css("display", "block");
    $("#item_left1").css("display", "block");
    $("#dot2").css("display", "block");
    //jsPlumb
    jsPlumb.ready(function() {
      var common = {
        isSource: true,
        isTarget: true,
        connector: ["Straight"]
      };
      //加端點
      jsPlumb.addEndpoint(
        "item_left1",
        {
          anchors: "Right"
        },
        common
      );

      jsPlumb.addEndpoint(
        "dot2",
        {
          anchor: "Left"
        },
        common
      );

      jsPlumb.bind("connection", function() {
        //alert("答對了");
        $("#item_left1").css("display", "none");
        $("#dot2").css("display", "none");
        $("#img1").css("display", "none");
        $("#img1").removeAttr("src");
        $("#choose1").css("display", "none");
        $(".nextbutton").css("display", "block"); //下一關按鈕出現
        $(".nextbutton").click(function() {
          $("path").hide();
          rand3(case3);
        });
      });
    });
  }
  //橘子
  let case3 = 3;
  function rand3(case3) {
    $("path").hide();
    $(".btn-danger").css("display", "none"); //下一關消失
    //選項
    let fruitchoose = ["橘子"];
    let choose1 = document.getElementById("choose1");
    //水果圖片
    let fruit1 = [
      "images/l_apple.png",
      "images/l_grapes.png",
      "images/l_orange.png",
      "images/l_pineapple.png",
      "images/l_strawberry.png"
    ];
    let img1 = document.getElementById("img1");

    $("#choose1").css("display", "block");
    choose1.innerHTML = `${fruitchoose[0]}`;
    img1.src = fruit1[2];
    $("#img1").css("display", "block");
    $("#item_left2").css("display", "block");
    $("#dot3").css("display", "block");
    //jsPlumb
    jsPlumb.ready(function() {
      var common = {
        isSource: true,
        isTarget: true,
        connector: ["Straight"]
      };
      //加端點
      jsPlumb.addEndpoint(
        "item_left2",
        {
          anchors: "Right"
        },
        common
      );

      jsPlumb.addEndpoint(
        "dot3",
        {
          anchor: "Left"
        },
        common
      );

      jsPlumb.bind("connection", function() {
        //alert("答對了");
        $("#item_left2").css("display", "none");
        $("#dot3").css("display", "none");
        $("#img1").css("display", "none");
        $("#img1").removeAttr("src");
        $("#choose1").css("display", "none");
        $(".nextbutton").css("display", "block"); //下一關按鈕出現
        $(".nextbutton").click(function() {
          $("path").hide();
          rand4(case4);
        });
      });
    });
  }
  //鳳梨
  let case4 = 4;
  function rand4(case4) {
    $("path").hide();
    $(".btn-danger").css("display", "none"); //下一關消失
    //選項
    let fruitchoose = ["鳳梨"];
    let choose1 = document.getElementById("choose1");
    //水果圖片
    let fruit1 = [
      "images/l_apple.png",
      "images/l_grapes.png",
      "images/l_orange.png",
      "images/l_pineapple.png",
      "images/l_strawberry.png"
    ];
    let img1 = document.getElementById("img1");

    $("#choose1").css("display", "block");
    choose1.innerHTML = `${fruitchoose[0]}`;
    img1.src = fruit1[3];
    $("#img1").css("display", "block");
    $("#item_left3").css("display", "block");
    $("#dot4").css("display", "block");
    //jsPlumb
    jsPlumb.ready(function() {
      var common = {
        isSource: true,
        isTarget: true,
        connector: ["Straight"]
      };
      //加端點
      jsPlumb.addEndpoint(
        "item_left3",
        {
          anchors: "Right"
        },
        common
      );

      jsPlumb.addEndpoint(
        "dot4",
        {
          anchor: "Left"
        },
        common
      );

      jsPlumb.bind("connection", function() {
        //alert("答對了");
        $("#item_left3").css("display", "none");
        $("#dot4").css("display", "none");
        $("#img1").css("display", "none");
        $("#img1").removeAttr("src");
        $("#choose1").css("display", "none");
        $(".nextbutton").css("display", "block"); //下一關按鈕出現
        $(".nextbutton").click(function() {
          $("path").hide();
          rand5(case5);
        });
      });
    });
  }
  //草莓
  let case5 = 5;
  function rand5(case5) {
    $("path").hide();
    $(".btn-danger").css("display", "none"); //下一關消失
    //選項
    let fruitchoose = ["草莓"];
    let choose1 = document.getElementById("choose1");
    //水果圖片
    let fruit1 = [
      "images/l_apple.png",
      "images/l_grapes.png",
      "images/l_orange.png",
      "images/l_pineapple.png",
      "images/l_strawberry.png"
    ];
    let img1 = document.getElementById("img1");

    $("#choose1").css("display", "block");
    choose1.innerHTML = `${fruitchoose[0]}`;
    img1.src = fruit1[4];
    $("#img1").css("display", "block");
    $("#item_left4").css("display", "block");
    $("#dot5").css("display", "block");
    //jsPlumb
    jsPlumb.ready(function() {
      var common = {
        isSource: true,
        isTarget: true,
        connector: ["Straight"]
      };
      //加端點
      jsPlumb.addEndpoint(
        "item_left4",
        {
          anchors: "Right"
        },
        common
      );

      jsPlumb.addEndpoint(
        "dot5",
        {
          anchor: "Left"
        },
        common
      );

      jsPlumb.bind("connection", function() {
        //alert("答對了");
        $("#item_left4").css("display", "none");
        $("#dot5").css("display", "none");
        $("#img1").css("display", "none");
        $("path").hide();
        $("#img1").removeAttr("src");
        $(".nextbutton").css("display", "none");
        $("#choose1").css("display", "none");
        $(".leave").css("display", "block"); //退出按鈕
      }); //jsPlumb.bind()的結尾
    }); //jsPlumb.ready(function(){})的結尾
  }
});
