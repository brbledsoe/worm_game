function worm_game () {

 var canvas = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
 ];

 //x y coordinate of worm head
 var wormHead = [0, 0];

 function renderCanvas () {

   //empty the current canvas div
   $('.canvas').empty();

   //append rows
   for(var i = 0; i < canvas.length; i++){
     $('.canvas').append('<section class="row canvas_row_'+ i +'"></section>');

     //append columns within rows
     for(var j = 0; j < canvas[i].length; j++){
       if(i === wormHead[0] && j === wormHead[1]){
         $('.canvas_row_' + i).append('<div class="canvas_col red"></div>')
       }else{
         $('.canvas_row_' + i).append('<div class="canvas_col"></div>')
       }
     }
   }
 }

 function moveUp(){
   wormHead.splice(0, 1, (wormHead[0] - 1));
   renderCanvas()
   console.log(canvas)  
 }

 function moveRight(){
   wormHead.splice(1, 1, (wormHead[1] + 1));
   renderCanvas()  
   console.log(canvas)
 }

 function moveDown(){
   wormHead.splice(0, 1, (wormHead[0] + 1));
   renderCanvas()
   console.log(canvas)  
 }

 function moveLeft(){
   wormHead.splice(1, 1, (wormHead[1] - 1));
   renderCanvas()
   console.log(canvas)  
 }

 return {
  renderCanvas: renderCanvas,
  moveUp: moveUp,
  moveRight: moveRight,
  moveDown: moveDown,
  moveLeft: moveLeft
 }
}

//new game
var app = worm_game();
app.renderCanvas()

$(document).keydown(function(e) {
  switch(e.which) {
   case 37: // left
   app.moveLeft();
   break;

   case 38: // up
   app.moveUp();
   break;

   case 39: // right
   app.moveRight();
   break;

   case 40: // down
   app.moveDown();
   break;

   default: return; // exit this handler for other keys
  }

  e.preventDefault(); // prevent the default action (scroll / move caret)
});

alert('hey')

