export const TODOLIST_ACTIONS = {
  ADD: 'add',
  DELETE: 'delete',
  COMPLETE: 'completed',
  RESET: 'reset',
};

export const createTodo = (dispatch, payload) => {
  dispatch({ type: TODOLIST_ACTIONS.ADD, payload });
};
