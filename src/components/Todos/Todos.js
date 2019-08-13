/* eslint-disable react/button-has-type */
import React, { Fragment, useContext } from 'react';
import { TodoListStore } from '../../store';
import TodoList from './TodoList/TodoList';
import { createTodolist } from '../../actions/TodoList/todoList.action';

const Todos = () => {
  const value = useContext(TodoListStore);
  const { dispatch } = value;

  return (
    <Fragment>
      <TodoList />
      <button onClick={() => createTodolist(dispatch, 'New Todolist')}>New Todolist</button>
    </Fragment>
  );
};

export default Todos;
