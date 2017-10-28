//canvas width
var canvWidth = 8;

//make canvas
for(var i = 0; i < (canvWidth * canvWidth); i ++){
  //game tile elems to append
  var gameTile = '<div id="' + i + '" data-dir></div>';
  //append those thangs gur!
  $('.canvas').append(gameTile);

};

//snake state?
// var snake = {
//   head: 28,
//   tail: 36,
//   length: 1,
//   moves: 0,
//   grow: false
// }

//snake's initial representation — snake[0] is head, snake[snake.length - 1] is tail
var snake = [28, 36];

//flag that represents if the snake should grow
var grow = false;


//snake initialize
$('#' + snake[0]).addClass('snake');
$('#' + snake[snake.length - 1]).addClass('snake');

//------ moven'round functions ------//
function moveUp (){
  //if not growing remove tail, else remove tail
  if(!grow){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] - canvWidth);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else{
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] - canvWidth);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //change grow back to false
    grow = false
  }

  console.clear()
  console.log(snake)

}

function moveDown (){
  //if not growing remove tail, else remove tail
  if(!grow){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] + canvWidth);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else{
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] + canvWidth);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //change grow back to false
    grow = false
  }

  console.clear()
  console.log(snake)

}

function moveRight (){
  //if not growing remove tail, else remove tail
  if(!grow){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] + 1);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else{
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] + 1);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //change grow back to false
    grow = false
  }

  console.clear()
  console.log(snake)

} 

function moveLeft (){
  //if not growing remove tail, else remove tail
  if(!grow){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] - 1);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else{
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] - 1);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //change grow back to false
    grow = false
  }

  console.clear()
  console.log(snake)

}

function toggleGrow (){
  grow = true;
}


//------ good ole eevyintz (arrow keys)------//
$(document).keydown(function(e) {
  switch (e.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 39:
      moveRight();
      break;
    case 37:
      moveLeft();
      break;
    case 13:
      toggleGrow();
  }

});



