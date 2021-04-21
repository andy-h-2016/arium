import axios from 'axios';

export const fetchUserWaterTracker = waterTracker => {
  return axios.get(`/api/watertrackers/user/${waterTracker.userId}`);
};

export const createWaterTracker = newWaterTracker => {
  return axios.post('/api/watertrackers/', newWaterTracker);
}

export const updateWaterTracker = waterTracker => {
  return axios.patch(`/api/watertrackers/${waterTracker._id}`, waterTracker);
};
