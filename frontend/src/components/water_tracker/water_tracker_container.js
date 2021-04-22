import { connect } from 'react-redux';
import { fetchUserWaterTracker } from '../../actions/water_tracker_actions';
import WaterTracker from './water_tracker';
import { fetchUserTerrarium } from '../../actions/terrarium_actions';

const mapStateToProps = (state, ownProps) => {
  const id = state.session.user.id || state.session.user._id;
  let terrariumArr = Object.values(state.entities.terrariums).filter(terrarium => terrarium.userId === id);
  let terrarium = terrariumArr[0];
  return {
    currentUser: state.session.user,
    waterTracker: state.entities.waterTrackers,
    terrarium: terrarium
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUserWaterTracker: userId => dispatch(fetchUserWaterTracker(userId)),
  fetchUserTerrarium: userId => dispatch(fetchUserTerrarium(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterTracker);