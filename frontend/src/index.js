import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

//imports for testing actions and reducers
import {fetchAllTerrariums} from './actions/terrarium_actions';
import { createWaterTracker, updateWaterTracker, fetchUserWaterTracker, fetchWaterTracker } from './actions/water_tracker_actions';
import { fetchOverallConsumptions } from './actions/overall_consumption_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchOverallConsumptions = fetchOverallConsumptions;
  window.fetchAllTerrariums = fetchAllTerrariums;
  window.createWaterTracker = createWaterTracker;
  window.updateWaterTracker = updateWaterTracker;
  window.fetchUserWaterTracker = fetchUserWaterTracker;
  window.fetchWaterTracker = fetchWaterTracker;



  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
