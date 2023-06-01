const INITIAL_STATE = [];

const rootReducer = (state=INITIAL_STATE, action) => {

  switch(action.type) {
    case "UPDATE":
      return [
        ...state,
        action.meme
      ]
    case "DELETE":
      const filteredState = state.filter(val => action.id !== val.id);
      return filteredState;
    default:
      return state;
  }
}

export default rootReducer;