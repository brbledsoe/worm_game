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
   //size of columns 
   var col_width = 100/canvas[0].length;

   console.log('------- oh hey its a col width -------')
   console.log(col_width)
   console.log('--------------------------------------')

   //append rows
   for(var i = 0; i < canvas.length; i++){
     $('.canvas').append('<section class="canvas_row_'+ i +'"></section>');

     //append columns
     for(var j = 0; j < canvas[i].length; j++){

      //if [i][j] on wormHead x y add a div with red background else reg div
       if(i === wormHead[0] && j === wormHead[1]){
         $('.canvas_row_' + i).append(
            '<div class="canvas_col" style="width:' + col_width + '%;">'+ 
               '<div class="canvas_col_tile red"></div>' +
            '</div>'
          )
       }else{
         $('.canvas_row_' + i).append(
            '<div class="canvas_col" style="width:' + col_width + '%;">'+ 
               '<div class="canvas_col_tile"></div>' +
            '</div>'
          )
       }
     }
   }
 }

 function moveUp(){
  //change wormHead x coord so long as we don't go lower than 0 ( no - 1)
   wormHead.splice(0, 1, Math.max(wormHead[0] - 1, 0));
   renderCanvas()
 }

 function moveRight(){
  //change wormHead y coord so long as it doesn't exceed the length of a canvas array
  wormHead.splice(1, 1, Math.min(wormHead[1] + 1, canvas[0].length - 1));
  renderCanvas() 
 }

 function moveDown(){
  //change wormHead x coord so long as it doesn't exceed the length of canvas
   wormHead.splice(0, 1, Math.min(wormHead[0] + 1, canvas.length - 1));
   renderCanvas()
 }

 function moveLeft(){
  //change wormHead x coord so long as we don't go lower than 0 ( no -1 )
   wormHead.splice(1, 1, Math.max(wormHead[1] - 1, 0));
   renderCanvas()
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


