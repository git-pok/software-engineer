const INITIAL_STATE = { todos: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log("STATE", state);
      console.log("ACTION", action);
      const stateData = state.todos;
      const newTodo = action.payload;
      return {
        todos: [
          ...stateData,
          newTodo
        ]
      }
    default:
      return state;
  }
}

export default rootReducer;