/* eslint-disable react/button-has-type */
import React, { useState, memo } from 'react';
import classNames from 'classnames';
import styles from './Todo.module.css';
import { NEW_TODO_BUTTON } from './Todo.constants';
import Button from '../../common/Button/Button';
import { useTodoListContext } from '../../store';
import { creatTodo, completeTodo } from '../../actions/TodoList/todoList.action';

const Todo = (todo) => {
  const value = useTodoListContext();
  const [input, setInput] = useState(' ');
  const { dispatch } = value;
  const handleButtonClick = () => creatTodo(dispatch, { name: input, id: todo.id });
  const handleCheck = event => completeTodo(dispatch, event.target);
  const handleChange = event => setInput(event.target.value.trim());
  const todoItems = () => todo.items.map((item, index) => (
    <div
      key={item.id}
      className={
        index > 0
          ? classNames(styles.itemContainer, styles.itemContainerTop)
          : styles.item}
    >
      <input type="checkbox" name={item.name} checked={item.completed} onChange={handleCheck} />
      {item.name}
    </div>
  ));

  return (
    <div className={styles.container}>
      {'Create New Todo'}
      <input
        type="text"
        onChange={handleChange}
        value={input}
      />
      <Button onClick={handleButtonClick} />
      <div className={todo.items.length ? styles.itemsContainer : ''}>
        {todoItems()}
      </div>
    </div>
  );
};

export default memo(Todo);
