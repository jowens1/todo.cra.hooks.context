import { useReducer } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { createTodolist } from './todoList.action';
import {
  TodoListReducer,
  TodoListInitialState,
} from '../../reducers/TodoList/todoList.reducer';

describe('actions', () => {
  test('createTodoList creates new todo list', () => {
    const { result } = renderHook(() => useReducer(TodoListReducer, TodoListInitialState));
    const [, dispatch] = result.current;
    act(() => {
      createTodolist(dispatch);
    });
    expect(result.current[0].todoList.length).toBe(1);
  });
});
