import { RECEIVE_WATER_TRACKER } from '../actions/watertracker_actions';


const WaterTrackersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATER_TRACKER:
      return;
      
  
    default:
      break;
  }
}

export default WaterTrackersReducer;