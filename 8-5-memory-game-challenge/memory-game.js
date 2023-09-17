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
const cardsChosen = [];
const cardsChosenIds = [];
const cardsWonIds = [];

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
    // I created all logic in here.
    const cardsChosenLgth = cardsChosen.length;
    if (cardsChosenLgth === 0) {
      // Change card's background color.
      this.style.backgroundColor = this.dataset.name;
      // Push cards name to cardsChosen.
      cardsChosen.push(this.dataset.name);
      // Push card's id to cardsChosenIds.
      cardsChosenIds.push(this.dataset.id);
      // Remove event listener from clicked card.
      this.removeEventListener('click', handleCardClick);
    } else if (cardsChosenLgth === 1 && !cardsChosen.includes(this.dataset.name)) {
      // Change card's background color.
      this.style.backgroundColor = this.dataset.name;
      // Find and Query first card selected.
      const cardId = cardsChosenIds[0];
      const card = document.querySelector(`[data-id="${cardId}"]`);
      // Change background color of first selected card.
      setTimeout(() => card.style.backgroundColor = "rgb(0, 1, 44)", 1000);
      // Change background color of clicked card.
      setTimeout(() => this.style.backgroundColor = "rgb(0, 1, 44)", 1000);
      // Empty cardsChosenIds and cardsChosen.
      cardsChosenIds.length = 0;
      cardsChosen.length = 0;
      // Add event listener to first selected card.
      card.addEventListener('click', handleCardClick);
    } else if (cardsChosenLgth === 1 && cardsChosen.includes(this.dataset.name)) {
      // Change background color of clicked card.
      this.style.backgroundColor = this.dataset.name;
      // Remove event listener from clicked card.
      this.removeEventListener('click', handleCardClick);
      // Push cards won ids to cardsWonIds.
      cardsWonIds.push(cardsChosenIds[0]);
      cardsWonIds.push(this.dataset.id);
      // Empty cardsChosenIds and cardsChosen.
      cardsChosenIds.length = 0;
      cardsChosen.length = 0;
    } if (cardsWonIds.length === COLORS.length) {
      const cards = document.querySelectorAll("td");
      // Reset styles and game.
      setTimeout(() => {
        cards.forEach(card => {
          card.style.backgroundColor = "rgb(0, 1, 44)";
          card.addEventListener('click', handleCardClick);
        });
      }, 1500);
      cardsChosenIds.length = 0;
      cardsChosen.length = 0;
      cardsWonIds.length = 0;
    }
}

createDivsForColors(shuffledColors);