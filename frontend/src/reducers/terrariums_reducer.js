import { RECEIVE_TERRARIUM, RECEIVE_ALL_TERRARIUMS } from '../actions/terrarium_actions';

// const initialState = {
  
// };

const TerrariumsReducer = (state = {}, action) => {
switch (action.type) {
  case RECEIVE_ALL_TERRARIUMS:
    return {
      action.terrariums.
    };
  case RECEIVE_TERRARIUM:
    return {
      isAuthenticated: false,
      user: undefined
    };
  default:
    return state;
  }
}

export default TerrariumsReducer