import { connect } from 'react-redux';
import Terrarium from './terrarium';
import { fetchUserTerrarium, updateTerrarium } from '../../actions/terrarium_actions';
import { fetchUserWaterTracker, updateWaterTracker } from '../../actions/water_tracker_actions'
import {updateUser, receiveCurrentUser, fetchUser} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  const id = state.session.user.id || state.session.user._id
  return {
    currentUser: state.session.user, 
    waterTracker:  Object.values(state.entities.waterTrackers).find(waterTracker => waterTracker.userId === id),
    terrarium: Object.values(state.entities.terrariums).find(terrarium => terrarium.userId === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTerrarium: (userId) => dispatch(fetchUserTerrarium(userId)),
    fetchUserWaterTracker: (id) => dispatch(fetchUserWaterTracker(id)),
    updateWaterTracker: (data) => dispatch(updateWaterTracker(data)),
    updateTerrarium: (data) => dispatch(updateTerrarium(data)),   
    updateUser: (userId, user) =>dispatch(updateUser(userId, user)),
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Terrarium);