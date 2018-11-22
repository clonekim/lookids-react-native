import { combineReducers } from 'redux';


const getFetchError = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ERROR':
      return action.hasError;
    default:
      return state;
  }
}

const getPending = (state = false, action) => {
  switch (action.type) {
    case 'PENDING':
      return action.isPending;
    default:
      return state;
  }
}

const stores = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.stores;
    default:
      return state;
  }
}

const searches = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_SUCCESS':
      return action.searches;
    default:
      return state;
  }
}

const payload = (state = [], action) => {
  switch (action.type) {
    case 'POST_PAYLOAD_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  getFetchError,
  getPending,
  stores,
  searches,
  payload
});
