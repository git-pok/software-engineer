const input = document.querySelector('#guess');
scorePgh = document.querySelector('.score');
let score = 0;
let words = [];

timer();

async function flaskServerRequest(evt) {
    evt.preventDefault();
    word = input.value; 

    const res = await axios.get('/check-word', { params: { word: word }});
    input.value = '';
    const resData = res.data.result;

    if (words.indexOf(word) !== -1) {
        alert(`${word} has already been chosen!`);
    } if (resData === 'ok' && words.indexOf(word) === -1) {
        words.push(word);
        score += word.length
        changeScore();
        alert(`${word} is on the board!`);
    } if (resData === 'not-on-board') {
        alert(`${word} is a valid word, but is not on board!`);
    } if (resData === 'not-word') {
        alert(`${word} is not a valid word!`);
    }
}
// Old logic for if statement that starts in line 16.
    // if (resData === 'not-word') {
    //     alert(`${word} is not a valid word!`);
    // } else if (resData === 'not-on-board') {
    //     alert(`${word} is a valid word, but is not on board!`);
    // } else {
    //     score += word.length
    //     changeScore();
    //     alert(`${word} is on the board!`);
    // }

function changeScore() {
    scorePgh.innerText = `Score: ${score}`;
}

async function sendScore() { 
    await axios.post('/post-score', { params: { 'score': score }});
}

function timer() {
    timerPgh = document.querySelector('.timer');
    let start = 60;
    timerPgh.innerText = `Timer: ${start}`;

    time = setInterval(function() {
        if (start <= 0) {
            clearInterval(time);
            input.disabled = true;
            submitBtn = document.querySelector('.submit');
            submitBtn.disabled = true;
            sendScore();
        }
        timerPgh.innerText = `Timer: ${start--}`;
    }, 1000)
}

const form = document.querySelector('#boggle-form');
form.addEventListener('submit', flaskServerRequest);