var colors  = ['url(images/leaf.png)', 'url(images/bomb2.png)', 'url(images/leaf2.png)', 'url(images/leaf3.png)'];
var color   = colors[0];
var timer   = 1300;
var score   = 0;
var combo   = 0;
var bomb    = 0;
var i       = 0;
var $square;


$(function() {
  var $click = $('#click');
  $('#basket').css('display', 'none');

  setInterval (function() {

    if (score >= 10) {
      timer = 1100;
      color = colors[chooseSquare(0,3)];
      $('h3').html('Level 2!');
    }
    if (score >= 20) {
      timer = 800;
      color = colors[chooseSquare(0,3)];
      $('h3').html('Level 3!');
    }
    if (score >= 30) {
      timer = 700;
      color = colors[chooseSquare(0,3)];
      $('h3').html('Level 4!');
    }

    if (combo >= 5) {
      color = colors[chooseSquare(0,4)];
      $('h3').html('Woah High Combo!');
    }

    if (bomb > 3) {
      $('#score').html('0');
      $('#combo').html('Combo 0');
      $('h3').html('Too Bad, Game Over!');
      //$('#over').get(0).play();
      return;
    }

    $square = $('<div/>', {
      'id': 'square',
       css: {'background-image': color}
    });

    $('#play-row').mousemove(function(e){
      $("#basket").css('display', 'block');
      $("#basket").css({left:e.pageX-60, top:e.pageY-20});
    });

    $('#column' + chooseSquare(1,4)).append($square);
    $square.animate(
      {top: '+=492px'},
      {duration: timer,
         easing: 'linear',
       complete: function() {
        $(this).remove();
      }
    });

    $square.on('mouseover', function() {

      var cursor = document.querySelectorAll(':hover');
      console.log(cursor);

      if ($square.parent().offset().top + $square.parent()[0].offsetHeight - $square.offset().top < 600 && color !== colors[1]) {

        combo++;
        score += 2;
        $('#score').html(score);
        $('#combo').html('Combo ' + combo);
        $('#click').get(0).play();
        $(this).remove();

      } else if (($square.parent().offset().top + $square.parent()[0].offsetHeight) - $square.offset().top < 600 && color === colors[1])  {

        $square.css('background-image', 'url(images/bang2.png)');
        bomb++;
        combo = 0;
        $('#combo').html('Combo ' + combo);
        $('#bomb').get(0).play();

      }
    });
  }, timer-500);

  // $('.column').on('click', function(e) {
  //   if(e.target == e.currentTarget){
  //     score--;
  //     $('#score').html(score);
  //     // lives = lives[0];
  //     // console.log(lives);
  //     combo = 0;
  //     $('#combo').html('Combo = ' + combo);
  //   }
  // })

  $('button').on('click', function(){
    location.reload();
  });

});

function chooseSquare(a, b) {
  min = Math.ceil(a);
  max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
}
