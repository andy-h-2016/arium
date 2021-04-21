import { RECEIVE_WATER_TRACKER } from '../actions/water_tracker_actions';


const WaterTrackersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_WATER_TRACKER:
      newState = Object.assign({}, state);
      newState[action.waterTracker.data._id] = action.waterTracker.data;
      return newState;
    default:
      return state;
  }
}

export default WaterTrackersReducer;