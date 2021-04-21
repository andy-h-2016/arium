import { connect } from 'react-redux';
import Profile from './profile';
import {updateUser} from '../../actions/session_actions'
const mapStateToProps = (state) => {
  return {   
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (userId) =>dispatch(updateUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);