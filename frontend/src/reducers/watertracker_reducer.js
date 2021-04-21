import { RECEIVE_WATER_TRACKER } from '../actions/watertracker_actions';


const WaterTrackersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_WATER_TRACKER:
      newState = Object.assign({}, state);
      newState[action.waterTracker._id] = action.waterTracker;
      return newState;
    default:
      return state;
  }
}

export default WaterTrackersReducer;