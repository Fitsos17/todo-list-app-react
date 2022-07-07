import "./Sidebar.scss";

import React, { useRef } from "react";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  // const onClickHandler = () => {
  //   sidebarRef.current.blur();
  // };

  return (
    <label ref={sidebarRef}>
      <input type="checkbox" className="sidebar_input" />
      <div className="toggle">
        <span className="top_line common"></span>
        <span className="middle_line common"></span>
        <span className="bottom_line common"></span>
      </div>
      <div className="slide">
        <h1>Lists</h1>
        <ul>
          <li>
            <a href="#">Main</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Hobby</a>
          </li>
        </ul>
      </div>
    </label>
  );
};

export default Sidebar;
