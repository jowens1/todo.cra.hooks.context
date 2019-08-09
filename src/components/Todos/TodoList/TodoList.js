import React, { useContext } from "react";
import Todo from "../Todo/Todo"
import { TodoListStore } from "../../../store";


const TodoList = () => {
  const value = useContext(TodoListStore);
  const {
    state: { todoList }
  } = value;
  return todoList.map(todo => <Todo key={todo.id} {...todo}/>);
}

export default TodoList;