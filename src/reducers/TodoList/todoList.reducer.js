import _ from 'lodash';
import {
  TODOLIST_ACTIONS,
} from '../../actions/TodoList/todoList.action';

export const TodoListInitialState = {
  todoList: [],
};
const GUID = () => `_${Math.random().toString(36).substr(2, 9)}`;
const findId = (items, id) => items.find(item => item.id === id);


export const TodoListReducer = (state, action) => {
  switch (action.type) {
    case TODOLIST_ACTIONS.GET: {
      const newState = _.cloneDeep(state);
      action.payload.todoList.forEach((list) => {
        if (state.todoList.find(todo => todo.id === list.id)) return;
        newState.todoList.push(list);
      });
      return newState;
    }
    case TODOLIST_ACTIONS.ADD: {
      const baseTodolist = {
        id: GUID(),
        date: Date.now(),
        items: [],
      };
      const newState = _.cloneDeep(state);
      newState.todoList.push(baseTodolist);
      return newState;
    }
    case TODOLIST_ACTIONS.ADD_TODO: {
      const baseTodo = {
        id: GUID(),
        name: action.payload.name,
        completed: false,
      };
      const newState = _.cloneDeep(state);
      findId(newState.todoList, action.payload.id).items.push(baseTodo);
      return newState;
    }
    case TODOLIST_ACTIONS.COMPLETE: {
      console.log('action', action);
      return state;
    }
    default: {
      return state;
    }
  }
};
