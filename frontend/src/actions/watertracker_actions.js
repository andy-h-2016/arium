import * as WaterTrackerAPIUtil from '../util/watertracker_api_util';

export const RECEIVE_WATER_TRACKER = "RECEIVE_WATER_TRACKER";

export const receiveWaterTracker = waterTracker => ({
  type: RECEIVE_WATER_TRACKER,
  waterTracker
});

export const fetchUserWaterTracker = userId => dispatch => (
  WaterTrackerAPIUtil.fetchUserWaterTracker(userId)
    .then(waterTracker => dispatch(receiveWaterTracker(waterTracker)))
    .catch(err => console.log(err))
);

export const createWaterTracker = data => dispatch => (
  WaterTrackerAPIUtil.createWaterTracker(data)
    .then(newWaterTracker => dispatch(receiveWaterTracker(newWaterTracker)))
    .catch(err => console.log(err))
);

export const updateWaterTracker = data => dispatch => (
  WaterTrackerAPIUtil.updateWaterTracker(data)
    .then(updatedWaterTracker => dispatch(receiveWaterTracker(updatedWaterTracker)))
    .catch(err => console.log(err))
);