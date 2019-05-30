import React, { Fragment, useContext } from "react";
import { TodoListStore } from "../../store";
import TodoList from "./TodoList/TodoList";
import { createTodo } from "../../actions/TodoList/todoList.action";

export default function Todos() {
  const value = useContext(TodoListStore);
  const { dispatch } = value;
  function handleClick(name) {
    return function callback() {
      createTodo(dispatch, name);
    };
  }

  return (
    <Fragment>
      <TodoList />
      <button onClick={handleClick("New Todo")}>New Todo</button>
    </Fragment>
  );
}
