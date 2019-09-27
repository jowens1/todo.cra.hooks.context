/* eslint-disable react/prop-types */
import React, { useReducer, useContext } from 'react';
import { apiInterface } from './actions/TodoList/todoList.action';
import {
  TodoListReducer,
  TodoListInitialState,
} from './reducers/TodoList/todoList.reducer';
import APImiddleware from './middleware/API/API.middleware';

export const AppStore = React.createContext();
export const useTodoListContext = () => useContext(AppStore);

export const ContextTodoListProvider = (props) => {
  const [state, dispatch] = useReducer(
    TodoListReducer, TodoListInitialState,
  );

  const apiDispatch = APImiddleware(dispatch);
  const actions = apiInterface(apiDispatch);

  const { children } = props;

  return (
    <AppStore.Provider value={{
      state, dispatch, apiDispatch, actions,
    }}
    >
      {children}
    </AppStore.Provider>
  );
};
