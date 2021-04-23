import { combineReducers } from 'redux';
import terrariums from './terrariums_reducer';
import waterTrackers from './water_trackers_reducer';
import overallConsumptions from './overall_consumption_reducer';


const EntitiesReducer = combineReducers({
  // users,
  terrariums,
  waterTrackers,
  overallConsumptions
});

export default EntitiesReducer;