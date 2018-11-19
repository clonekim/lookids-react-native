export const getContentsError = state => ({
  type: 'GET_CONTENTS_ERROR',
  hasError: state
})

export const loadContents = state => ({
  type: 'LOAD_CONTENTS',
  isLoading: state
})

export const fetchContentsSuccess = contents => ({
  type: 'FETCH_CONTENTS_SUCCESS',
  contents
})


export const fetchContents = url => {
  return (dispatch) => {
    dispatch(loadContents(true));

    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadContents(false));

        return response;
      })
      .then((response) => response.json())
      .then((contents) => dispatch(fetchContentsSuccess(contents)))
      .catch(() => dispatch(getContentsError(true)));
  }
}
