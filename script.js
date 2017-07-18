var canvasRows = 40;
var canvasTilesPerRow = 59;
var direction = 'right';
var tail = 0;

// function renderCanvas() {
//     //empty the current canvas div
//     $('.canvas').empty();

//     var tileWidth = 'width:' + 100/canvasTilesPerRow + '%; ';
//     var tileHeight = 'height:' + 100/canvasTilesPerRow + '%;';
//     var tileDimensions = tileWidth + tileHeight;

//     for (var i = 0; i < canvasRows * canvasTilesPerRow; i++) {
//         var snakeHeadClass = (i === 0) ? 'red' : '';

//         $('.canvas').append('<div class="canvas_tile ' + snakeHeadClass + '" id="' + i + '" style="' + tileDimensions + '"></div>');
//     }

// }

var $currentDiv = $("div.red");
//will alter $nextDiv based on move function it's in
var $nextDiv = $currentDiv.data().id; 
//current Direction snakeHead's a movin

function moveUp() {
  //remove current snakeHead div's red class
  $($currentDiv).removeClass('red');
  //add red class to next snakeHead div
  $('#' + ($nextDiv - canvasTilesPerRow)).addClass('red');
  
  //change snakeHead's moving direction
  direction = 'up';
}

function moveRight() {
    //remove current snakeHead div's red class
    $($currentDiv).removeClass('red');
    //add red class to next snakeHead div
    $('#' + ($nextDiv + 1)).addClass('red');

    //change snakeHead's moving direction
    direction = 'right';
}

function moveDown() {
  //remove current snakeHead div's red class
  $($currentDiv).removeClass('red');
  //add red class to next snakeHead div
  $('#' + ($nextDiv + canvasTilesPerRow)).addClass('red');
  
  //change snakeHead's moving direction
  direction = 'down';
}

function moveLeft() {
    //remove current snakeHead div's red class
    $($currentDiv).removeClass('red');
    //add red class to next snakeHead div
    $('#' + ($nextDiv - 1)).addClass('red');
    
    //change snakeHead's moving direction
    direction = 'left';
}


//new game
// renderCanvas()

// setInterval(function() {
//     if (direction === 'up') {
//         moveUp();
//     }

//     if (direction === 'right') {
//         moveRight();
//     }

//     if (direction === 'down') {
//         moveDown();
//     }

//     if (direction === 'left') {
//         moveLeft();
//     }
// }, 1000)

$(document).keydown(function(e) {
    switch (e.which) {
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

        default:
            return; // exit this handler for other keys
    }

    e.preventDefault(); // prevent the default action (scroll / move caret)
});

