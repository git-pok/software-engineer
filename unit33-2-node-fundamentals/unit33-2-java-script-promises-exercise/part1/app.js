const baseUrl = 'http://numbersapi.com';

function createHtml(res) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = res.data.text;
    li.classList.add('list-group-item');
    return ul.append(li)
}

function makeAxiosRequest(baseUrl) {
    const randNum = Math.floor(Math.random() * 50);
    return axios.get(`${baseUrl}/${randNum}?json`) 
}

makeAxiosRequest(baseUrl)
.then(res => {
    createHtml(res);
    return makeAxiosRequest(baseUrl)
})
.then(res => {
    createHtml(res);
    return makeAxiosRequest(baseUrl)
})
.then(res => {
    createHtml(res);
    return makeAxiosRequest(baseUrl)
})
.then(res => {
    createHtml(res);
    return makeAxiosRequest(baseUrl)
})
.then(res => {
    createHtml(res);
    return makeAxiosRequest(baseUrl)
})