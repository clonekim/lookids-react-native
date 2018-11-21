export const getSearchError = state => ({
  type: 'GET_SEARCH_ERROR',
  hasError: state
})

export const loadSearch = state => ({
  type: 'LOAD_SEARCH',
  isTyping: state
})

export const fetchSearchSuccess = searches => ({
  type: 'FETCH_SEARCH_SUCCESS',
  searches
})

export const fetchSearch = url => {
  return (dispatch) => {
    dispatch(loadSearch(true));

    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadSearch(false));

        return response;
      })
      .then((response) => response.json())
      .then((searches) => dispatch(fetchSearchSuccess(searches)))
      .catch(() => dispatch(getSearchError(true)));
  }
}
