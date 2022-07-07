import "./SingleTodo.scss";
import { AiFillDelete } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";

const SingleTodo = ({ todos, todo, setTodos }) => {
  const onDeleteHandler = () => {
    const filteredTodos = todos.filter(
      (selectedTodo) => selectedTodo.todoId !== todo.todoId
    );
    setTodos(filteredTodos);
  };

  const onCompleteHandler = () => {
    const newStateArr = [...todos];
    let index = newStateArr.indexOf(todo);
    newStateArr[index] = { ...todo, completed: !todo.completed };
    setTodos(newStateArr);
  };

  return (
    <div className="todo-container">
      <div className="single-todo">
        {todo.completed ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
        <div className="icons-container">
          <div className="icon delete" onClick={onDeleteHandler}>
            <AiFillDelete />
          </div>
          <div className="icon complete" onClick={onCompleteHandler}>
            <MdDoneAll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
