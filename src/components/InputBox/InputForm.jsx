import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput.jsx";
import "./InputForm.scss";

const InputBox = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  return (
    <div className="input-box-container">
      <form className="form" autoComplete="off" onSubmit={onSubmitHandler}>
        <label htmlFor="input" className="label" autoComplete="off">
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
