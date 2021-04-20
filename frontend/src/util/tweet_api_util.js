import axios from 'axios';

export const getTweets = () => {
  return axios.get('/api/terrarium')
};

export const getUserTweets = id => {
  return axios.get(`/api/terrarium/user/${id}`)
};

export const writeTweet = data => {
  return axios.post('/api/terrarium/', data)
}