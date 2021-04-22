import { connect } from 'react-redux';
import TerrariumShow from './terrarium_show';
import { fetchUserTerrarium,  } from '../../actions/terrarium_actions';
import { fetchUserWaterTracker,  } from '../../actions/water_tracker_actions'


const mapStateToProps = (state, ownProps) => { 
  console.log() 
  return {
    showUser: state.session.user, 
    waterTracker:  Object.values(state.entities.waterTrackers).find(waterTracker => waterTracker.userId === ownProps.match.params.id),
    terrarium: Object.values(state.entities.terrariums).find(terrarium => terrarium.userId === ownProps.match.params.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTerrarium: (userId) => dispatch(fetchUserTerrarium(userId)),
    fetchUserWaterTracker: (id) => dispatch(fetchUserWaterTracker(id)),  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TerrariumShow);