/* eslint-disable react/button-has-type */
import React, { useContext, memo } from 'react';
import styles from './Todos.module.css';
import Button from '../../common/Button/Button';
import TodoList from '../../components/Todos/components/TodoList/TodoList';
import { TodoListStore } from '../../store';
import { createTodolist } from '../../actions/TodoList/todoList.action';


const Todos = () => {
  const value = useContext(TodoListStore);

  const props = {
    handleClick: () => createTodolist(value.dispatch, 'New Todolist'),
    name: 'New List',
    type: 'add',
  };

  return (
    <div>
      <div className={styles.container}>
        <TodoList />
      </div>
      <div>
        <Button {...props} />
      </div>
    </div>
  );
};

export default memo(Todos);
