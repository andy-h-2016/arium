import { RECEIVE_OVERALL_CONSUMPTIONS } from '../actions/overall_consumption_actions';

const OverallConsumptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_OVERALL_CONSUMPTIONS:
      newState = {};
      action.overallConsumptions.forEach(overallConsumptions => {
        newState[overallConsumptions._id] = overallConsumptions;
      });
      return newState;
    default:
      return state;
  }
}

export default OverallConsumptionsReducer;