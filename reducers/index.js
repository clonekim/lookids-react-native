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
    case 'FETCH_STORES_SUCCESS':
      return action.stores;
    default:
      return state;
  }
}

const store = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STORE_SUCCESS':
      return action.store;
    case 'UPDATE_FAVORITE_SUCCESS':
      return action.store;
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

const items = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return action.items;
    default:
      return state;
  }
}



export default combineReducers({
  getFetchError,
  getPending,
  stores,
  store,
  searches,
  items,
});
