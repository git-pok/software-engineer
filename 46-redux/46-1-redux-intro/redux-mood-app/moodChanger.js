const INITIAL_STATE = { emoji: "" };


const emojiReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SHOCKED":
            return {...state, emoji: "◔_◔"};
        case "FUNNY":
            return {...state, emoji: "^._.^"};
        case "ANGRY":
            return {...state, emoji: "⋋_⋌"};
        case "HAPPY":
            return {...state, emoji: "ʘ‿ʘ"};
        case "SAD":
            return {...state, emoji: "⊙︿⊙"};
        default:
            return state;
    }
}

const store = Redux.createStore(emojiReducer);
