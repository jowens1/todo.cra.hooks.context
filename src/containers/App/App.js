import React from "react";
import "./App.css";
import Todos from "../../components/Todos/Todos";
import { ContextTodoListProvider } from "../../store";

const App = () => {
  return (
    <div className="App">
      <ContextTodoListProvider>
        <h1>Todo App</h1>
        <Todos />
      </ContextTodoListProvider>
    </div>
  );
}

export default App;
