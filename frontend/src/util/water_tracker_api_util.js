import axios from 'axios';

export const fetchWaterTracker = id => {
  return axios.get(`/api/watertrackers/${id}`);
};

export const fetchUserWaterTracker = userId => {
  return axios.get(`/api/watertrackers/user/${userId}`);
};

export const createWaterTracker = newWaterTracker => {
  return axios.post('/api/watertrackers/', newWaterTracker);
}

export const updateWaterTracker = waterTracker => {
  return axios.patch(`/api/watertrackers/${waterTracker._id}`, waterTracker);
};
