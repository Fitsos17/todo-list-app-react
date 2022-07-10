import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { TodosContextProvider } from "./contexts/TodosContext";
import { ListsContextProvider } from "./contexts/ListsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListsContextProvider>
        <TodosContextProvider>
          <App />
        </TodosContextProvider>
      </ListsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
