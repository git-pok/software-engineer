import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";

const TodoApp = () => {
  const dispatch = useDispatch();

  const createTodo = (todo) => {
    dispatch({ type: "CREATE_TODO", payload: todo })
  }

  return (
    <>
      <TodoForm createTodo={createTodo} />
      <TodoList />
    </>
  );
}

export default TodoApp;
