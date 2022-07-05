import "./CustomInput.scss";

const CustomInput = ({ isInputForm, ...additionalProps }) => {
  return (
    <div className={`input-container ${isInputForm ? "input-form" : "edit"}`}>
      <input type="text" id="input" className="input" {...additionalProps} />
      <button type="submit" className="btn">
        {isInputForm ? "Add Todo" : "Edit Todo"}
      </button>
    </div>
  );
};

export default CustomInput;
