import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Dash from '../Dashboard/Dash';
import Todos from '../Todos/Todos';
import { ContextTodoListProvider } from '../../store';

const App = () => (
  <div className={styles.container}>
    <ContextTodoListProvider>
      <Header />
      <Dash />
    </ContextTodoListProvider>
  </div>
);

export default App;
