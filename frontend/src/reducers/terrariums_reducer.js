import { RECEIVE_TERRARIUM, RECEIVE_ALL_TERRARIUMS } from '../actions/terrarium_actions';

const TerrariumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_TERRARIUMS:
      newState = {};
      action.terrariums.forEach(terrarium => {
        newState[terrarium._id] = terrarium;
      });

      return newState;

    case RECEIVE_TERRARIUM:
      newState = Object.assign({}, state);
      newState[action.terrarium._id] = action.terrarium;
      return newState
    default:
      return state;
  }
}

export default TerrariumsReducer;