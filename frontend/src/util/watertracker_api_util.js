import axios from 'axios';

export const fetchUserWaterTracker = userId => {
  return axios.get(`/api/watertrackers/${userId}`);
};

export const createWaterTracker = newWaterTracker => {
  return axios.post('/api/watertrackers/', newWaterTracker);
}

export const updateWaterTracker = waterTracker => {
  return axios.patch(`/api/watertrackers/${waterTracker.id}`, waterTracker);
};
