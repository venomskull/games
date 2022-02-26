document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ];

    // cardArray.sort(function(){
    //     0.5 - Math.random();
    // });

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // Create board
    function createBoard() {
        for (let i = 0; i <= cardArray.length - 1; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // Check for Matching
    function checkMatch() {
        let cards = document.querySelectorAll('img');
        const firstChosenId = cardsChosenId[0];
        const secChosenId = cardsChosenId[1];
        // console.log(cards);

        if (firstChosenId === secChosenId) {
            cards[firstChosenId].setAttribute('src', 'images/blank.png');
            cards[secChosenId].setAttribute('src', 'images/blank.png');
            alert('Selected cards are same. Please try again');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('The selected cards are same');
            cards[firstChosenId].setAttribute('src', 'images/white.png');
            cards[secChosenId].setAttribute('src', 'images/white.png');
            cards[firstChosenId].removeEventListener('click', flipCard);
            cards[secChosenId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[firstChosenId].setAttribute('src', 'images/blank.png');
            cards[secChosenId].setAttribute('src', 'images/blank.png');
            alert('Sorry try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length;

        if (cardsWon.length === (cardArray.length) / 2) {
            result.textContent = 'You have successfully matched everything';
        }
    }

    // Flipcard
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        // console.log(cardsChosen, cardsChosenId);

        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }



    createBoard();
})