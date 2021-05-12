import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SideBar from './sidebar';
import { updateTerrarium } from '../../actions/terrarium_actions';

const mapStateToProps = state => {
  const currentUser = state.session.user
  let id, terrarium;
  if (currentUser) {
    id = currentUser.id || currentUser._id;
    terrarium = Object.values(state.entities.terrariums).find(terrarium => terrarium.userId === id);
  } else {
    terrarium = null;
  }

  return {
    loggedIn: state.session.isAuthenticated,
    currentUser,
    terrarium
  }
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  updateTerrarium: terrarium => dispatch(updateTerrarium(terrarium))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);