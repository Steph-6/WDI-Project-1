var playing = true;
var colors  = ['blue', 'green', 'purple'];
var lives   = ['*****', '****', '***', '**', '*', '']
var score   = 0;

$(function() {
  color = colors[0];

  // if (30 > score >= 20) {
  //   counter = 20;
  //   color = colors[chooseSquare(0,1)];
  // }
  // if (score >= 30) {
  //   counter = 20;
  //   color = colors[chooseSquare(0,2)];
  // }

  highlight(color);
  move(color);

  var playRow = document.getElementsByClassName('play-row');
  for (var i = 0; i < playRow.length; i++) {
    playRow[i].addEventListener('click', function() {
      this.style.backgroundColor = 'yellow';
      //audio
    });
  }

  var bottomGrid = document.getElementsByClassName('row6');
  console.log(bottomGrid);
  for (var i = 0; i < bottomGrid.length; i++) {
    if (bottomGrid[i].style.backgroundColor !== 'yellow') {
      alert('You lose');
      //move the array up
      //document.getElementById('lives').innerHTML = lives--;
      //audio
      //clearInterval(highlight(color));
    } else {
      score++;
      document.getElementById('score').innerHTML = score;
    }
  }
});

function highlight(color) {
  var lis = document.getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = 'yellow';
  }
  document.getElementById('grid1.' + chooseSquare(1,4)).style.backgroundColor = color;
}

function chooseSquare(a, b) {
  min = Math.ceil(a);
  max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
}

function move(color){
  setInterval(function() { highlight(color) }, 500);
  for (var i = 1; i < 7; i++) {
    var rows = document.getElementsByClassName('row' + i);
    console.log(rows);
    //for (var j = 0; j < rows.length; j++) {
      //rows[j++].style.backgroundColor = rows[j].style.backgroundColor;
    //}
  }
}

// if (score > 20) {
//   counter = 20;
//   var colors = ['blue', 'green', 'purple'];
//   color = colors[chooseSquare(0,3)];
// }
