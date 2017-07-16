var canvasRows = 40;
var canvasTilesPerRow = 59;
var snakeHeadX = 0; //snakeHead x coordinate
var snakeHeadY = 0; //snakeHead y coordinate
var direction = 'right';
var tail = 0;

function renderCanvas() {
    //empty the current canvas div
    $('.canvas').empty();

    var tileWidth = 'width:' + 100/canvasTilesPerRow + '%; ';
    var tileHeight = 'height:' + 100/canvasTilesPerRow + '%;';
    var tileDimensions = tileWidth + tileHeight;

    for (var i = 0; i < canvasRows * canvasTilesPerRow; i++) {
        var snakeHeadClass = (i === 0) ? 'red' : '';

        $('.canvas').append('<div class="canvas_tile ' + snakeHeadClass + '" id="' + i + '" style="' + tileDimensions + '"></div>');
    }
}

function moveUp() {
  //get current snakeHead div's id
  var $currentDiv = $("div.red")["0"].id;
  //create next snakeHead div's id
  var $nextDiv = "#" + (parseInt($currentDiv) - canvasTilesPerRow);

  //remove current snakeHead div's red class
  $('#' + $currentDiv).removeClass('red');
  //add red class to next snakeHead div
  $($nextDiv).addClass('red');
  
  //change snakeHead's moving direction
  direction = 'up';
}

function moveRight() {
    //get current snakeHead div's id
    var $currentDiv = $("div.red")["0"].id;
    //create next snakeHead div's id
    var $nextDiv = "#" + (parseInt($currentDiv) + 1);

    //remove current snakeHead div's red class
    $('#' + $currentDiv).removeClass('red');
    //add red class to next snakeHead div
    $($nextDiv).addClass('red');

    //change snakeHead's moving direction
    direction = 'right';
}

function moveDown() {
  //get current snakeHead div's id
  var $currentDiv = $("div.red")["0"].id;
  //create next snakeHead div's id
  var $nextDiv = "#" + (parseInt($currentDiv) + canvasTilesPerRow);

  //remove current snakeHead div's red class
  $('#' + $currentDiv).removeClass('red');
  //add red class to next snakeHead div
  $($nextDiv).addClass('red');
  
  //change snakeHead's moving direction
  direction = 'down';
}

function moveLeft() {
    //get current snakeHead div's id
    var $currentDiv = $("div.red")["0"].id;
    //create next snakeHead div's id
    var $nextDiv = "#" + (parseInt($currentDiv) - 1);

    //remove current snakeHead div's red class
    $('#' + $currentDiv).removeClass('red');
    //add red class to next snakeHead div
    $($nextDiv).addClass('red');
    
    //change snakeHead's moving direction
    direction = 'left';
}

//new game
renderCanvas()

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


