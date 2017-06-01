var canvas = [
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]
];

//first item row — second column
var wormPoint = [0, 0];

function renderCanvas () {

  //empty the current canvas div
  $('.canvas').empty();

  for(var i = 0; i < canvas.length; i++){
    $('.canvas').append('<section class="canvas_row_'+ i +'"></section>');
    for(var j = 0; j < canvas[i].length; j++){
      if(i === wormPoint[0] && j === wormPoint[1]){
        $('.canvas_row_' + i).append('<div class="canvas_col red"></div>')
      }else{
        $('.canvas_row_' + i).append('<div class="canvas_col"></div>')
      }
    }
  }
}

//fruits.splice(2, 0, "Lemon", "Kiwi");
function moveUp(){
  wormPoint.splice(0, 1, (wormPoint[0] - 1));
  renderCanvas()
  console.log(canvas)  
}

function moveRight(){
  wormPoint.splice(1, 1, (wormPoint[1] + 1));
  renderCanvas()  
  console.log(canvas)
}

function moveDown(){
  wormPoint.splice(0, 1, (wormPoint[0] + 1));
  renderCanvas()
  console.log(canvas)  
}

function moveLeft(){
  wormPoint.splice(1, 1, (wormPoint[1] - 1));
  renderCanvas()
  console.log(canvas)  
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveLeft();
        break;

        case 38: // up
        moveUp();
        break;

        case 39: // right
        moveRight();
        break;

        case 40: // down
        moveDown();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

renderCanvas();

