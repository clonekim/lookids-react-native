export const getSearchError = (state = false, action) => {
  switch (action.type) {
  case 'GET_SEARCH_ERROR':
    return action.hasError;
  default:
    return state;
  }
}

export const loadSearch = (state = false, action) => {
  switch (action.type) {
  case 'LOAD_SEARCH':
    return action.isTyping;
  default:
    return state;
  }
}

export const searches = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_SEARCH_SUCCESS':
    return action.searches;
  default:
    return state;
  }
}

