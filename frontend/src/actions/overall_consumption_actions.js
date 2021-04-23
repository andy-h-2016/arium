import * as OverallAPIUtil from '../util/overall_consumption_api_util';

export const RECEIVE_OVERALL_CONSUMPTIONS = "RECEIVE_OVERALL_CONSUMPTIONS";

export const receiveOverallConsumptions = overallConsumption => ({
  type: RECEIVE_OVERALL_CONSUMPTIONS,
  overallConsumption
});

export const fetchOverallConsumptions = () => dispatch => {
  return OverallAPIUtil.fetchOverallConsumptions()
    .then(response => {
      dispatch(receiveOverallConsumptions(response.data[0]))
    })
    .catch(err => console.log(err))
};

