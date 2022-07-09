import SingleTodo from "../SingleTodo/SingleTodo.jsx";
import InputBox from "../InputBox/InputForm.jsx";

import "./Todos.scss";
import { useEffect, useId, useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext.js";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  const id = useId();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos-container">
      <InputBox />
      <div className="todos">
        {todos.map((todo, idx) => (
          <SingleTodo key={`${id}-${idx}`} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
