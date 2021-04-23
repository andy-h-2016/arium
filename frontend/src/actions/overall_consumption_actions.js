import * as OverallAPIUtil from '../util/overall_consumption_api_util';

export const RECEIVE_OVERALL_CONSUMPTIONS = "RECEIVE_OVERALL_CONSUMPTIONS";

export const receiveOverallConsumptions = overallConsumptions => ({
  type: RECEIVE_OVERALL_CONSUMPTIONS,
  overallConsumptions
});

export const fetchOverallConsumptions = () => dispatch => (
  OverallAPIUtil.fetchOverallConsumptions()
    .then(response => dispatch(receiveOverallConsumptions(response.data)))
    .catch(err => console.log(err))
);

