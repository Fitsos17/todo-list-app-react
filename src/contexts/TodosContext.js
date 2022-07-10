import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  setTodos: () => null,
  submitTodo: () => null,
  clearAllTodos: () => null,
  deleteTodo: () => null,
  completedTodo: () => null,
  editTodo: () => null,
});

export const TodosContextProvider = ({ children }) => {
  const INITIAL_TODOS = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(INITIAL_TODOS);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitTodo = (event, todo, list) => {
    const isDuplicate = todos.find(
      (selectedTodo) => selectedTodo.todo === todo
    );
    const id = Math.random();

    event.preventDefault();
    if (todo.length === 0) {
      alert("Todo can't be size 0!");
    } else if (isDuplicate) {
      alert("Todo already exists!");
    } else {
      setTodos((todos) => [
        ...todos,
        {
          todo,
          todoId: id,
          completed: false,
          list,
        },
      ]);
      document.querySelector("#input").value = "";
    }
  };

  const clearAllTodos = (list) => {
    setTodos(todos.filter((currentTodo) => currentTodo.list !== list));
  };

  const deleteTodo = (todo) => {
    const filteredTodos = todos.filter(
      (selectedTodo) => selectedTodo.todoId !== todo.todoId
    );
    setTodos(filteredTodos);
  };

  const completedTodo = (todo) => {
    const newStateArr = [...todos];
    let index = newStateArr.indexOf(todo);
    newStateArr[index] = { ...todo, completed: !todo.completed };
    setTodos(newStateArr);
  };

  const editTodo = (e, todo, newTodo, setEdit) => {
    e.preventDefault();

    if (newTodo.todo.length === 0) {
      alert("Length of todo can not be 0!");
    } else {
      setTodos(
        todos.map((selectedTodo) =>
          selectedTodo.todoId === todo.todoId
            ? { ...todo, todo: newTodo.todo }
            : selectedTodo
        )
      );
      setEdit(false);
    }
  };

  const value = {
    todos,
    setTodos,
    submitTodo,
    clearAllTodos,
    deleteTodo,
    completedTodo,
    editTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
