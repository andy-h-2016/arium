import { connect } from 'react-redux';
import { fetchUserWaterTracker } from '../../actions/water_tracker_actions';
import WaterTracker from './water_tracker';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  waterTracker: state.waterTrackers
})

const mapDispatchToProps = dispatch => ({
  fetchUserWaterTracker: userId => dispatch(fetchUserWaterTracker(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterTracker);