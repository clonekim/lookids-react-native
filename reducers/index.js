import { combineReducers } from 'redux';
import { getContentsError, loadContents, contents } from './contents';
import { getSearchError, loadSearch, searches } from './search';


export default combineReducers({
  getContentsError,
  loadContents,
  contents,

  getSearchError,
  loadSearch,
  searches,

});
