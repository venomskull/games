
const squares = document.querySelectorAll('.square');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');

let clickedRandomId = null;
let scorePoints = 0;
let timer = 60;
let countDownTimer = 0;
let randomExecuteTime = 0;

// Randomly adding .image to .square
function addRandomMoles() {
    // Clear .image from .square
    squares.forEach(function (square) {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    clickedRandomId = randomSquare.id;
}

function createRandomMoles() {
    randomExecuteTime = setInterval(addRandomMoles, 1000);
}

squares.forEach(function(square) {
    square.addEventListener('mousedown', function() {
        if(square.id === clickedRandomId) {
            scorePoints++;
            clickedRandomId = null;
            score.textContent = scorePoints;
            score.style.color = 'green';
        } else {
            score.textContent = 'Missed the click';
            score.style.color = 'red';
        }
    });
});

function countDownTime() {
    timer--;
    timeLeft.textContent = timer + ' ' + countDownTimer + ' ' + randomExecuteTime;
    if (timer === 0) {
        alert('GAME OVER');
        clearInterval(randomExecuteTime);
        clearInterval(countDownTimer);
    }
}

createRandomMoles();
// randomExecuteTime = setInterval(addRandomMoles, 1000);
countDownTimer = setInterval(countDownTime, 1000);
