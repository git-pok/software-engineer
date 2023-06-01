const INITIAL_STATE = [{
  img: "https://www.indiewire.com/wp-content/uploads/2012/05/Gangster-Squad-Sean-Penn.jpg",
  topText: "SAY HELLO",
  btmText: "TO MY LITTLE FRIEND!!!"
}];

const rootReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case "UPDATE":
      // return console.log("STATE", action.meme);
      return [
        ...state,
        action.meme
      ]
    case "DELETE":
      return console.log("DELETE", action);
    default:
      return state;
  }
}

export default rootReducer;