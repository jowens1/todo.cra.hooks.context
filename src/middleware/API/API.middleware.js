import axios from 'axios';
import { TODOLIST_ACTIONS } from '../../actions/TodoList/todoList.action';

const APImiddleware = dispatch => (action) => {
  switch (action.type) {
    case TODOLIST_ACTIONS.GET:
      axios.get('http://localhost:12345/todoList')
        .then(resp => dispatch({ type: TODOLIST_ACTIONS.GET, payload: resp.data }))
        .catch(err => console.log('err', err));
      break;
    default:
  }
};

export default APImiddleware;
