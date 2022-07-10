import SingleTodo from "../SingleTodo/SingleTodo.jsx";
import InputBox from "../InputBox/InputForm.jsx";
import { TodosContext } from "../../contexts/TodosContext.js";

import "./Todos.scss";
import { useId, useContext } from "react";
import { useParams } from "react-router-dom";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  const id = useId();
  const { list } = useParams();

  return (
    <div className="todos-container">
      <div className="current-list">On {list} list</div>
      <InputBox />
      <div className="todos">
        {todos.map((todo, idx) =>
          todo.list === list ? (
            <SingleTodo key={`${id}-${idx}`} todo={todo} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default TodoList;
