/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import styles from './Todo.module.css';
import Button from '../../../../common/Button/Button';
import { TodoListStore } from '../../../../store';
import { creatTodo } from '../../../../actions/TodoList/todoList.action';

const Todo = (todo) => {
  const value = useContext(TodoListStore);
  const { dispatch } = value;
  const handleClick = () => creatTodo(dispatch, { name: 'New Todo', id: todo.id });

  const props = {
    handleClick,
    name: 'New Todo',
    type: 'add',
  };

  return (
    <div className={styles.container}>
      {todo.id}
      <Button {...props} />
    </div>
  );
};

export default Todo;
