const titles = document.querySelectorAll('.titles')

function rgb() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

let animation = setInterval(function() {
    for (let title of titles) {
        title.style.color = rgb();
    }
}, 1000);
;