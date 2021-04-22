import { connect } from 'react-redux';
import { fetchUserWaterTracker } from '../../actions/water_tracker_actions';
import WaterTracker from './water_tracker';
import { fetchUserTerrarium } from '../../actions/terrarium_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const id = state.session.user.id || state.session.user._id;
  let terrarium = Object.values(state.entities.terrariums).find(terrarium => terrarium.userId === id);
  let waterTracker = Object.values(state.entities.waterTrackers).find(watertracker => watertracker.userId === id);

  return {
    currentUser: state.session.user,
    terrarium: terrarium,
    waterTracker: waterTracker
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUserWaterTracker: userId => dispatch(fetchUserWaterTracker(userId)),
  fetchUserTerrarium: userId => dispatch(fetchUserTerrarium(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterTracker);