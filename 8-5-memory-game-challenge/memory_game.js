// I utilized a tutorial from: <https://www.youtube.com/watch?v=tjyDOHzKN0w>

document.addEventListener('DOMContentLoaded', function(e) {

// card options
    const cardArray = [
        {
            name: 'pink',
            img: 'imgs/pinkgem.png'
        },
        {
            name: 'pink',
            img: 'imgs/pinkgem.png'
        },

        {
            name: 'yellow',
            img: 'imgs/yellowgem.png'
        },
        {
            name: 'yellow',
            img: 'imgs/yellowgem.png'
        },

        {
            name: 'purple',
            img: 'imgs/purplegem.png'
        },
        {
            name: 'purple',
            img: 'imgs/purplegem.png'
        },

        {
            name: 'magenta',
            img: 'imgs/magentagem.png'
        },
        {
            name: 'magenta',
            img: 'imgs/magentagem.png'
        },

        {
            name: 'green',
            img: 'imgs/greengem.png'
        },
        {
            name: 'green',
            img: 'imgs/greengem.png'
        },

        {
            name: 'blue',
            img: 'imgs/bluegem.png'
        },
        {
            name: 'blue',
            img: 'imgs/bluegem.png'
        }
    ]

// create your game board
    const grid = document.querySelector('.grid');
    let result = document.querySelector("#score");
    
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    result.innerText = 0;

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'imgs/crown.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard);
            grid.appendChild(card); 
        }
    }
    createBoard()


// shuffle cards
    function shuffle(cardArray) {
        let counter = cardArray.length;
  
        // While there are elements in the array
        while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
  
        // Decrease counter by 1
        counter--;
  
        // And swap the last element with it
        let temp = cardArray[counter];
        cardArray[counter] = cardArray[index];
        cardArray[index] = temp;
    }
  
    return cardArray;
  }
  
  let shuffledColors = shuffle(cardArray);


// check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        // console.log(cardsChosen)
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'imgs/crown.png');
            cards[optionTwoId].setAttribute('src', 'imgs/crown.png');
            alert('Try again!')
        }
        cardsChosen = [];
        cardsChosenId = [];
        result.innerText = cardsWon.length;
    } 
    
// flip a card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
})