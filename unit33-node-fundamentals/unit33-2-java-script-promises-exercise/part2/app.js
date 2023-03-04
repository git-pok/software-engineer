// card images: https://code.google.com/archive/p/vector-playing-cards/downloads

const playCards = [
    {
        "suit": 'DIAMONDS',
        "value": 'QUEEN',
        "image": 'cards/queen_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": 'KING',
        "image": 'cards/king_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": 'ACE',
        "image": 'cards/ace_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": 'JACK',
        "image": 'cards/jack_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '2',
        "image": 'cards/2_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '3',
        "image": 'cards/3_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '4',
        "image": 'cards/4_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '5',
        "image": 'cards/5_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '6',
        "image": 'cards/6_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '7',
        "image": 'cards/7_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '8',
        "image": 'cards/8_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '9',
        "image": 'cards/9_of_diamonds.png'
    },
    {
        "suit": 'DIAMONDS',
        "value": '10',
        "image": 'cards/10_of_diamonds.png'
    },
    {
        "suit": 'CLUBS',
        "value": 'QUEEN',
        "image": 'cards/queen_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": 'KING',
        "image": 'cards/king_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": 'ACE',
        "image": 'cards/ace_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": 'JACK',
        "image": 'cards/jack_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '2',
        "image": 'cards/2_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '3',
        "image": 'cards/3_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '4',
        "image": 'cards/4_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '5',
        "image": 'cards/5_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '6',
        "image": 'cards/6_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '7',
        "image": 'cards/7_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '8',
        "image": 'cards/8_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '9',
        "image": 'cards/9_of_clubs.png'
    },
    {
        "suit": 'CLUBS',
        "value": '10',
        "image": 'cards/10_of_clubs.png'
    },
    {
        "suit": 'SPADES',
        "value": 'QUEEN',
        "image": 'cards/queen_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": 'KING',
        "image": 'cards/king_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": 'ACE',
        "image": 'cards/ace_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": 'JACK',
        "image": 'cards/jack_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '2',
        "image": 'cards/2_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '3',
        "image": 'cards/3_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '4',
        "image": 'cards/4_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '5',
        "image": 'cards/5_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '6',
        "image": 'cards/6_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '7',
        "image": 'cards/7_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '8',
        "image": 'cards/8_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '9',
        "image": 'cards/9_of_spades.png'
    },
    {
        "suit": 'SPADES',
        "value": '10',
        "image": 'cards/10_of_spades.png'
    },
    {
        "suit": 'HEARTS',
        "value": 'QUEEN',
        "image": 'cards/queen_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": 'KING',
        "image": 'cards/king_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": 'ACE',
        "image": 'cards/ace_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": 'JACK',
        "image": 'cards/jack_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '2',
        "image": 'cards/2_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '3',
        "image": 'cards/3_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '4',
        "image": 'cards/4_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '5',
        "image": 'cards/5_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '6',
        "image": 'cards/6_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '7',
        "image": 'cards/7_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '8',
        "image": 'cards/8_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '9',
        "image": 'cards/9_of_hearts.png'
    },
    {
        "suit": 'HEARTS',
        "value": '10',
        "image": 'cards/10_of_hearts.png'
    },
]

const deckBaseUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

function shuffleDeck(deckBaseUrl) {
    return axios.get(`${deckBaseUrl}`);
}

function drawCard(deckId) {
    const cardDrawUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    return axios.get(`${cardDrawUrl}`);
}

function logCard(cards) {
    try {
        console.log(`${cards[0].value} of ${cards[0].suit}`);
        return {
            "value": cards[0].value,
            "suit": cards[0].suit,
        }
    } catch {
        alert('No more cards!');
        location.reload();
    } 
}

let count = 0;

function createCardHtml(obj) {
    const card = document.querySelector('.card');
    const img = document.createElement('img');
    match = playCards.find((val) => obj.value === val.value && obj.suit === val.suit)
    if (count === 0 && match) {
        count += 1;
        img.setAttribute('src', match.image);
        img.classList.add('card-front');
        card.append(img);
    } else if (count > 0 && match) {
        img.setAttribute('src', match.image);
        img.classList.add('card-front');
        card.append(img);
    }
}

const deck = shuffleDeck(deckBaseUrl);

const btn = document.querySelector('button');

let deckDrawId;

function drawCardGame() {
    if (!deckDrawId) {  
        shuffleDeck(deckBaseUrl)
        .then(resp => {
            const deckId = resp.data.deck_id;
            deckDrawId = deckId;
            return drawCard(deckId)
        })
        .then(resp => {
            const deckId = resp.data.deck_id;
            const cards = resp.data.cards;
            obj = logCard(cards);
            createCardHtml(obj);
            return drawCard(deckId) 
        })
    } else {
        drawCard(deckDrawId)
        .then(resp => {
            const cards = resp.data.cards;
            obj = logCard(cards);
            createCardHtml(obj); 
        })
    }       
}

btn.addEventListener('click', drawCardGame);