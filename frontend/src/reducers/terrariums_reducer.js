import { RECEIVE_TERRARIUM, RECEIVE_ALL_TERRARIUMS } from '../actions/terrarium_actions';

// const initialState = {
  
// };

const TerrariumsReducer = (state = {}, action) => {
switch (action.type) {
  case RECEIVE_ALL_TERRARIUMS:
    const terrariums = Object.values(action.type.terrariums);
    const terrariumState = {};
    terrariums.forEach(terrarium => {
      terrariumState[terrarium._id] = terrarium;
    });

    return terrariumState;

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