export const TODOLIST_ACTIONS = {
  ADD: 'ADD',
  ADD_TODO: 'ADD_TODO',
  DELETE: 'DELETE',
  COMPLETE: 'COMPLETED',
};

export const createTodolist = (dispatch, payload) => {
  dispatch({ type: TODOLIST_ACTIONS.ADD, payload });
};

export const creatTodo = (dispatch, payload) => {
  dispatch({ type: TODOLIST_ACTIONS.ADD_TODO, payload });
};

