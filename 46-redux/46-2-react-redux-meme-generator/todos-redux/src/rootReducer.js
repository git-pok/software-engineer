const INITIAL_STATE = { todos: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log("STATE", state);
      console.log("ACTION", action);
      const state = state.todos;
      const newTodo = action.payload;
      return {
        todos: [
          ...state,
          newTodo
        ]
      }
  }
}

export default rootReducer;