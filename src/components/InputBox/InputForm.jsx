import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import "./InputForm.scss";

const InputBox = () => {
  const [todo, setTodo] = useState("");
  const { submitTodo, clearAllTodos } = useContext(TodosContext);

  const onSubmitHandler = (e) => submitTodo(e, todo);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const onClearHandler = () => clearAllTodos();

  return (
    <div className="input-box-container">
      <form className="form" autoComplete="off" onSubmit={onSubmitHandler}>
        <label htmlFor="input" className="label">
          Enter your todo:
        </label>
        <div className="input-container">
          <input
            type="text"
            id="input"
            className="input"
            onChange={onChangeHandler}
          />
          <button type="submit" className="btn">
            Add Todo
          </button>
        </div>
      </form>
      <button className="btn-clear" onClick={onClearHandler}>
        Clear All
      </button>
    </div>
  );
};

export default InputBox;
