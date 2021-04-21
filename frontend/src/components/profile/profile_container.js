import { connect } from 'react-redux';
import Profile from './profile';
import {updateUser, receiveCurrentUser} from '../../actions/session_actions'
const mapStateToProps = (state) => {
  return {   
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (userId, user) =>dispatch(updateUser(userId, user)),
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);