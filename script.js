//------ INITIAL VARS & FUNCS ------//
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

//speed of snake's auto movement
var snakeSpeed = 1000;

//the direction snake is headed
var snakeDirection = 'up';

//snake initialize (head on top, tail below)
$('#' + snake[0]).addClass('snake');
$('#' + snake[snake.length - 1]).addClass('snake');

//apple initialize
$('#15').addClass('apple');

//------ MOVEN'ROUND FUNCTIONS ------//
function moveUp (){
  var nextTile = $('#' + (snake[0] - canvWidth));
  

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

  //if next movement is an apple
  //idea is if change toggleGrow changes to true this ground, on the next round grow snake
  if($('#' + snake[0]).hasClass('apple')){
    console.log('yo')
    $('.apple').removeClass('apple');
    throwApple();
    toggleGrow();
  }
  
  snakeDirection = 'up';

  // console.clear()
  // console.log(snake)

}

function moveDown (){
  var nextTile = $('#' + (snake[0] + canvWidth));
  //if next movement is an apple
  if(nextTile.hasClass('apple')){
    toggleGrow();
  }
  //go to next move
  //delete apple 
  //then grow snake

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

  //if next movement is an apple
  //idea is if change toggleGrow changes to true this ground, on the next round grow snake
  if($('#' + snake[0]).hasClass('apple')){
    console.log('yo')
    $('.apple').removeClass('apple');
    throwApple();
    toggleGrow();
  }

  snakeDirection = 'down';

  // console.clear()
  // console.log(snake)

}

function moveRight (){
  var nextTile = $('#' + (snake[0] + 1));

  //if current movement is an apple
  // if($('#' + snake[0]).hasClass('apple')){
  //   console.log('growing');
  //   $('#' + snake[0]).removeClass('apple');
  //   toggleGrow();
  // }


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
    grow = false;
  }

  //if next movement is an apple
  //idea is if change toggleGrow changes to true this ground, on the next round grow snake
  if($('#' + snake[0]).hasClass('apple')){
    console.log('yo')
    $('.apple').removeClass('apple');
    throwApple();
    toggleGrow();
  }

  snakeDirection = 'right';

  // console.clear()
  // console.log(snake)

} 

function moveLeft (){
  var nextTile = $('#' + (snake[0] - canvWidth));

  //if next movement is an apple
  if(nextTile.hasClass('apple')){
    toggleGrow();
  }

  //go to next move
  //delete apple 
  //then grow snake

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

  //if next movement is an apple
  //idea is if change toggleGrow changes to true this ground, on the next round grow snake
  if($('#' + snake[0]).hasClass('apple')){
    console.log('yo')
    $('.apple').removeClass('apple');
    throwApple();
    toggleGrow();
  }

  snakeDirection = 'left';

  // console.clear()
  // console.log(snake)

}

function autoMove (){
  switch (snakeDirection) {
    case 'up':
      //do not allow snake to go out of bounds
      //(later versions might end game if this happens)
      if((snake[0] - canvWidth) < 0){
        moveRight();
        snakeDirection = 'right';
        break;
      }else{
        moveUp(); 
        break;
      }
    case 'down':
      //do not allow snake to go out of bounds
      //(later versions might end game if this happens)
      if((snake[0] + canvWidth) > (canvWidth * canvWidth)){
        moveLeft();
        snakeDirection = 'left';
        break;
      }else{
        moveDown();
        break;
      }
    case 'right':
      //do not allow snake to go out of bounds
      //(later versions might end game if this happens)
      if(snake[0]%8 == 0){
        moveDown();
        snakeDirection = 'down';
        break;
      }else{
        moveRight();
        break;
      }
    case 'left':
      //do not allow snake to go out of bounds
      //(later versions might end game if this happens)
      if((snake[0]-1)%8 == 0){
        moveUp();
        snakeDirection = 'up';
      }else{
        moveLeft();
      }
  }
}

//------ GOOD OLE MOVEN EEVYINTZ (ARROW KEYS)------//
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

//------ AAAAUTO MOVEMENT ------//
setInterval(autoMove,snakeSpeed);

//------ APPLE APPEARANCE AND SNAKE-GROWTH FUNCTIONS ------//
function throwApple (){
 var apple = snake[0];

 while(snake.includes(apple)){
    apple = Math.floor(Math.random() * (canvWidth * canvWidth)) + 1;
  }

  $('#' + apple).addClass('apple');

}

function toggleGrow (){
  grow = true;
}








