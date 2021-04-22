import { connect } from 'react-redux';
import Terrarium from './terrarium';
import { fetchUserTerrarium, receiveTerrarium } from '../../actions/terrarium_actions';
import { fetchUserWaterTracker, receiveWaterTracker } from '../../actions/water_tracker_actions'


const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  console.log(state)
  // const pageId = ownProps.match.params.userId
  // can we add wildcard(userId) to show route to know whos show page it is
  return {
    currentUser: state.session.user, 
    terrariums:  state.entities.terrariums,
    trackers:  state.entities.waterTrackers,
    // pageId: ownProps.match.params.userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTerrarium: (userId) => dispatch(receiveTerrarium(userId)),
    fetchUserWaterTracker: (userId) => dispatch(receiveWaterTracker(userId)),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Terrarium);