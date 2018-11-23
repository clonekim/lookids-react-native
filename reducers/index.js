import { combineReducers } from 'redux';
import { ToastAndroid } from 'react-native';

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
      let msg = action.store.favor == 1 ? '보관함에 즐겨찾기(+) 되었습니다': '즐겨찾기(-)를 취소했습니다';
      ToastAndroid.show(msg, ToastAndroid.SHORT);
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

const favorites = (state = {rows:[], total:0}, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITES_SUCCESS':
      return action.favorites;
    default:
      return state;
  }
}


const stars = (state = {rows:[], total:0}, action) => {
  switch (action.type) {
    case 'FETCH_STARS_SUCCESS':
      return action.stars;
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
  favorites,
  stars,
});
