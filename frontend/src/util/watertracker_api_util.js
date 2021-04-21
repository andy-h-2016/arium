import axios from 'axios';

export const getWaterTrackerByUser = userId => {
  return axios.get(`/api/watertrackers/${userId}`);
};

export const createWaterTracker = data => {
  return axios.post('/api/watertrackers/', data);
}

export const updateWaterTracker = id => {
  return axios.get(`/api/terrarium/user/${id}`)
};
