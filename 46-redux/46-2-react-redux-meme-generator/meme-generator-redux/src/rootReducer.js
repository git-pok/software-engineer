const INITIAL_STATE = { meme: [] };

const rootReducer = (state=INITIAL_STATE, action) => {

  switch(action.type) {
    case "UPDATE":
      const newData = action.payload
      const data = state.meme;
      return {
        meme:[
          ...data,
          newData
        ]
      }
    case "DELETE":
      const id = action.payload;
      const filteredState = state.meme.filter(val => id !== val.id);
      return { meme: filteredState };
    default:
      return state;
  }
}

export default rootReducer;