import React from 'react';
import styles from './App.module.css';
import Todos from '../Todos/Todos';
import { ContextTodoListProvider } from '../../store';

const App = () => (
  <div className={styles.container}>
    <ContextTodoListProvider>
      <h1>Todo App</h1>
      <Todos />
    </ContextTodoListProvider>
  </div>
);

export default App;
