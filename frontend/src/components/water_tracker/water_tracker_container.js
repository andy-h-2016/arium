import { connect } from 'react-redux';
import { fetchUserWaterTracker } from '../../actions/water_tracker_actions';
import WaterTracker from './water_tracker';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  fetchUserWaterTracker: data => dispatch(fetchUserWaterTracker(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterTracker);