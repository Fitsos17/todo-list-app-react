import "./SingleTodo.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import { useContext, useState } from "react";

import { TodosContext } from "../../contexts/TodosContext.js";

const SingleTodo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const { todos, setTodos } = useContext(TodosContext);

  const onDeleteHandler = () => {
    const filteredTodos = todos.filter(
      (selectedTodo) => selectedTodo.todoId !== todo.todoId
    );
    setTodos(filteredTodos);
  };

  const onEditHandler = () => setEdit(!edit);

  const onSubmitEditHandler = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((selectedTodo) =>
        selectedTodo.todoId === todo.todoId
          ? { ...todo, todo: newTodo.todo }
          : selectedTodo
      )
    );
    setEdit(false);
  };

  const onChangeEditHandler = (e) => {
    e.preventDefault();

    setNewTodo({ ...todo, todo: e.target.value });
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
        {edit ? (
          <form onSubmit={onSubmitEditHandler}>
            <input value={newTodo.todo} onChange={onChangeEditHandler} />
            <button type="submit">Done</button>
          </form>
        ) : todo.completed ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
        <div className="icons-container">
          <div className="icon delete" onClick={onDeleteHandler}>
            <AiFillDelete />
          </div>
          <div className="icon edit" onClick={onEditHandler}>
            <AiFillEdit />
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
