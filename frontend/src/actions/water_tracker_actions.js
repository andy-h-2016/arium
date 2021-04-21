import * as WaterTrackerAPIUtil from '../util/water_tracker_api_util';

export const RECEIVE_WATER_TRACKER = "RECEIVE_WATER_TRACKER";

export const receiveWaterTracker = waterTracker => ({
  type: RECEIVE_WATER_TRACKER,
  waterTracker: waterTracker,
  userId: waterTracker.userId
});

// export const receiveWaterTracker = waterTracker => ({
//   type: RECEIVE_WATER_TRACKER,
//   waterTracker
// });

export const fetchUserWaterTracker = userId => dispatch => (
  WaterTrackerAPIUtil.fetchUserWaterTracker(userId)
    .then(response => dispatch(receiveWaterTracker(response.data)))
    .catch(err => console.log(err))
);

export const fetchWaterTracker = id => dispatch => {
  WaterTrackerAPIUtil.fetchWaterTracker(id)
    .then(response => dispatch(receiveWaterTracker(response.data)))
    .catch(err => console.log(err))
}

// export const fetchUserWaterTracker = data => dispatch => (
//   WaterTrackerAPIUtil.fetchUserWaterTracker(data)
//     .then(waterTracker => dispatch(receiveWaterTracker(waterTracker)))
//     .catch(err => console.log(err))
// );

export const createWaterTracker = waterTracker => dispatch => (
  WaterTrackerAPIUtil.createWaterTracker(waterTracker)
    .then(response => dispatch(receiveWaterTracker(response.data)))
    .catch(err => console.log(err))
);

export const updateWaterTracker = data => dispatch => (
  WaterTrackerAPIUtil.updateWaterTracker(data)
    .then(updatedWaterTracker => dispatch(receiveWaterTracker(updatedWaterTracker)))
    .catch(err => console.log(err))
);