import {AsyncStorage} from 'react-native';

export const getFetchError = state => ({
  type: 'FETCH_ERROR',
  hasError: state
})

export const getPending = state => ({
  type: 'PENDING',
  isPending: state
})

export const fetchStoreSuccess = stores => ({
  type: 'FETCH_SUCCESS',
  stores
})

export const fetchSearchSuccess = searches => ({
  type: 'FETCH_SEARCH_SUCCESS',
  searches
})

export const postPayloadSuccess = payload =>({
  type: 'POST_PAYLOAD_SUCCESS',
  payload
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
      .then((payload) => dispatch(fetchStoreSuccess(payload)))
      .catch(() => dispatch(getFetchError(true)));
  }
}


export const findStores = (url) => {
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
      .then((payload) => dispatch(fetchSearchSuccess(payload)))
      .catch(() => dispatch(getFetchError(true)));

  }
}


const HEADERS = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}

export const sendSuggest = (url, keywordJson) => {
  return (dispatch) => {
    dispatch(getPending(true));
    AsyncStorage.getItem('token', (err, result) => {
      let headers = Object.assign(HEADERS, {
        'Authorization': 'Bearer ' + result
      })
      
      fetch(url,{
        method:'POST',
        headers: headers,
        body: JSON.stringify(keywordJson)
      }).then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(getPending(false));
        return response;
      }).then((response) => response.json())
        .then((payload) => dispatch(postPayloadSuccess(payload)))
        .catch(() => dispatch(getFetchError(true)));
    })



  }
}


