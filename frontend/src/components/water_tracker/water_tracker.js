import React from 'react';
import { withRouter } from 'react-router-dom';

class WaterTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchUserWaterTracker(this.props.currentUser.id)
  }

  render() {

    return (
      <div>

      </div>
    );
  }

}

export default withRouter(WaterTracker);