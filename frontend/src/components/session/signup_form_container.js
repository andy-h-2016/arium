import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { login, signup, clearSessionErrors} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session),
    formType: "Register",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    processDemo: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    otherForm: (
      <div
        className="otherForm"
        onClick={() => dispatch(openModal("login"))}
      >
        
       Sign in
       
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
