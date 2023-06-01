const INITIAL_STATE = {
  img: "",
  topText: "",
  btmText: ""
};

const rootReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case "MAKE_MEME":
      return { 
        ...state, 
        img: state.img,
        topText: state.topText,
        btmText: state.btmText
      }
    default:
      return state;
  }
}

export default rootReducer;