//打亂拼圖位置
wdth = $(window).width();
adjust(wdth);
$(window).resize(function() {
  wdth = $(window).width();
  adjust(wdth);
});

function adjust(wdth) {
  $('.someElm').each(function(i, n) {
    let a = '';
    if (wdth > 560) {
      a = randomPuzzleR();
    } else {
      a = randomPuzzleT();
    }
    $(this).css('top', `${a[0]}vh`);
    $(this).css('left', `${a[1]}vw`);
  });
}
function randomPuzzleR() {
  let mt = Math.floor(Math.random() * 50) + 5;
  let ml = Math.floor(Math.random() * 10) + 5;
  let rP = [mt, ml];
  return rP;
}
function randomPuzzleT() {
  let mt = Math.floor(Math.random() * 5) + 1;
  let ml = Math.floor(Math.random() * 80) + 5;
  let rP = [mt, ml];
  return rP;
}

let confirm = [0, 0, 0, 0];
$('.someElm').bind('touchstart', function(e) {
  e.preventDefault();
  $(this).css('left', 0 + 'px');
  $(this).css('top', 0 + 'px');
});
$('.someElm').bind('touchmove', function(e) {
  e.preventDefault();
  var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
  var elm = $(this).offset();
  var x = touch.pageX - elm.left / 3;
  var y = touch.pageY - elm.top / 3;
  $(this).css('left', x + 'px');
  $(this).css('top', y + 'px');
  //    console.log(touch.pageY + ' ' + touch.pageX);
});

//  console.log($('.m1').data('item'));
//  console.log($('.t1').data('item'));
//  console.log($('.m1').data('item') == $('.t1').data('item'));
$('.someElm').bind('touchend', function(e) {
  e.preventDefault();

  let t1 = Math.abs($(this).offset().top - $('.t1').offset().top);
  let l1 = Math.abs($(this).offset().left - $('.t1').offset().left);
  if ((t1 < 50) & (l1 < 50)) {
    $(this).css('left', 0 + 'px');
    $(this).css('top', 0 + 'px');
    $('.t1').append($(this));
    if ($(this).data('item') == $('.t1').data('item')) {
      confirm[0] = 1;
      puConfirm();
    } else {
      confirm[0] = 0;
    }
  }
  let t2 = Math.abs($(this).offset().top - $('.t2').offset().top);
  let l2 = Math.abs($(this).offset().left - $('.t2').offset().left);
  if ((t2 < 50) & (l2 < 50)) {
    $(this).css('left', 0 + 'px');
    $(this).css('top', 0 + 'px');
    $('.t2').append($(this));
    if ($(this).data('item') == $('.t2').data('item')) {
      confirm[1] = 1;
      puConfirm();
    } else {
      confirm[1] = 0;
    }
  }
  let t3 = Math.abs($(this).offset().top - $('.t3').offset().top);
  let l3 = Math.abs($(this).offset().left - $('.t3').offset().left);
  if ((t3 < 50) & (l3 < 50)) {
    $(this).css('left', 0 + 'px');
    $(this).css('top', 0 + 'px');
    $('.t3').append($(this));
    if ($(this).data('item') == $('.t3').data('item')) {
      confirm[2] = 1;
      puConfirm();
    } else {
      confirm[2] = 0;
    }
  }
  let t4 = Math.abs($(this).offset().top - $('.t4').offset().top);
  let l4 = Math.abs($(this).offset().left - $('.t4').offset().left);
  if ((t4 < 50) & (l4 < 50)) {
    $(this).css('left', 0 + 'px');
    $(this).css('top', 0 + 'px');
    $('.t4').append($(this));
    if ($(this).data('item') == $('.t4').data('item')) {
      confirm[3] = 1;
      puConfirm();
    } else {
      confirm[3] = 0;
    }
  }
});

function puConfirm() {
  //確認位置是否正確
  if (confirm.indexOf(0) === -1) {
    // var win = document.getElementById('in_index');
    // win.style.display = 'block';
    $('#in_index').css('display', 'block');
  }
}
function jqOffset() {}
