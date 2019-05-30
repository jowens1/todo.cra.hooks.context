import { TODOLIST_ACTIONS } from "../../actions/TodoList/todoList.action";
import _ from "lodash";

export const TodoListInitialState = {
  todoList: []
};

let baseTodo = {
  id: Date.now(),
  name: "",
  items: [],
  completed: false
};

export function TodoListReducer(state, action) {
  switch (action.type) {
    case TODOLIST_ACTIONS.RESET: {
      return action.payload;
    }
    case TODOLIST_ACTIONS.ADD: {
      let newState = _.cloneDeep(state);
      baseTodo.name = action.payload;
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
