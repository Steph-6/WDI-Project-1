var colors  = ['url(images/leaf.png)', 'url(images/bomb.jpg)', 'url(images/apple.jpeg)'];
var color   = colors[0];
var timer   = 1200;
var score   = 0;
var combo   = 0;
var i       = 0;
var $square;


$(function() {
  var $click = $('#click');
  setInterval (function() {

    if (20 > score >= 10) {
      timer = 900;
      color = colors[chooseSquare(0,1)];
    }
    if (score >= 20) {
      timer = 700;
      color = colors[chooseSquare(0,2)];
    }
    if (score < 0) {
      $('h3').html('Game Over!');
      $('#score').html('ZEROO');
      return;
    }

    $square = $('<div/>', {
      'id': 'square',
       css: {'background-image': color}
    });

    $('#column' + chooseSquare(1,4)).append($square);
    $square.animate(
      {top: '+=492px'},
      {duration: timer,
         //easing: 'easeInOut',
         easing: 'linear',
       complete: function() {
        $(this).remove();
      }
    });

    $square.on('click', function() {
      if (60 < ($square.parent().offset().top + $square.parent()[0].offsetHeight - $square.offset().top) < 420 && color !== colors[1]) {
        score += 2;
        $('#score').html(score);
        $square.css('background-image', 'url(images/bang.jpg)');
        combo++;
        $('#combo').html('Combo = ' + combo);
        console.log(combo);
        $('#click').get(0).play();
      }
    });
  }, timer-300);

  $('.column').on('click', function(e) {
    if(e.target == e.currentTarget){
      score--;
      $('#score').html(score);
      // lives = lives[0];
      // console.log(lives);
      combo = 0;
      $('#combo').html('Combo = ' + combo);
    }
  })

  $('button').on('click', function(){
    location.reload();
  });

});

function chooseSquare(a, b) {
  min = Math.ceil(a);
  max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
}
