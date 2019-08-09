import _ from "lodash";
import {
  TODOLIST_ACTIONS
} from "../../actions/TodoList/todoList.action";

export const TodoListInitialState = {
  todoList: []
};

export const TodoListReducer = (state, action) => {
  switch (action.type) {
    case TODOLIST_ACTIONS.RESET: {
      return action.payload;
    }
    case TODOLIST_ACTIONS.ADD: {
      const baseTodo = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        date: Date.now(),
        name: action.payload,
        items: [],
        completed: false
      };
      let newState = _.cloneDeep(state);

      newState.todoList.push(baseTodo);
      return newState;
    }
    case TODOLIST_ACTIONS.DELETE: {
      return state.filter(item => item.id !== action.payload);
    }
    case TODOLIST_ACTIONS.COMPLETE: {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
}