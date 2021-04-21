import axios from 'axios';

export const getAllTerrariums = () => {
  return axios.get('/api/terrariums/all')
};

export const getUserTerrariums = id => {
  return axios.get(`/api/terrariums/user/${id}`)
};

export const createTerrarium = newTerrarium => {
  return axios.post('/api/terrariums/', newTerrarium)
}

export const updateTerrarium = terrarium => {
  return axios.patch(`/api/terrariums/${terrarium.id}`, terrarium)
}