/* eslint-disable react/button-has-type */
import React, { useState, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Todo.module.css';
import { NEW_TODO_BUTTON } from './Todo.constants';
import Button from '../../common/Button/Button';
import { useTodoListContext } from '../../store';
import { creatTodo, completeTodo } from '../../actions/TodoList/todoList.action';

const Todo = (todo) => {
  const value = useTodoListContext();
  const [input, setInput] = useState();
  const { dispatch } = value;

  const handleClick = () => creatTodo(dispatch, { name: 'Todo Item', id: todo.id });
  const handleCheck = event => completeTodo(dispatch, event.target);

  const todoItems = () => todo.items.map((item, index) => (
    <div
      key={item.id}
      className={index > 0 ? classNames(styles.itemContainer, styles.itemContainerTop) : styles.item}
    >
      <input type="checkbox" name={item.name} checked={item.completed} onChange={handleCheck} />
      {item.name}
    </div>
  ));

  const buttonProps = {
    handleClick,
    name: NEW_TODO_BUTTON.TITLE,
    type: NEW_TODO_BUTTON.TYPE,
  };

  return (
    <div className={styles.container}>
      {'Create New Todo'}
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
      />
      <Button {...buttonProps} />
      <div className={todo.items.length ? styles.itemsContainer : ''}>
        {todoItems()}
      </div>
    </div>
  );
};

export default memo(Todo);
