
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.grid div');
    const start = document.querySelector('start')
    const scoreDisplay = document.querySelectorAll('.score')

    let width = 0;
    let currentIndex = 0; // first div in the grid
    let appleIndex = 0; // first div in the grid
    let currentSnake = [2,1,0]; // 2 is the head, 0 is the tail and 1 is the body
    let direction = 1;
    let speed = 0.9;
    let score = 0;
    let intervalTime = 0;
    let interval = 0;

    function control(e) {
        if(e.keycode === 39) { // right
            direction = 1;
        } else if(e.keycode ===37) { // left
            direction = -1;
        } else if (e.keycode === 40) { // top
            direction = width;
        } else if (e.keycode === 38) { //down
            direction = width;
        }
    } 

    document.addEventListener('keyup', control);

})