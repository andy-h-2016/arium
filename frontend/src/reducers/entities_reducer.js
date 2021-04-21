import { combineReducers } from 'redux';
import terrariums from './terrariums_reducer';
// import waterTrackers from './water_trackers_reducer';


const EntitiesReducer = combineReducers({
  // users,
  terrariums,
  // waterTrackers
});

export default EntitiesReducer;