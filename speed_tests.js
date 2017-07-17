function speedTest () {    
    console.log('__________TESTING THE MOVE FUNCTIONS__________')

    setTimeout(
        function(){ 
            console.time('moveRight');
            moveRight();
            console.timeEnd('moveRight');
        }, 
        2000);

    setTimeout(
        function(){ 
            console.time('moveDown');
            moveDown();
            console.timeEnd('moveDown');
        }, 
        2000);

    setTimeout(
        function(){ 
            console.time('moveLeft');
            moveLeft();
            console.timeEnd('moveLeft');
        }, 
        2000);

    setTimeout(
        function(){ 
            console.time('moveUp');
            moveUp();
            console.timeEnd('moveUp');
        }, 
        2000);
}
