import { connect } from 'react-redux';
import OverallConsumption from './overall_consumption';
import { fetchOverallConsumptions } from '../../actions/overall_consumption_actions';

const mapStateToProps = (state) => ({
  overallConsumptions: Object.values(state.entities.overallConsumptions)[0]
});

const mapDispatchToProps = dispatch => ({
  fetchOverallConsumptions: () => dispatch(fetchOverallConsumptions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverallConsumption);