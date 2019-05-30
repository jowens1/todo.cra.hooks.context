import React, { useContext } from "react";
import { TodoListStore } from "../../../store";

export default function Todoliost() {
  const value = useContext(TodoListStore);
  const {
    state: { todoList }
  } = value;
  return todoList.map(todo => <div key={todo.id}>{todo.name}</div>);
}
