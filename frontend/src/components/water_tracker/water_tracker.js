import React from 'react';
import { withRouter } from 'react-router-dom';

class WaterTracker extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTerrariumLevels = this.calculateTerrariumLevels.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
    this.addCup = this.addCup.bind(this);
    this.subtractCup = this.subtractCup.bind(this);
  }

  componentDidMount() {
    console.log("Mount", this.props);
    const id = this.props.currentUser.id || this.props.currentUser._id;
    console.log('id: ', id)
    this.props.fetchUser(id);
    this.props.fetchUserTerrarium(id);
    this.props.fetchUserWaterTracker(id);

    const timerId = Math.random();
    this.intervalID = setInterval( () => {
      console.log(`tick! timerId: ${timerId}`);
      this.calculateTerrariumLevels();
    }, 5000); 
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
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

  calculateTerrariumLevels() {
    let {waterTracker, terrarium, currentUser} = this.props;
    let daysElapsed = this.daysCounter();
    console.log('daysElapsed', daysElapsed)

    // while (daysElapsed > 0) {
      switch (true) {
        case waterTracker.today >= Math.floor(.75 * currentUser.goal):
          terrarium.level += 1;
          this.props.updateTerrarium(terrarium)
            .then(() => this.props.updateWaterTracker({...this.props.waterTracker, today: 0}))
            .then(() => this.forceUpdate());
          break
        case waterTracker.today >= Math.floor(.5 * currentUser.goal):
          break
        case waterTracker.today < Math.floor(.7 * currentUser.goal):
          terrarium.level -= 1;
          this.props.updateTerrarium(terrarium)
            .then(() => this.props.updateWaterTracker({...this.props.waterTracker, today: 0}))
            .then(() => this.forceUpdate())
          break
      }
      // daysElapsed -= 1;
    // }
    // terrarium.level += 1;
    // this.props.updateTerrarium(terrarium)
    //   .then(() => this.forceUpdate())
  }

  daysCounter() {
    const currentDate = new Date();
    const lastActiveDate = new Date(localStorage.getItem('lastActiveDate'));
    let daysElapsed;

    if (lastActiveDate) {
      // const lastActiveDateSansTime = new Date(lastActiveDate.getFullYear(), lastActiveDate.getMonth(), lastActiveDate.getDate());
      // const currentDateSansTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      // daysElapsed = (currentDateSansTime - lastActiveDateSansTime) / (1000 * 60 * 60 * 24);

      const msElapsed = currentDate.getTime() - lastActiveDate.getTime();
      // daysElapsed = msElapsed / (1000 * 60 * 60 * 24) //convert ms to days
      daysElapsed = msElapsed / (1000) //convert ms to seconds
    } else {
     daysElapsed = 0; 
    }

    localStorage.setItem('lastActiveDate', currentDate);

    return daysElapsed;
  }

  addCup(e) {
    e.preventDefault();
    e.stopPropagation();
    let waterTracker = {
      ...this.props.waterTracker,
      total: this.props.waterTracker.total + 1,
      today: this.props.waterTracker.today + 1,
    }

    this.props.updateWaterTracker(waterTracker)
      .then(() => this.forceUpdate())
  }

  subtractCup(e) {
    e.preventDefault();
    e.stopPropagation();
    let waterTracker = {
      ...this.props.waterTracker,
      total: this.props.waterTracker.total - 1,
      today: this.props.waterTracker.today - 1,
    }

    this.props.updateWaterTracker(waterTracker)
      .then(() => this.forceUpdate())
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
const drinks = currentUser.goal - waterTracker.today
    return (
      <div className="water-tracker-container">
        <div className="water-tracker-header">
           <div>
          Water Tracker
          </div>
          
         
        </div>
        <div className="wt-terrarium-title">
          <div className="terr-title-text">{terrarium.title}</div>
          <div>Friendly reminder from your Terrarium:{healthMsg}</div>
        </div>

        <div className="water-tracker-goal">      
          <div className="please">Today's Stats</div>
          <div className="drinks">{`${waterTracker.today} / ${currentUser.goal} cups`}</div>
          <div>{`${drinks} more cups of water today to grow your wonderful Terrarium!`}</div>
          <button onClick={e => this.addCup(e)} type="click">Drink cup</button>      
          <button onClick={e => this.subtractCup(e)} type="click">Oops (subtract cup)</button>      
        </div>

        <div className="water-tracker-total">
          <div>
          WOW! You've drank 
          </div>
          <div>
          {waterTracker.total}
            </div>
            <div>
          of cups water since you've signed up for Arium.            
            </div>
        </div>
        <div className="water-tracker-streak">
          <div className="currentrank">
          Current Rank: 
          </div>
          {rank}
        </div>

        <div>
          <div>Terrarium level</div>
          <div>{terrarium.level}</div>
        </div>
      </div>
    );
  }

}

export default withRouter(WaterTracker);
