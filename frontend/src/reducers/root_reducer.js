import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer'
import tweets from './tweet_reducer'
import ui from './ui_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  tweets,
  ui
});

export default RootReducer;