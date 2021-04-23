import { connect } from 'react-redux';
import SecondsTimer from './seconds_timer';
import { fetchUserTerrarium, updateTerrarium } from '../../actions/terrarium_actions';
import { fetchUserWaterTracker, updateWaterTracker } from '../../actions/water_tracker_actions'


const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  // const pageId = ownProps.match.params.userId
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondsTimer);