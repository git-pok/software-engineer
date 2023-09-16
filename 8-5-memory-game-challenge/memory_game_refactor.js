// THIS FILE IS STILL BEING WORKED ON
// card options
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];

// create your game board
const grid = document.querySelector('.grid');
const result = document.querySelector("#score");
const cardsChosen = [];
const cardsChosenIds = [];
const cardsWon = [];
result.innerText = 0;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(cardArray) {
    // I created all logic in here.
    const cardRow = document.createElement('tr');
    for (let i = 0; i < cardArray.length; i++) {
        const cardData = document.createElement('td');
        cardData.setAttribute('data-id', i);
        cardData.setAttribute('data-name', cardArray[i]);
        cardData.classList.add("card");
        cardData.classList.add("front");
        cardData.addEventListener('click', handleCardClick);
        cardRow.appendChild(cardData);
        grid.appendChild(cardRow);
    }
};

// TODO: Implement this function!
function handleCardClick(event) {
    // Flip cards if they match.
    const cardsChosenLgth = cardsChosen.length;
    if (cardsChosenLgth === 2 && !cardsChosen.includes(this.dataset.name)) {
        
    }
    // you can use event.target to see which element was clicked
    console.log("THIS", this.dataset.id);
    console.log("THIS", this);
    cardsChosenIds.push(this.dataset.id);
}

// when the DOM loads
createDivsForColors(shuffledColors);