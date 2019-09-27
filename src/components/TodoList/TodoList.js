import React, { useContext, memo } from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';
import { AppStore } from '../../store';


const TodoList = () => {
  const value = useContext(AppStore);
  const {
    state: { todoList },
  } = value;

  return (

    <div className={todoList.length ? styles.container : ''}>
      {todoList.map(todo => (
        <div
          key={todo.id}
          className={styles.list}
        >
          <Todo key={todo.id} {...todo} />
        </div>
      ))}
    </div>
  );
};

export default memo(TodoList);
