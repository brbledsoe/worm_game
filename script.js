//make canvas
for(var i = 0; i < 64; i ++){
  //game tile elems to append
  var gameTile = '<div id="' + i + '" data-dir></div>';
  //append those thangs gur!
  $('.canvas').append(gameTile);

};

//snake state?
var snake = {
  head: 28,
  tail: 36,
  length: 1,
  moves: 0,
  grow: false
}

//snake initialize
$('#' + snake.head).addClass('snake');
$('#' + snake.tail).addClass('snake');

//------ moven functions ------//
function moveUp (){
  //add next direction to current div
  $('#' + snake.head).data().dir = 'up'; 
  //update snake head
  snake.head -= 8;
  //add snake head to next div 
  $('#' + snake.head).addClass('snake')
  //remove tail class 
  $('#' + snake.tail).attr('class','');
  //update snake tail
  snake.tail -= 8;
  //add snake tail to next div
  $('#' + snake.tail).addClass('snake');
  //if snake length greater than 0 don't delete tail for one round
  // if(snake.length){
    
  // }
  //if snake.grow is true don't delete tail, otherwise delete the tail
  if(snake.grow){
    
  }else{
    
  }
  


}

function moveDown (){
  //get current position of head
  //add class '.up' to head div
  //add '.head' to next div
  //add tail class to next div
  //remove current tail class

}

function moveRight (){
  //get current position of head
  //add class '.up' to head div
  //add '.head' to next div
  //add tail class to next div
  //remove current tail class

}

function moveLeft (){
  //get current position of head
  //add class '.up' to head div
  //add '.head' to next div
  //add tail class to next div
  //remove current tail class

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
      moveLeft()
  }

});



