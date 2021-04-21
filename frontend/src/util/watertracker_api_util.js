import axios from 'axios';

export const getWaterTrackerByUser = userId => {
  return axios.get(`/api/watertrackers/${userId}`)
};

export const getUserTweets = id => {
  return axios.get(`/api/terrarium/user/${id}`)
};

export const writeTweet = data => {
  return axios.post('/api/terrarium/', data)
}