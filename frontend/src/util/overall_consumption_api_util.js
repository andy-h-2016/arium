import axios from 'axios';

export const fetchOverallConsumptions = () => {
  return axios.get(`/api/overallconsumptions`);
}

