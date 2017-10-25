//make canvas
for(var i = 0; i < 64; i ++){
  //game tile elems to append
  var gameTile = '<div id="' + i + '" data-dir"></div>';
  //append those thangs gur!
  $('.canvas').append(gameTile)
};

//snake initialize
$('#28').addClass('snake');

//snake state?
var snake = {
  head: 28,
  tail: 28,
  length: 0, 
}

//------ moven functions ------//
function moveUp (){
  console.log('up')
  //get current position of head
  var currSnaPos = $('#' + snake.head);
  //get next position of head
  var nextSnaPos = $('#' + (snake.head - 8));
  //add next direction class to current div
  console.log(currSnaPos.data())
  // currSnaPos.data().dir = 'up'; 
  //add '.snake' to next div
  nextSnaPos.addClass('snake');
  //remove tail class 
  $('.tail').className = "";
}

function moveDown (){
  console.log('down')
  //get current position of head
  //add class '.up' to head div
  //add '.head' to next div
  //add tail class to next div
  //remove current tail class

}

function moveRight (){
  console.log('right')
  //get current position of head
  //add class '.up' to head div
  //add '.head' to next div
  //add tail class to next div
  //remove current tail class

}

function moveLeft (){
  console.log('left')
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



