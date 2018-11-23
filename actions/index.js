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

export const fetchFavoritesSuccess = favorites => ({
  type: 'FETCH_FAVORITES_SUCCESS',
  favorites
})


export const postPayloadSuccess = payload =>({
  type: 'POST_PAYLOAD_SUCCESS',
  payload
})

export const updateFavoriteSuccess = store =>({
  type: 'UPDATE_FAVORITE_SUCCESS',
  store
})



const HEADERS = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}


export const fetchStores = url => {
  
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, token) => {
      let headers = Object.assign(HEADERS, {
        'Authorization': 'Bearer ' + token
      })

      dispatch(getPending(true));

      fetch(url,{
        method: 'GET',
        headers: headers        
      })
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
    })
  }
}


export const fetchItems = (url) => {
  return (dispatch) => {

    AsyncStorage.getItem('token', (err, token) => {

      let headers = Object.assign(HEADERS, {
        'Authorization': 'Bearer ' + token
      })

      dispatch(getPending(true));
      
      fetch(url,{
        method:'GET',
        headers: headers
      })
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
    })
  }
}



export const findStore = (url) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, token) => {
      let headers = Object.assign(HEADERS, {
        'Authorization': 'Bearer ' + token
      })

      dispatch(getPending(true));

      fetch(url,{
        method:'GET',
        headers: headers
      })
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
    })
  }
}


export const updateFavorite = (url, requestPayload) => {
  return (dispatch) => {
    console.log(url, requestPayload);

      AsyncStorage.getItem('token', (err, token) => {
        let headers = Object.assign(HEADERS, {
          'Authorization': 'Bearer ' + token
        })
        
        fetch(url,{
          method:'PATCH',
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



export const fetchFavorites = (url, requestPayload) => {
  return (dispatch) => {
    console.log(url, requestPayload);

      AsyncStorage.getItem('token', (err, token) => {
        let headers = Object.assign(HEADERS, {
          'Authorization': 'Bearer ' + token
        })
        
        fetch(url,{
          method:'GET',
          headers: headers
        }).then((response) => {
          if(!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        }).then((response) => response.json())
          .then((payload) => dispatch(fetchFavoriteSuccess(payload)))
          .catch(() => dispatch(getFetchError(true)));
      })
  }
}
