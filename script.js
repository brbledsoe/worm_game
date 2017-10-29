//canvas width
var canvWidth = 8;

//make canvas
for(var i = 1; i < (canvWidth * canvWidth + 1); i ++){
  //game tile elems to append
  var gameTile = '<div id="' + i + '" data-dir>'+i+'</div>';
  //append those thangs gur!
  $('.canvas').append(gameTile);

};


//snake's initial representation — snake[0] is head, snake[snake.length - 1] is tail
var snake = [28, 36];

//flag that represents if the snake should grow
var grow = false;


//snake initialize
$('#' + snake[0]).addClass('snake');
$('#' + snake[snake.length - 1]).addClass('snake');

//------ moven'round functions ------//
function moveUp (){
  //do not allow snake to go out of bounds
  //(later versions might end game if this happens)
  if((snake[0] - canvWidth) < 0){
    console.log('out of bounds');
    return;
  }

  //if not growing remove tail, else remove tail
  if(!grow && (snake[1] != snake[0] - canvWidth)){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] - canvWidth);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else if(snake[1] != snake[0] - canvWidth){
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
  //do not allow snake to go out of bounds
  //(later versions might end game if this happens)
  if((snake[0] + canvWidth) > (canvWidth * canvWidth)){
    console.log('out of bounds');
    return;
  }

  //if not growing remove tail, else remove tail
  if(!grow && (snake[1] != snake[0] + canvWidth)){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] + canvWidth);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else if(snake[1] != snake[0] + canvWidth){
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
  //do not allow snake to go out of bounds
  //(later versions might end game if this happens)
  if(snake[0]%8 == 0){
    console.log('out of bounds');
    return;
  }

  //if not growing remove tail, else remove tail
  if(!grow && (snake[1] != snake[0] + 1)){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] + 1);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else if(snake[1] != snake[0] + 1){
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
  //do not allow snake to go out of bounds
  //(later versions might end game if this happens)
  if((snake[0]-1)%8 == 0){
    console.log('out of bounds');
    return;
  }

  //if not growing remove tail, else remove tail
  if(!grow && (snake[1] != snake[0] - 1)){
    //add new snake head to beginning of snake array
    snake.unshift(snake[0] - 1);
    //update snake head on DOM
    $('#' + snake[0]).addClass('snake');
    //remove snake tail on DOM
    $('#' + snake[snake.length - 1]).removeClass('snake');
    //remove snake tail on array
    snake.pop();
  }else if(snake[1] != snake[0] - 1){
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



