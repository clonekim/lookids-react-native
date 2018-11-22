import {AsyncStorage} from 'react-native';

export const getFetchError = state => ({
  type: 'FETCH_ERROR',
  hasError: state
})

export const getPending = state => ({
  type: 'PENDING',
  isPending: state
})

export const fetchStoresSuccess = stores => ({
  type: 'FETCH_STORES_SUCCESS',
  stores
})

export const fetchStoreSuccess = store => ({
  type: 'FETCH_STORE_SUCCESS',
  store
})


export const fetchItemsSuccess = items => ({
  type: 'FETCH_ITEMS_SUCCESS',
  items
})

export const fetchSearchSuccess = searches => ({
  type: 'FETCH_SEARCH_SUCCESS',
  searches
})

export const postPayloadSuccess = payload =>({
  type: 'POST_PAYLOAD_SUCCESS',
  payload
})

export const updateFavoriteSuccess = store =>({
  type: 'UPDATE_FAVORITE_SUCCESS',
  store
})




export const fetchStores = url => {

  return (dispatch) => {
    dispatch(getPending(true));

    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(getPending(false));
        return response;
      })
      .then((response) => response.json())
      .then((payload) => dispatch(fetchStoresSuccess(payload)))
      .catch(() => dispatch(getFetchError(true)));
  }
}


export const fetchItems = (url) => {
  return (dispatch) => {
    dispatch(getPending(true));
    
    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(getPending(false));
        return response;
      })
      .then((response) => response.json())
      .then((payload) => dispatch(fetchItemsSuccess(payload)))
      .catch(() => dispatch(getFetchError(true)));

  }
}



export const findStore = (url) => {
  return (dispatch) => {
    dispatch(getPending(true));
    
    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(getPending(false));
        return response;
      })
      .then((response) => response.json())
      .then((payload) => dispatch(fetchStoreSuccess(payload)))
      .catch(() => dispatch(getFetchError(true)));

  }
}


const HEADERS = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}


export const updateFavorite = (url, requestPayload) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      let headers = Object.assign(HEADERS, {
        'Authorization': 'Bearer ' + result
      })
      
      fetch(url,{
        method:'POST',
        headers: headers,
        body: JSON.stringify(requestPayload)
      }).then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }).then((response) => response.json())
        .then((payload) => dispatch(updateFavoriteSuccess(payload)))
        .catch(() => dispatch(getFetchError(true)));
    })
  }
}


export const deleteFavorite = (url) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      let headers = Object.assign(HEADERS, {
        'Authorization': 'Bearer ' + result
      })
      
      fetch(url,{
        method:'DELETE',
        headers: headers
      }).then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }).then((response) => response.json())
        .then((payload) => dispatch(updateFavoriteSuccess(payload)))
        .catch(() => dispatch(getFetchError(true)));
    })
  }
}
