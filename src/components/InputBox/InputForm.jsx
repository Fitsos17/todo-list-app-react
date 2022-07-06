import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput.jsx";
import "./InputForm.scss";

const InputBox = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState("");
  const isDuplicatedTodo = todos.find((selectedTodo) => selectedTodo === todo);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (todo.length === 0) {
      alert("Todo can't be size 0!");
    } else if (isDuplicatedTodo) {
      alert("This todo is already in this list!");
    } else {
      setTodos((todos) => [...todos, todo]);
      setTodo("");
    }
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  return (
    <div className="input-box-container">
      <form className="form" autoComplete="off" onSubmit={onSubmitHandler}>
        <label htmlFor="input" className="label">
          Enter your todo:
        </label>
        <div className="input-container">
          <CustomInput
            onChange={onChangeHandler}
            value={todo}
            isInputForm={true}
          />
        </div>
      </form>
    </div>
  );
};

export default InputBox;
