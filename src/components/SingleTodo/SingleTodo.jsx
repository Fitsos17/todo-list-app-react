import "./SingleTodo.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import { useContext, useState } from "react";

import { TodosContext } from "../../contexts/TodosContext.js";

const SingleTodo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const { completedTodo, deleteTodo, editTodo } = useContext(TodosContext);

  const onEditHandler = (e) => setEdit(!edit);

  const onChangeEditHandler = (e) =>
    setNewTodo({ ...todo, todo: e.target.value });

  const onSubmitEditHandler = () => editTodo(todo, newTodo, setEdit);

  const onCompleteHandler = (e) => completedTodo(todo);

  const onDeleteHandler = (e) => deleteTodo(todo);

  return (
    <div className="todo-container">
      <div className="single-todo">
        {edit ? (
          <form onSubmit={onSubmitEditHandler}>
            <input
              value={newTodo.todo}
              autoFocus
              onChange={onChangeEditHandler}
            />
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
