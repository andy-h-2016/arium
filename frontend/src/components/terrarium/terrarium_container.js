import { connect } from 'react-redux';
import Terrarium from './terrarium';

const mapStateToProps = (state) => {
  // console.log(state.session.user.username)
  return {
    currentUser: state.session.user,   
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Terrarium);