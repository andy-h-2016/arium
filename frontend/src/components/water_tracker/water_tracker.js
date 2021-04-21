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
          {currentUser.username}'s Water Tracker
        </div>
        <div className="wt-terrarium-title">
          Put Terrariums.userId 
        </div>
      </div>
    );
  }

}

export default withRouter(WaterTracker);
