const baseUrl = 'http://numbersapi.com';

function createHtml(res) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = res.data.text;
    li.classList.add('list-group-item');
    return ul.append(li)
}

async function makeAxiosRequest(baseUrl) {
    const randNum = Math.floor(Math.random() * 50);
    let numberFacts = await Promise.all([
        axios.get(`${baseUrl}/${randNum}?json`),
        axios.get(`${baseUrl}/${randNum}?json`),
        axios.get(`${baseUrl}/${randNum}?json`),
        axios.get(`${baseUrl}/${randNum}?json`),
        axios.get(`${baseUrl}/${randNum}?json`),
    ]);

    return numberFacts; 
}

async function renderNumberFacts() {
    res = await makeAxiosRequest(baseUrl);
    res.forEach((val) => createHtml(val));

}

renderNumberFacts();