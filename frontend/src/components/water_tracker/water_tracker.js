import React from 'react';
import { withRouter } from 'react-router-dom';

class WaterTracker extends React.Component {


  componentDidMount() {
    this.props.fetchUserTerrarium(this.props.currentUser._id);
    this.props.fetchUserWaterTracker(this.props.currentUser._id);
  }

  render() {
    let { waterTrackers, currentUser, terrarium } = this.props;
    if (!terrarium) return <div></div>
    console.log(terrarium);
    return (
      <div className="water-tracker-show-container">
        <div className="water-tracker-show-header">
          {currentUser.username}'s Water Tracker
        </div>
        <div className="wt-terrarium-title">
          Your {terrarium.title}
        </div>
      </div>
    );
  }

}

export default withRouter(WaterTracker);
