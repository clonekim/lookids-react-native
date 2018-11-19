import { combineReducers } from 'redux';
import { getContentsError, loadContents, contents } from './contents';

export default combineReducers({
  getContentsError,
  loadContents,
  contents,
});
