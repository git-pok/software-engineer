const happyButton = document.querySelector("#happy");
const sadButton = document.querySelector("#sad");
const funnyButton = document.querySelector("#funny");
const angryButton = document.querySelector("#angry");
const shockedButton = document.querySelector("#shocked");
const h1 = document.querySelector("h1");


happyButton.addEventListener("click", function(e) {
    store.dispatch({ type: "HAPPY" });
    const state = store.getState().emoji;
    h1.innerText = state;
});

sadButton.addEventListener("click", function(e) {
    store.dispatch({ type: "SAD" });
    const state = store.getState().emoji;
    h1.innerText = state;
});

funnyButton.addEventListener("click", function(e) {
    store.dispatch({ type: "FUNNY" });
    const state = store.getState().emoji;
    h1.innerText = state;
});

angryButton.addEventListener("click", function(e) {
    store.dispatch({ type: "ANGRY" });
    const state = store.getState().emoji;
    h1.innerText = state;
});

shockedButton.addEventListener("click", function(e) {
    store.dispatch({ type: "SHOCKED" });
    const state = store.getState().emoji;
    h1.innerText = state;
});