import { connect } from 'react-redux';
import Profile from './profile';
import {updateUser, receiveCurrentUser, fetchUser} from '../../actions/session_actions'
const mapStateToProps = (state) => {
  return {   
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (userId, user) =>dispatch(updateUser(userId, user)),
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);