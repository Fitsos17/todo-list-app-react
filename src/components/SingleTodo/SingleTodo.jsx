import "./SingleTodo.scss";
import { AiFillDelete } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";

import { useState } from "react";

const SingleTodo = ({ todos, setTodos, todo }) => {
  const [complete, setComplete] = useState(false);

  const onDeleteHandler = () => {
    const filteredTodos = todos.filter((selectedTodo) => selectedTodo !== todo);
    setTodos(filteredTodos);
  };

  const onCompleteHandler = () => {
    setComplete(!complete);
  };

  return (
    <div className="todo-container">
      <div className="single-todo">
        {complete ? <s>{todo}</s> : <span>{todo}</span>}
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
