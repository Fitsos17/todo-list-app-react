import { createContext, useState } from "react";

export const TodosContext = createContext({
  todos: JSON.parse(localStorage.getItem("todos")) || {},
  setTodos: () => null,
  todo: "",
  setTodo: () => null,
});

export const TodosContextProvider = ({ children }) => {
  const INITIAL_TODOS = JSON.parse(localStorage.getItem("todos")) || {};
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [todo, setTodo] = useState("");

  const value = { todos, setTodos, todo, setTodo };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
