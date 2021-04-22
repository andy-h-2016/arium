import * as TerrariumAPIUtil from '../util/terrarium_api_util';

export const RECEIVE_ALL_TERRARIUMS = "RECEIVE_ALL_TERRARIUMS";
export const RECEIVE_TERRARIUM = "RECEIVE_TERRARIUM";

export const receiveAllTerrariums = terrariums => ({
  type: RECEIVE_ALL_TERRARIUMS,
  terrariums
});

export const receiveTerrarium = terrarium => ({
  type: RECEIVE_TERRARIUM,
  terrarium
});

export const fetchAllTerrariums = () => dispatch => (
  TerrariumAPIUtil.fetchAllTerrariums()
    .then(res => dispatch(receiveAllTerrariums(res.data)))
    .catch(err => console.log(err))
);

export const fetchUserTerrarium = userId => dispatch => (
  TerrariumAPIUtil.fetchUserTerrarium(userId)
    .then(res => dispatch(receiveTerrarium(res.data)))
    .catch(err => console.log(err))
);

export const createTerrarium = terrarium => dispatch => (
  TerrariumAPIUtil.createTerrarium(terrarium)
    .then(res => dispatch(receiveTerrarium(res.data)))
    .catch(err => console.log(err))
);

export const updateTerrarium = data => dispatch => (
  TerrariumAPIUtil.updateTerrarium(data)
    .then(res => dispatch(receiveTerrarium(res.data)))
    .catch(err => console.log(err))
);