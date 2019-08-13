/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import styles from './Todos.module.css';
import Button from '../../common/Button/Button';
import TodoList from './components/TodoList/TodoList';
import { TodoListStore } from '../../store';
import { createTodolist } from '../../actions/TodoList/todoList.action';


const Todos = () => {
  const value = useContext(TodoListStore);
  const { dispatch } = value;
  const handleClick = () => createTodolist(dispatch, 'New Todolist');
  const props = {
    handleClick,
    name: 'New List',
    type: 'add',
  };
  return (
    <div className={styles.container}>
      {'pretty stuff here'}
      <TodoList />
      {'pretty stuff here'}
      <Button {...props} />
    </div>
  );
};

export default Todos;
