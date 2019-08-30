export const TODOLIST_ACTIONS = {
  ADD: 'ADD',
  ADD_TODO: 'ADD_TODO',
  DELETE: 'DELETE',
  COMPLETE: 'COMPLETED',
  GET: 'GET',
};

export const apiInterface = dispatch => ({
  getTodoList: data => dispatch({ type: TODOLIST_ACTIONS.GET, payload: data }),
});

export const createTodolist = (dispatch, payload) => {
  dispatch({ type: TODOLIST_ACTIONS.ADD, payload });
};

export const creatTodo = (dispatch, payload) => {
  dispatch({ type: TODOLIST_ACTIONS.ADD_TODO, payload });
};

export const completeTodo = (dispatch, payload) => {
  dispatch({ type: TODOLIST_ACTIONS.COMPLETE, payload });
};
