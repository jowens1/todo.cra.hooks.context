/* eslint-disable react/prop-types */
import React, { useReducer, useContext } from 'react';
import { apiInterface } from './actions/TodoList/todoList.action';
import {
  TodoListReducer,
  TodoListInitialState,
} from './reducers/TodoList/todoList.reducer';
import APImiddleware from './middleware/API/API.middleware';

export const TodoListStore = React.createContext();
export const useTodoListContext = () => useContext(TodoListStore);

export const ContextTodoListProvider = (props) => {
  const [state, dispatch] = useReducer(TodoListReducer, TodoListInitialState);

  const apiDispatch = APImiddleware(dispatch);
  const actions = apiInterface(apiDispatch);

  const { children } = props;
  return (
    <TodoListStore.Provider value={{
      state, dispatch, apiDispatch, actions,
    }}
    >
      {children}
    </TodoListStore.Provider>
  );
};
