import { ADD_TODO, COMPLETE_TODO, UNCOMPLETE_TODO, DELETE_TODO, RESTORE_TODO } from '../actions/constants';

const initialState = [
  { id: 1, title: 'Interview first round', completed: true },
  { id: 3, title: 'Interview second round', completed: true },
  { id: 2, title: 'Final round', completed: false },
];

const addTodo = (state, newTodo) => {
  const { title, completed } = newTodo;
  const ids = state.map(todo => todo.id);
  const newId = Math.max(...ids) + 1;
  const todo = {
    id: newId,
    title,
    completed,
  };
  const newState = [...state, todo];

  sessionStorage.setItem('state',JSON.stringify(newState));
  
  return newState
};

const completeTodo = (state, todoId) => {
  console.log(todoId);
  const newState = state.map(todo => {

    if (todo.id === Number(todoId)) {
      return {
        id: todo.id,
        title: todo.title,
        completed: false,
      };
    }
    return todo;
  });
  sessionStorage.setItem('state',JSON.stringify(newState));
  return newState
}

const deleteTodo = (state, todoId) => {
  const newState = state.filter(todo => {
    console.log("test", todo);
    return todo.id !== todoId
  });
  sessionStorage.setItem('state',JSON.stringify(newState));
  return newState
}

const uncompleteTodo = (state, todoId) => {
  const newState = state.map(todo => {
    if (todo.id === todoId) {
      return {
        id: todo.id,
        title: todo.title,
        completed: true,
      };
    }
    return todo;
  });
  sessionStorage.setItem('state',JSON.stringify(newState));
  return newState
}



const restoreTodo = (state,newState) => {  
  return JSON.parse(newState);
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action.payload);
    case COMPLETE_TODO: return completeTodo(state, action.payload)
    case UNCOMPLETE_TODO: return uncompleteTodo(state, action.payload)
    case DELETE_TODO: return deleteTodo(state, action.payload)
    case RESTORE_TODO: return restoreTodo(state,action.newState)
    default: return state;
  }
};


export default todoReducer;
