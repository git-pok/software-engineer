import { useSelector, useDispatch } from "react-redux";
import './TodoList.css';

const TodoList = ({ createTodo }) => {

  const todoStore = useSelector(store => store.todos);
  const dispatch = useDispatch(store => store.todos);

  const deleteTodo = id => {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  const generateTodoHtml = todoStore.map(val => (
    <div className="TodoList-container" key={val.id}>
      <button onClick={() => deleteTodo(val.id)}>X</button>
      <li
        className={`TodoList-${val.status}`}>
          {val.todo}
      </li>
    </div>
  ))

  return (
    <ul className="TodoList-ul">
      {generateTodoHtml}
    </ul>
  );
}

export default TodoList;
