/* eslint-disable react/button-has-type */
import React, { Fragment, useContext } from 'react';
import { TodoListStore } from '../../store';
import TodoList from './TodoList/TodoList';
import { createTodo } from '../../actions/TodoList/todoList.action';

const Todos = () => {
  const value = useContext(TodoListStore);
  const { dispatch } = value;

  const handleClick = name => createTodo(dispatch, name);

  return (
    <Fragment>
      <TodoList />
      <button onClick={() => handleClick('New Todo')}>New Todo</button>
    </Fragment>
  );
};

export default Todos;
