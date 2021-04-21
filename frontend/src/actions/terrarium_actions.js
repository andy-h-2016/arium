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
    .then(terrariums => dispatch(receiveAllTerrariums(terrariums)))
    .catch(err => console.log(err))
);

export const fetchUserTerrarium = userId => dispatch => (
  TerrariumAPIUtil.fetchUserTerrarium(userId)
    .then(terrarium => dispatch(receiveTerrarium(terrarium)))
    .catch(err => console.log(err))
);

export const createTerrarium = data => dispatch => (
  TerrariumAPIUtil.createTerrarium(data)
    .then(newTerrarium => dispatch(receiveTerrarium(newTerrarium)))
    .catch(err => console.log(err))
);

export const updateTerrarium = data => dispatch => (
  TerrariumAPIUtil.updateTerrarium(data)
    .then(newTerrarium => dispatch(receiveTerrarium(newTerrarium)))
    .catch(err => console.log(err))
);