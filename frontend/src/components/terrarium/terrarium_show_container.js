import { connect } from "react-redux";
import TerrariumShow from "./terrarium_show";
import { fetchUserTerrarium } from "../../actions/terrarium_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    terrarium: Object.values(state.entities.terrariums).find(
      (terrarium) => terrarium.userId === ownProps.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserTerrarium: (userId) => dispatch(fetchUserTerrarium(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TerrariumShow);
