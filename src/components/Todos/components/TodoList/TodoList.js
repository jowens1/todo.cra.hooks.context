import React, { useContext } from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';
import { TodoListStore } from '../../../../store';


const TodoList = () => {
  const value = useContext(TodoListStore);
  const {
    state: { todoList },
  } = value;

  return todoList.map(todo => (
    <div
      key={todo.id}
      className={styles.container}
    >
      <Todo key={todo.id} {...todo} />
    </div>
  ));
};

export default TodoList;
