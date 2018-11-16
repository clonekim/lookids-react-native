import { combineReducers } from 'redux';

export function api (state = { stores: []}, action) {
  console.log('coming action -->', action, process.env);
  
  switch(action.type) {
  case 'FETCH_STORES':
    return Object.assign({}, state, {

      stores: [
        {key:'1', rank:1,   name:'83kjkd03'},
        {key:'2', rank:999, name:'xxx'}
      ]
    });
    
  default: 
    return state;
  }

}

export default combineReducers({
  api
});
