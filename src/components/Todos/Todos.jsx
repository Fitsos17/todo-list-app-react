import SingleTodo from "../SingleTodo/SingleTodo.jsx";
import InputBox from "../InputBox/InputForm.jsx";

import "./Todos.scss";
import { useEffect, useId, useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext.js";

const TodoList = () => {
  const { todos, todo, setTodo, setTodos } = useContext(TodosContext);

  const id = useId();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos-container">
      <InputBox
        setTodos={setTodos}
        todos={todos}
        todo={todo}
        setTodo={setTodo}
      />
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
