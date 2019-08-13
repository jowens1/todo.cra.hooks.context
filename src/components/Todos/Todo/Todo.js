/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import styles from './Todo.module.css';
import { TodoListStore } from '../../../store';
import { creatTodo } from '../../../actions/TodoList/todoList.action';

const Todo = (todo) => {
  const value = useContext(TodoListStore);
  const { dispatch } = value;
  return (
    <div className={styles.container}>
      {todo.id}
      <button
        className={styles.button}
        onClick={() => creatTodo(dispatch, { name: 'New Todo', id: todo.id })}
      >
        {'New todo'}
      </button>

    </div>
  );
};

export default Todo;
