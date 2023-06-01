const INITIAL_STATE = {
  img: "https://www.indiewire.com/wp-content/uploads/2012/05/Gangster-Squad-Sean-Penn.jpg",
  topText: "SAY HELLO",
  btmText: "TO MY LITTLE FRIEND!!!"
};

const rootReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case "CREATE":
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