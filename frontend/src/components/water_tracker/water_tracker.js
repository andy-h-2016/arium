import React from 'react';
import {Link, withRouter } from 'react-router-dom';


class WaterTracker extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser.goal !== this.props.currentUser.goal) {
      this.setState(this.props.currentUser)
    }

    if (prevProps.terrarium && (prevProps.terrarium.level !== this.props.terrarium.level)) {
      this.setState(this.props.currentUser)
    }
  }

  render() {
    let { waterTracker, currentUser, terrarium } = this.props;
    if (!terrarium) return <div></div>
    if (!waterTracker) return <div></div>

    let healthMsg;

    switch (true) {
      case waterTracker.today === 0:
        healthMsg = <div id="healthmsg">Just keep drinking, just keep drinking...</div>;
        break;
      case waterTracker.today < Math.floor((0.5 * currentUser.goal)):
        healthMsg = <div id="healthmsg">Good job, keep this momentum going!</div>;
        break;
      case waterTracker.today >= Math.floor((0.5 * currentUser.goal)) && (waterTracker.today < currentUser.goal):
        healthMsg = <div id="healthmsg">You're almost there, you can do this!</div>;
        break;
      case waterTracker.today >= currentUser.goal:
        healthMsg = <div id="healthmsg">Amazing work... You deserve a drink.</div>;
        break;
      default:
        break;
    }

    let rankOne;
    let rankTwo;
    let rankThree;
    let rankFour;
    let rankFive;

    switch (true) {
      case waterTracker.streak >= 0 && waterTracker.streak <= 7:
        rankOne = 'rankone';
        break;
      case waterTracker.streak > 7 && waterTracker.streak <= 15:
        rankTwo = 'ranktwo';
        break;
      case waterTracker.streak > 15 && waterTracker.streak <= 23:
        rankThree = 'rankthree';
        break;
      case waterTracker.streak > 23 && waterTracker.streak <= 31:
        rankFour = 'rankfour';
        break;
      case waterTracker.streak > 31:
        rankFive = 'rankfive';
        break;
      default:
        break;
    }


    let drinks = currentUser.goal - waterTracker.today
    if (drinks <= 0) {
      drinks = 0
    }
    return (
      <div className="water-tracker-container">
          
          <div className="water-info-container">
        <div className="water-tracker-header">
          <div className="wt-header-title">
            Water Tracker
          </div>
<div className="water-tooltip">
<div className="water-info-Link">
<Link to={'/instruction'}>
  <div className="water-info-link">
  <i className="fas fa-info-circle water-fa-info-circle"></i>
  </div>
</Link>
    <span className="water-tooltiptext">Information</span>
</div>
</div>
</div>
        </div>

        <div className='two-of-items1'>

          <div className="wt-terrarium-title">
            <div className='frame-mgn'>
              <div className="terr-title-text">
                {terrarium.title}
              </div>
              <div className='w-comment'>A message from your Terrarium:{healthMsg}</div>
            </div>
          </div>

          <div className="water-tracker-goal">
            <div className='frame-mgn'>
              <div className="terr-title-text2"> Please drink  </div>
              <div className="terr-title-text num-ani" > {drinks} </div>
              <div className='w-comment'> more cups of water today to grow your wonderful Terrarium. </div>
            </div>
          </div>

        </div>


        <div className='two-of-items2'>

          <div className="water-tracker-total">
            <div className='frame-mgn'>
              <div className='comment-l' > WOW!</div>
              <div className='comment-m'> You've drank </div>
              <div className='comment-l num-ani'> {waterTracker.total} </div>
              <div className='comment-m'> cups of water </div>
              <div className='comment-s'>since you've signed up for </div>
              <div className='comment-l'>Arium</div>
            </div>
          </div>

          <div className="water-tracker-streak">
            <div className='frame-mgn'>
              <div className="currentrank">Maintain your streaks to rank up!</div>
              <div className="rank-container">
                <div className="streak-levels">
                  <div className={`rank-level ${rankOne}`}>0</div>
                  <div className={`rank-level ${rankTwo}`}>8</div>
                  <div className={`rank-level ${rankThree}`}>16</div>
                  <div className={`rank-level ${rankFour}`}>24</div>
                  <div className={`rank-level ${rankFive}`}>32</div>
                </div>
                <div className="rank-titles">
                  <div className={`currentrank ${rankOne}`}>Wet Willie</div>
                  <div className={`currentrank ${rankTwo}`}>Saturated Sally</div>
                  <div className={`currentrank ${rankThree}`}>Thirsty Thug</div>
                  <div className={`currentrank ${rankFour}`}>Hydro Homie</div>
                  <div className={`currentrank ${rankFive}`}>Moisture Master</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(WaterTracker);
