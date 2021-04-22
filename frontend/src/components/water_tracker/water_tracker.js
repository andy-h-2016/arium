import React from 'react';
import { withRouter } from 'react-router-dom';

class WaterTracker extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Mount", this.props);
    const id = this.props.currentUser.id || this.props.currentUser._id;
    console.log('id: ', id)
    this.props.fetchUser(id);
    this.props.fetchUserTerrarium(id);
    this.props.fetchUserWaterTracker(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser.goal !== this.props.currentUser.goal) {
      this.setState(this.props.currentUser)
    }
  }

  render() {
    console.log('render', this.props)
    let { waterTracker, currentUser, terrarium } = this.props;
    if (!terrarium) return <div></div>
    if (!waterTracker) return <div></div>

    let healthMsg;

    switch (true) {
      case terrarium.health < Math.floor((0.5 * currentUser.goal)) && (terrarium.health !== 0):
        healthMsg = <div id="healthmsg">Start drinking now or else...</div>;
        break;
      case terrarium.health >= Math.floor((0.5 * currentUser.goal)) && (terrarium.health !== currentUser.goal) && !(terrarium.health > currentUser.goal):
        healthMsg = <div id="healthmsg">I know you can do better than this!</div>;
        break;
      case terrarium.health === currentUser.goal:
        healthMsg = <div id="healthmsg">Amazing work... You deserve a drink.</div>;
        break;
      case terrarium.health > currentUser.goal:
        healthMsg = <div id="healthmsg">Alright, you don't want to drown now...</div>;
        break;
      default:
        healthMsg = <div id="healthmsg">Just keep drinking, just keep drinking...</div>;
        break;
    }

    let rank;

    switch (true) {
      case waterTracker.streak > 0 && waterTracker.streak <= 7:
        rank = <div className="ranks">Wet Willie</div>;
        break;
      case waterTracker.streak > 7 && waterTracker.streak <= 15:
        rank = <div className="ranks">Saturated Sally</div>;
        break;
      case waterTracker.streak > 15 && waterTracker.streak <= 23:
        rank = <div className="ranks">Thirsty Thug</div>;
        break;
      case waterTracker.streak > 23 && waterTracker.streak <= 31:
        rank = <div className="ranks">Hydro Homie</div>;
        break;
      case waterTracker.streak > 31:
        rank = <div className="ranks">Moisture Master</div>;
        break;
      default:
        rank = <div className="ranks">Maintain your streaks to rank up!</div>;
        break;
    }

    return (
      <div className="water-tracker-container">
        <div className="water-tracker-header">
          {currentUser.username}'s Water Tracker
        </div>
        <div className="wt-terrarium-title">
          {terrarium.title} 
          <div>Friendly reminder from your Terrarium:{healthMsg}</div>
        </div>
        <div className="water-tracker-goal"> 
          Please drink {currentUser.goal - waterTracker.today}&nbsp;or more cups of water today to grow your wonderful Terrarium.
        </div>
        <div className="water-tracker-total">
          WOW! You've drank {waterTracker.total} of cups water since you've signed up for Arium.
        </div>
        <div className="water-tracker-streak">
          Current Rank: {rank}
        </div>
      </div>
    );
  }

}

export default withRouter(WaterTracker);
