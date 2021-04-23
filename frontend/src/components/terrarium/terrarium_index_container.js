import { connect } from 'react-redux';
import TerrariumIndex from './terrarium_index';
import {
  fetchAllTerrariums
} from '../../actions/terrarium_actions';

const mapStateToProps = ({ entities: { terrariums } }) => ({
  terrariums: Object.values(terrariums)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTerrariums: () => dispatch(fetchAllTerrariums()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TerrariumIndex);
