import { connect } from 'react-redux';
import Terrarium from './terrarium';
import { fetchUserTerrarium } from '../../actions/terrarium_actions';
import { fetchUserWaterTracker } from '../../actions/water_tracker_actions'


const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  // const pageId = ownProps.match.params.userId
  const id = state.session.user.id || state.session.user._id;
  return {
    currentUser: state.session.user, 
    tracker:  Object.values(state.entities.waterTrackers).filter(
      (waterTracker) => waterTracker.userId === id
    )[0],
    terrarium: Object.values(state.entities.terrariums).filter(
      (terrarium) => terrarium.userId === id
    )[0],
    // pageId: ownProps.match.params.userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTerrarium: (userId) => dispatch(fetchUserTerrarium(userId)),
    fetchUserWaterTracker: (id) => dispatch(fetchUserWaterTracker(id)),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Terrarium);