import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";

import TodoList from "./components/Todos/Todos.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="todo-list">
        <Routes>
          <Route path="/:list" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
