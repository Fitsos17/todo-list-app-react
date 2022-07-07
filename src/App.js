import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";

import TodoList from "./components/Todos/Todos.jsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TodoList />
    </div>
  );
}

export default App;
