import SingleTodo from "../SingleTodo/SingleTodo.jsx";
import InputBox from "../InputBox/InputForm.jsx";

import "./Todos.scss";
import { useEffect, useId, useState } from "react";

const TodoList = () => {
  const INITIAL_STATE = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(INITIAL_STATE);
  const id = useId();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos-container">
      <InputBox setTodos={setTodos} todos={todos} />
      <div className="todos">
        {todos.map((todo, idx) => (
          <SingleTodo
            key={`${id}-${idx}`}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
