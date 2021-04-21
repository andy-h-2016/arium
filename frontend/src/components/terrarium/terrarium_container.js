import { connect } from 'react-redux';
import Terrarium from './terrarium';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,   
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Terrarium);