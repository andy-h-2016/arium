import { connect } from 'react-redux';
import { fetchUserWaterTracker, updateWaterTracker } from '../../actions/water_tracker_actions';
import WaterTracker from './water_tracker';
import { fetchUserTerrarium, updateTerrarium } from '../../actions/terrarium_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const id = state.session.user.id || state.session.user._id;
  let terrarium = Object.values(state.entities.terrariums).find(terrarium => terrarium.userId === id);
  let waterTracker = Object.values(state.entities.waterTrackers).find(waterTracker => waterTracker.userId === id);

  return {
    currentUser: state.session.user,
    terrarium: terrarium,
    waterTracker: waterTracker
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUserWaterTracker: userId => dispatch(fetchUserWaterTracker(userId)),
  fetchUserTerrarium: userId => dispatch(fetchUserTerrarium(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateTerrarium: terrarium => dispatch(updateTerrarium(terrarium)),
  updateWaterTracker: waterTracker => dispatch(updateWaterTracker(waterTracker))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterTracker);