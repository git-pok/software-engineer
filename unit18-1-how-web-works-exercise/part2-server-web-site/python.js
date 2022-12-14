function changeColor() {
    // const h1 = document.querySelector('h1');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // const color = `rgb(${r}, ${g}, ${b})`; 
    // return h1.style.color = color;
    return `rgb(${r}, ${g}, ${b})`;
}

function color() {
    const h1 = document.querySelector('h1');
    h1.style.color = changeColor(); 
}

setInterval(color, 500);
