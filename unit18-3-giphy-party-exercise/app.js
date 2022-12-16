async function appendGif(tag) {
    // for hitting search without a value in the input
    if (tag.length === 0) {
        return alert('Please Enter a Value!');
    }

    // the Base Url and Endpoint
    const url = `https://api.giphy.com/v1/gifs/random?api_key=mHF33F3FBTZA8VJtVWM3VuLy0VPNm0Mf&tag=${tag}`;
    
    // the axios request
    const res = await axios.get(url);
    
    // creating the elements to append the gif to
    const div = document.createElement('div');
    div.classList.add('div');
    const gifs = document.querySelector('#gifs');
    const img = document.createElement('img');
    img.src = res.data.data.images.original.url;
    div.appendChild(img);
    gifs.appendChild(div);
}

async function renderGifs(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    appendGif(input.value);
    input.value = '';
}

const form = document.querySelector('form');

form.addEventListener('submit', renderGifs);

function removeBtn(e) {
    const gifSection = document.querySelector('#gifs');
    if (e.target.id === 'removeBtn') gifSection.innerHTML = ''; 
}

form.addEventListener('click', removeBtn);