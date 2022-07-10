import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ListsContext } from "../../contexts/ListsContext";

import "./Sidebar.scss";

const Sidebar = () => {
  const [list, setList] = useState("");
  const { lists, submitNewList } = useContext(ListsContext);

  const onChangeHandler = (e) => {
    setList(e.target.value);
  };
  const onSubmitHandler = (e) => submitNewList(e, list, setList);

  return (
    <label>
      <input type="checkbox" className="sidebar_input" />
      <div className="toggle">
        <span className="top_line common"></span>
        <span className="middle_line common"></span>
        <span className="bottom_line common"></span>
      </div>
      <div className="slide">
        <h1>Lists</h1>
        <ul>
          {lists.map((list) => (
            <li key={list.listId}>
              <Link to={`todo-list-app-react/${list.list}`}>{list.list}</Link>
            </li>
          ))}
        </ul>
        <form autoComplete="off" onSubmit={onSubmitHandler}>
          <label htmlFor="input-sidebar">Enter new list</label>
          <input
            type="text"
            id="input-sidebar"
            value={list}
            onChange={onChangeHandler}
          />
          <button id="submit-list-btn" type="submit">
            Submit List
          </button>
        </form>
      </div>
    </label>
  );
};

export default Sidebar;
