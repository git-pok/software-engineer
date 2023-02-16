function makeCupcakeHtml(cupcake, cptlzdWord) {
    return `
        <div data-cupcake-id=${cupcake.id}>
        <li>${cptlzdWord} / ${cupcake.size} / ${cupcake.rating}</li>
        <img src="${cupcake.image}" alt="${cupcake.flavor} photo">
        </div>
        `
}

async function getCupcakes() {
    const resp = await axios.get('http://127.0.0.1:5000/api/cupcakes');
    let cupcakes = resp.data.cupcakes;

    for (let cupcake of cupcakes) {
        firstLttr = cupcake.flavor[0].toUpperCase()
        rmgLttr = cupcake.flavor.slice(1);
        cptlzdWord = firstLttr + rmgLttr;
        let new_cupcake = makeCupcakeHtml(cupcake, cptlzdWord);
        let $ul = $('ul');
        $ul.append(new_cupcake);
    }
}

getCupcakes();

function inputValues() {
    flavor = $('#flavor').val();
    rating = $('#rating').val();
    size = $('#size').val();
    image = $('#image').val();
}

function createInptValObj(inputs) {
    const valObj = {
                flavor,
                rating,
                size,
                image
            }

    return valObj
}

async function createAndSendJson(obj) { 
    json = JSON.stringify(obj);
    console.log('createAndSendJson ran');
    url = 'http://127.0.0.1:5000/api/cupcakes'

    res = await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}

$('form').submit(function(e) {
    e.preventDefault();
    inputs = inputValues(); 
    obj = createInptValObj(inputs);
    createAndSendJson(obj); 
    $('form').trigger('reset');

    firstLttr = obj.flavor[0].toUpperCase()
    rmgLttr = obj.flavor.slice(1);
    cptlzdWord = firstLttr + rmgLttr;
    let new_cupcake = makeCupcakeHtml(obj, cptlzdWord);
    $('ul').append(new_cupcake);
})
