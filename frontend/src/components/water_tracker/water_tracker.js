import React from 'react';
import { withRouter } from 'react-router-dom';

class WaterTracker extends React.Component {


  componentDidMount() {
    this.props.fetchUserTerrarium(this.props.currentUser.id);
    this.props.fetchUserWaterTracker(this.props.currentUser.id);
  }

  

  render() {
    let { waterTrackers, currentUser, terrarium } = this.props;
    if (!terrarium) return <div></div>
    console.log(terrarium);
    
    let healthMsg;

    switch (true) {
      case terrarium.health <= Math.floor((0.5 * currentUser.goal)):
        healthMsg = <p id="healthmsg">Not Healthy</p>;
        break;
      case terrarium.health >= Math.floor((0.5 * currentUser.goal)):
        healthMsg = <p id="healthmsg">Cool</p>;
        break;
      case terrarium.health === currentUser.goal:
        healthMsg = <p id="healthmsg">Amazing</p>;
        break;
      default:
        healthMsg = <p id="healthmsg">Just keep drinking, just keep drinking...</p>;
        break;
    }


    return (
      <div className="water-tracker-show-container">
        <div className="water-tracker-show-header">
          {currentUser.username}'s Water Tracker
        </div>
        <div className="wt-terrarium-title">
          {terrarium.title}{healthMsg}
        </div>
      </div>
    );
  }

}

export default withRouter(WaterTracker);
