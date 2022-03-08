const NUM_BUSHES = 50;
const NUM_BALLS = 5;

const player = document.querySelector('.player');
const player_pos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}
let player_vel = {
    x: 0,
    y: 0
}

const balls = [];
const sound = new Audio('./assets/coin.mp3');

function createBushes() {
    for (let i = 0; i < NUM_BUSHES; i++) {
        const div = document.createElement('div');
        div.classList.add('bush');
        div.style.top = Math.random() * 100 + '%';
        div.style.left = Math.random() * 100 + '%';
        document.body.appendChild(div);
    }
}

function generateNewBall() {
    let x = 0;
    let y = 0;

    const div = document.createElement('div');
    div.classList.add('pokeball');
    x = Math.random() * 100 + '%';
    y = Math.random() * 100 + '%';

    div.style.left = x;
    div.style.top = y;
    balls.push({
        ball: div,
        pos: {
            x: x,
            y: y
        }
    });

    document.body.appendChild(div);
}

function createBalls() {
    for (let i = 0; i < NUM_BALLS; i++) {
        generateNewBall();
    }
}

function isCollided(ball, player) {
    var object_1 = ball.getBoundingClientRect();
    var object_2 = player.getBoundingClientRect();

    if (object_1.left < object_2.left + object_2.width && object_1.left + object_1.width > object_2.left &&
        object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
        return true;
        // console.log('collided');
    }
    // else {
    //     console.log('not collided');
    // }
}

function checkCollision() {
    balls.forEach(ball => {
        if (isCollided(ball.ball, player)) {
            sound.play();
            ball.ball.remove();
            generateNewBall();
        };

    });
}

function run() {
    player_pos.x += player_vel.x;
    player_pos.y += player_vel.y;

    player.style.left = player_pos.x + 'px';
    player.style.bottom = player_pos.y + 'px';

    // console.log('run');
    requestAnimationFrame(run);
    checkCollision();
    // if(isCollided()) console.log('collided')
}

function init() {
    createBushes();
    createBalls();
    run();
}

init();

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
        player_vel.y = 3;
        player.style.backgroundImage = 'url(./assets/player_front.png)';
    } else if (e.key === 'ArrowDown') {
        player_vel.y = -3;
        player.style.backgroundImage = 'url(./assets/player_back.png)';
    } else if (e.key === 'ArrowRight') {
        player_vel.x = 3;
        player.style.backgroundImage = 'url(./assets/player_right.png)';
    } else if (e.key === 'ArrowLeft') {
        player_vel.x = -3;
        player.style.backgroundImage = 'url(./assets/player_left.png)';
    }
    player.classList.add('active');
});

document.addEventListener('keyup', function () {
    player_vel.x = 0;
    player_vel.y = 0;
    player.classList.remove('active');
});
