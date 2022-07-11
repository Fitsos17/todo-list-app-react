import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";

import TodoList from "./components/Todos/Todos.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const RedirectToMain = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("main");
    });
    return null;
  };
  return (
    <div className="App">
      <Sidebar />
      <div className="todo-list">
        <Routes>
          <Route path="/" element={<RedirectToMain />} />
          <Route path="/:list" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
