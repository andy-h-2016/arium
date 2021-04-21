import { combineReducers } from 'redux';
// import users from './users_reducer';
import terrariums from './terrariums_reducer';
// import waterTrackers from './water_trackers_reducer';



const StateReducer = combineReducers({
  // users,
  terrariums,
  // waterTrackers
});

export default StateReducer;