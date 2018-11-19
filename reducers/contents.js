export const getContentsError = (state = false, action) => {
  switch (action.type) {
    case 'GET_CONTENTS_ERROR':
      return action.hasError;
    default:
      return state;
  }
}

export const loadContents = (state = false, action) => {
  switch (action.type) {
    case 'LOAD_CONTENTS':
      return action.isLoading;
    default:
      return state;
  }
}

export const contents = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONTENTS_SUCCESS':
      return action.contents;
    default:
      return state;
  }
}
