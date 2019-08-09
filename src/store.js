/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import {
  TodoListReducer,
  TodoListInitialState,
} from './reducers/TodoList/todoList.reducer';

export const TodoListStore = React.createContext();

export const ContextTodoListProvider = (props) => {
  const [state, dispatch] = useReducer(TodoListReducer, TodoListInitialState);
  const value = { state, dispatch };
  const { children } = props;
  return (
    <TodoListStore.Provider value={value}>
      {children}
    </TodoListStore.Provider>
  );
};

export const ContextTodoListConsumer = (props) => {
  const { children } = props;
  return <TodoListStore.Consumer>{children}</TodoListStore.Consumer>;
};
