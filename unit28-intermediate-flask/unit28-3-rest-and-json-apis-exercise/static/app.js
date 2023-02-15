// async function getCupcakes() {
//     const resp = await axios.get('http://127.0.0.1:5000/api/cupcakes');
//     let cupcakes = resp.data.cupcakes;
//     appendCupcakes(cupcakes);
// }

// function appendCupcakes(cupcakes) {
//     let $ul = $('ul');

//     for (let cc of cupcakes) {
//         firstLttr = cc.flavor[0].toUpperCase()
//         rmgLttr = cc.flavor.slice(1);
//         cptlzdWord = firstLttr + rmgLttr;
//         $ul.append(`
//         <div data-cupcake-id=${cc.id}>
//         <li>${cptlzdWord} / ${cc.size} / ${cc.rating}</li>
//         <img src="${cc.image}" alt="${cc.flavor} photo">
//         </div>
//         `);
//     }
// }

function makeCupcakeHtml(cupcake, cptlzdWord) {
    // let $ul = $('ul');
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

    console.log('inputValues ran');
}

function createInptValObj(inputs) {
    const valObj = {
                flavor,
                rating,
                size,
                image
            }

    console.log('createInptValObj ran');

    return valObj
}

async function createAndSendJson(obj) { 
    json = JSON.stringify(obj);
    console.log('createAndSendJson ran');
    url = 'http://127.0.0.1:5000/api/cupcakes'
    console.log(typeof json, json);
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
    console.log(new_cupcake);
    $('ul').append(new_cupcake);
})
