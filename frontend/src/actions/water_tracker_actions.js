import * as WaterTrackerAPIUtil from '../util/water_tracker_api_util';
import { receiveOverallConsumptions } from './overall_consumption_actions';

export const RECEIVE_WATER_TRACKER = "RECEIVE_WATER_TRACKER";

export const receiveWaterTracker = waterTracker => ({
  type: RECEIVE_WATER_TRACKER,
  waterTracker: waterTracker,
  userId: waterTracker.userId
});

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

export const createWaterTracker = waterTracker => dispatch => (
  WaterTrackerAPIUtil.createWaterTracker(waterTracker)
    .then(response => dispatch(receiveWaterTracker(response.data)))
    .catch(err => console.log(err))
);

export const updateWaterTracker = data => dispatch => (
  WaterTrackerAPIUtil.updateWaterTracker(data)
  .then(res => {
      dispatch(receiveWaterTracker(res.data.waterTracker));
      dispatch(receiveOverallConsumptions(res.data.overallConsumption))
    })
    .catch(err => console.log(err))
);