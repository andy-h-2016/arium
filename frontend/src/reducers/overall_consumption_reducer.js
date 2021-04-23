import { RECEIVE_OVERALL_CONSUMPTIONS } from '../actions/overall_consumption_actions';

const OverallConsumptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_OVERALL_CONSUMPTIONS:
      newState = {};
        newState[action.overallConsumption._id] = action.overallConsumption;
      return newState;
    default:
      return state;
  }
}

export default OverallConsumptionsReducer;