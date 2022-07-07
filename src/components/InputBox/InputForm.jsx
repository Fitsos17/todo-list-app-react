import "./InputForm.scss";

const InputBox = ({ setTodos, todos, todo, setTodo }) => {
  const id = Math.random();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.length === 0) {
      alert("Todo can't be size 0!");
    } else {
      setTodos((todos) => [
        ...todos,
        {
          todo,
          todoId: id,
          completed: false,
        },
      ]);
      setTodo("");
    }
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const onClearHandler = () => {
    setTodos([]);
  };

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
            value={todo}
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
