const INITIAL_STATE = { todos: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      const stateData = state.todos;
      const newTodo = action.payload;
      return {
        todos: [
          ...stateData,
          newTodo
        ]
      }
    case "DELETE_TODO":
      const todoId = action.payload;
      const reduxTodos = state.todos;
      const filteredTodos = reduxTodos.filter(val => val.id !== todoId);
      return {
        todos: filteredTodos
      }
    default:
      return state;
  }
}

export default rootReducer;