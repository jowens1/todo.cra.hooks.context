import React, { useReducer } from "react";
import {
  TodoListReducer,
  TodoListInitialState
} from "./reducers/TodoList/TodoListReducer";

const TodoListStore = React.createContext();

function ContextTodoListProvider(props) {
  const [state, dispatch] = useReducer(TodoListReducer, TodoListInitialState);
  const value = { state, dispatch };

  return (
    <TodoListStore.Provider value={value}>
      {props.children}
    </TodoListStore.Provider>
  );
}

function ContextTodoListConsumer(props) {
  return <TodoListStore.Consumer>{props.children}</TodoListStore.Consumer>;
}

export { TodoListStore, ContextTodoListProvider, ContextTodoListConsumer };
