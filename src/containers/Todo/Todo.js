/* eslint-disable react/button-has-type */
import React, { useContext, memo } from 'react';
import classNames from 'classnames';
import styles from './Todo.module.css';
import Button from '../../common/Button/Button';
import { TodoListStore } from '../../store';
import { creatTodo } from '../../actions/TodoList/todoList.action';

const Todo = (todo) => {
  const value = useContext(TodoListStore);
  const { dispatch } = value;
  const handleClick = () => creatTodo(dispatch, { name: 'Todo Item', id: todo.id });

  const props = {
    handleClick,
    name: 'New Todo',
    type: 'add',
  };


  const todoItems = () => todo.items.map((item, index) => (
    <div
      key={item.id}
      className={index > 0 ? classNames(styles.item, styles.itemTop) : styles.item}
    >
      <p>{item.name}</p>
      <p>{`Completed: ${item.completed}`}</p>
    </div>
  ));


  return (
    <div className={styles.container}>
      {'Todo'}
      <Button {...props} />
      <div className={todo.items.length ? styles.itemsContainer : ''}>
        {todoItems()}
      </div>
    </div>
  );
};

export default memo(Todo);
