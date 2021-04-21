import React from 'react';
import { withRouter } from 'react-router-dom';

class WaterTracker extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserWaterTracker(this.props.currentUser.id)
  }

  render() {
    const { WaterTrackers, currentUser } = this.props;

    return (
      <div className="water-tracker-show-container">
        <div className="water-tracker-show-header">
          <h1>{currentUser.username}</h1>
        </div>
      </div>
    );
  }

}

export default withRouter(WaterTracker);