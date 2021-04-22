import axios from 'axios';

export const fetchAllTerrariums = () => {
  return axios.get('/api/terrariums/all')
};

export const fetchUserTerrarium = userId => {
  return axios.get(`/api/terrariums/user/${userId}`)
};

export const createTerrarium = newTerrarium => {
  return axios.post('/api/terrariums/', newTerrarium)
}

export const updateTerrarium = terrarium => {
  return axios.patch(`/api/terrariums/${terrarium._id}`, terrarium)
}