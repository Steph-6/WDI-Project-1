var colors  = ['url(images/leaf.png)', 'url(images/bomb2.png)', 'url(images/leaf2.png)', 'url(images/leaf3.png)'];
var color   = colors[0];
var timer   = 1000;
var score   = 0;
var combo   = 0;
var bomb    = 0;
var $square;


$(function() {
  $('#basket').css('display', 'none');
  setInterval (function() {

    if (score >= 10) {
      timer = 900;
      color = colors[chooseSquare(0,3)];
      $('h3').html('Level 2!');
    }
    if (score >= 20) {
      timer = 850;
      color = colors[chooseSquare(0,3)];
      $('h3').html('Level 3!');
    }
    if (score >= 30) {
      timer = 800;
      color = colors[chooseSquare(0,3)];
      $('h3').html('Level 4!');
    }

    if (combo >= 5) {
      color = colors[chooseSquare(0,4)];
      $('h3').html('Woah High Combo!');
    }

    if (bomb >= 5) {
      $('#score').html('0');
      $('#combo').html('Combo 0');
      $('h3').html('Too Bad, Game Over!');
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

    $square.on('mouseover', function(e) {
        var coodY = e.pageY;

        if (coodY < 775 && coodY > 550 && color !== colors[1]) {
          combo++;
          score += 2;
          $('#score').html(score);
          $('#combo').html('Combo ' + combo);
          $('#click').get(0).play();
          $(this).remove();

        } else if (coodY < 775 && coodY > 550 && color === colors[1]) {
          $square.css('background-image', 'url(images/bang2.png)');
          bomb++;
          score--;
          combo = 0;
          $('#combo').html('Combo ' + combo);
          $('#bomb').get(0).play();
        }
      });
  }, timer);

  $('button').on('click', function(){
    location.reload();
  });

});

function chooseSquare(a, b) {
  min = Math.ceil(a);
  max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
}
