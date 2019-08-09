import React from 'react';
import styles from './Todo.module.css';

const Todo = todo => (
  <div className={styles.container}>
    {todo.name}
  </div>
);

export default Todo;
