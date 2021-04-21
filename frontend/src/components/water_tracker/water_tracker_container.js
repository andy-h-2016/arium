import { connect } from 'react-redux';
import { fetchUserWaterTracker } from '../../actions/water_tracker_actions';
import WaterTracker from './water_tracker';
import { fetchUserTerrarium } from '../../actions/terrarium_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: state.session.user,
    waterTracker: state.waterTrackers,
    terrarium: Object.values(state.entities.terrariums).filter(
      (terrarium) => terrarium.userId === state.session.user.id
    )[0]
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