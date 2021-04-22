import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  
  return {
    errors: Object.values(errors.session),
    formType: "Sign in",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    processDemo: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    otherForm: (
      <div
        className="otherForm"
        onClick={() => dispatch(openModal("signup"))}
      >
        Register
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
