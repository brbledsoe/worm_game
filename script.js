var canvasRowLength = 40;
var canvasColLength = 59;
var snakeHeadX = 0; //snakeHead x coordinate
var snakeHeadY = 0; //snakeHead y coordinate
var direction = 'right';
//length of snake tail
var tail = 0;

function renderCanvas() {
    //empty the current canvas div
    $('.canvas').empty();

    //width of columns is length of array divided by 100% width
    var col_width = 100 / canvasColLength;

    //append rows
    for (var i = 0; i < canvasRowLength; i++) {
        var canvasRow = '<section class="canvas_row_' + i + '"></section>';
        $('.canvas').append(canvasRow);

        //append columns
        for (var j = 0; j < canvasColLength; j++) {
            //if on snakeHead x,y coordinates add snakeHeadClass
            var snakeHeadClass = (i === snakeHeadY && j === snakeHeadX) ? 'red' : '';

            var canvasCol = '<div class="canvas_col canvas_col_' + j + '" style="width:' + col_width + '%;">' +
                '<div class="canvas_col_tile ' + snakeHeadClass +'"></div>' +
                '</div>'

            $('.canvas_row_' + i).append(canvasCol);

        }
    }
}

function moveUp() {
    //remove class red from currentSnake head
    $(".red").removeClass('red');

    //don't let snake go out of bounds
    //ie change snakeHead x coord so long as we don't go lower than 0 ( no - 1)
    snakeHeadY = Math.max(snakeHeadY - 1, 0);

    //new row
    var nextSnakeHeadRow = '.canvas_row_' + snakeHeadY;
    //new col
    var nextSnakeHeadCol = ' .canvas_col_' + snakeHeadX + ' .canvas_col_tile';

    //add class red to new Snake head
    $(nextSnakeHeadRow + nextSnakeHeadCol).addClass('red');

    //change direction of Snake movement
    direction = 'up';
}

function moveRight() {
    //remove class red from currentSnake head
    $(".red").removeClass('red');

    //change snakeHead y coord so long as it doesn't exceed the length of a canvas array
    snakeHeadX = Math.min(snakeHeadX + 1, canvasColLength - 1)

    //new row
    var nextSnakeHeadRow = '.canvas_row_' + snakeHeadY;
    //new col
    var nextSnakeHeadCol = ' .canvas_col_' + snakeHeadX + ' .canvas_col_tile';
    $(nextSnakeHeadRow + nextSnakeHeadCol).addClass('red');

    direction = 'right';
}

function moveDown() {
    //remove class red from currentSnake head
    $(".red").removeClass('red');

    //change snakeHead x coord so long as it doesn't exceed the length of canvas
    snakeHeadY = Math.min(snakeHeadY + 1, canvasRowLength - 1)

    //new row
    var nextSnakeHeadRow = '.canvas_row_' + snakeHeadY
    //new col
    var nextSnakeHeadCol = ' .canvas_col_' + snakeHeadX + ' .canvas_col_tile';
    //add the class
    $(nextSnakeHeadRow + nextSnakeHeadCol).addClass('red');

    direction = 'down';
}

function moveLeft() {
    //remove class red from currentSnake head
    $(".red").removeClass('red');

    //change snakeHead x coord so long as we don't go lower than 0 ( no -1 )
    snakeHeadX = Math.max(snakeHeadX - 1, 0)

    //new row
    var nextSnakeHeadRow = '.canvas_row_' + snakeHeadY;
    //new col
    var nextSnakeHeadCol = ' .canvas_col_' + snakeHeadX + ' .canvas_col_tile';
    $(nextSnakeHeadRow + nextSnakeHeadCol).addClass('red');

    direction = 'left';
}

setInterval(function() {
    if (direction === 'up') {
        moveUp();
    }

    if (direction === 'right') {
        moveRight();
    }

    if (direction === 'down') {
        moveDown();
    }

    if (direction === 'left') {
        moveLeft();
    }
}, 1000)

//new game
renderCanvas()

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