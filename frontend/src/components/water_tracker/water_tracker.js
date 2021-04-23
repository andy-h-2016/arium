import React from 'react';
import { withRouter } from 'react-router-dom';
import OverallConsumptionContainer from '../overall_consumption/overall_consumption_container';

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
    console.log('previosuly', prevProps)
    if (prevProps.currentUser.goal !== this.props.currentUser.goal) {
      this.setState(this.props.currentUser)
    }

    if (prevProps.terrarium && (prevProps.terrarium.level !== this.props.terrarium.level)) {
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
    let drinks = currentUser.goal - waterTracker.today
    if (drinks <= 0) {
      drinks = 0
    }
    return (
      <div className="water-tracker-container">
        <div className="water-tracker-header">
          <div>
            Water Tracker
          </div>
        </div>

        <div className='two-of-items1'>

          <div className="wt-terrarium-title">
            <div className='frame-mgn'>
              <div className="terr-title-text">
                {terrarium.title}
              </div>
              <div className='w-comment'>Friendly reminder from your Terrarium:{healthMsg}</div>
            </div>
          </div>

          <div className="water-tracker-goal">
            <div className='frame-mgn'>
              <div className="terr-title-text"> Please drink  </div>
              <div className="terr-title-text"> {drinks} </div>
              <div className='w-comment'> more cups of water today to grow your wonderful Terrarium. </div>
            </div>
          </div>

        </div>


        <div className='two-of-items2'>

          <div className="water-tracker-total">
            <div className='frame-mgn'>
              <div className='comment-l' > WOW!</div>
              <div className='comment-m'> You've drank </div>
              <div className='comment-l'> {waterTracker.total} </div>
              <div className='comment-m'> of cups water </div>
              <div className='comment-s'>since you've signed up for </div>
              <div className='comment-l'>Arium</div>
            </div>
          </div>

          <div className="water-tracker-streak">
            <div className='frame-mgn'>
              <div className="currentrank"> Current Rank: </div>
              <p className="currentrank">{rank} </p>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default withRouter(WaterTracker);
