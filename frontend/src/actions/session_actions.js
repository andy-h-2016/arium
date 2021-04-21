import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';
import { createWaterTracker } from './water_tracker_actions';
import { createTerrarium } from './terrarium_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

// We'll dispatch this when our user signs in
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});
  
// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

// When our user is logged out, we will dispatch this action to set isAuthenticated to false
export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const signup = user => dispatch => (
    APIUtil.signup(user)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
      })
      .then( () => dispatch(createWaterTracker()) )
      .then(waterTrackerAction => {
        const terrarium = {
          title: 'placeholder',
          waterTrackerId: waterTrackerAction.waterTracker._id
        };
        dispatch(createTerrarium(terrarium))
      })
      .catch(err => {
        dispatch(receiveErrors(err.response.data));
      })
);

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })
)


export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
  });

export const updateUser = (userId, user) => (dispatch)=> (
  APIUtil.updateUser(userId, user)
  .then((user) => dispatch(receiveUser(user)))
  .catch(err => console.log(err))
);

export const fetchUser = id => dispatch => {
  APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
}
