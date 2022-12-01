// I got inspiration from a tutorial: <https://www.youtube.com/watch?v=tjyDOHzKN0w>

    // card options
        const cardArray = [
            {
                name: 'red',
                color: '#870000'
            },
            {
                name: 'red',
                color: '#870000'
            },
    
            {
                name: 'yellow',
                color: '#d5bd00'
            },
            {
                name: 'yellow',
                color: '#d5bd00'
            },
    
            {
                name: 'purple',
                color: '#8f0081'
            },
            {
                name: 'purple',
                color: '#8f0081'
            },
    
            {
                name: 'magenta',
                color: '#ff00ff'
            },
            {
                name: 'magenta',
                color: '#ff00ff'
            },
    
            {
                name: 'green',
                color: '#008000'
            },
            {
                name: 'green',
                color: '#008000'
            },
    
            {
                name: 'blue',
                color: '#0000ff'
            },
            {
                name: 'blue',
                color: '#0000ff'
            }
        ];
    
    // selectors
        const grid = document.querySelector('.grid');
        let result = document.querySelector("#score");
        let reset = document.querySelector('button');
        let cardsChosen = [];
        let cardsChosenId = [];
        let cardsWon = [];
    
    // initialize score
        result.innerText = 0;
    
    // create game board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement('div');
                card.setAttribute('data-hex', cardArray[i].color);
                card.setAttribute('data-id', [i]);
                card.classList.add('cardBack');
                card.classList.add('cards');
                grid.appendChild(card); 
            };
        };

        createBoard();
    
    
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

        function selectCards (e) {
            // if logic prevents error from printing when grid is clicked instead of a square
            if (e.target !== grid) {
                let data = e.target.getAttribute('data-id');
                // let data = e.target.getAttribute('data-id');
                // We need an array to grab [0] and [1] of each selected card
                // we cant selct the first and second chosen items form an object
                // order matters so we need the array
                cardsChosen.push(cardArray[data].name);
                cardsChosenId.push(data);
                e.target.style.backgroundColor = cardArray[data].color;        
            // console.log(cardsChosen)
                if (cardsChosen.length === 2) {
                    setTimeout(checkForMatch, 500);
                }
            }
        };

        // check for match
        function checkForMatch() {
            let cards = document.querySelectorAll('.cardBack');
            let optionOne = cardsChosenId[0];
            let optionTwo = cardsChosenId[1];
            if (cardsChosen[0] === cardsChosen[1]) {
                cardsWon.push(optionOne, optionTwo);
                cards[optionOne].style.border = '2px solid #23ff17';
                cards[optionTwo].style.border = '2px solid #23ff17';
                // console.log()
            } else {
                cards[optionOne].style.backgroundColor = '#a0989c';
                cards[optionTwo].style.backgroundColor = '#a0989c';
                setTimeout (function() {
                    cards[optionOne].style.border = '2px solid #fff';
                    cards[optionTwo].style.border = '2px solid #fff';
                }, 500);
                cards[optionOne].style.border = '2px solid #ff0000';
                cards[optionTwo].style.border = '2px solid #ff0000';
            }
    // set score
            result.innerText = cardsWon.length;
    // clearArrays
            cardsChosen = [];
            cardsChosenId = [];
            // console.log(2)
        }
    
    // Event Delegation
        grid.addEventListener('click', selectCards)
        
    
    // reset browser
    function resetGame () {
        location.reload();
    }

    reset.addEventListener('click', resetGame)