/* eslint-disable react/button-has-type */
import React, { useEffect, memo } from 'react';
import styles from './Todos.module.css';
import Button from '../../common/Button/Button';
import TodoList from '../../components/Todos/components/TodoList/TodoList';
import { useTodoListContext } from '../../store';
import { createTodolist } from '../../actions/TodoList/todoList.action';


const Todos = () => {
  const value = useTodoListContext();
  useEffect(() => value.actions.getTodoList(), []);

  const props = {
    handleClick: () => createTodolist(value.dispatch),
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
