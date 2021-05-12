import React from 'react';
import {daysCounter} from '../../util/time_operations';
const INTERVAL = 1000 * 60; //60 seconds converted to milliseconds

class DayTimer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {countdown: 0};
    // this.setCountdown = this.setCountdown.bind(this);
    // this.setCountdown();
    this.days = this.days.bind(this);
    this.levelCalculatedOnLogin = false;
  }

  componentDidMount() {
    // const id = this.props.currentUser.id || this.props.currentUser._id;
    // this.props.fetchUserTerrarium(id)
    //   .then(result => console.log('result',result))
    // this.props.fetchUserWaterTracker(id);
    const timerId = Math.random();
    this.intervalID = setInterval( () => {
      console.log(`tick! timerId: ${timerId}`);
      this.calculateTerrariumLevels();
    }, INTERVAL); 

  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //visual clock
  // setCountdown() {
  //   this.setState()
  //   let countdown = this.state.countdown;
  //   clearInterval(this.countdownID)

  //   this.countdownID = setInterval( () => {
  //     if (countdown > 0) {
  //       this.setState({countdown: this.state.countdown - 1})
  //     } else {
  //       this.setCountdown()
  //     }
  //   }, 1000)
  // }


  calculateTerrariumLevels() {
    
    let {waterTracker, terrarium, currentUser} = this.props;
    let daysElapsed = this.days();

    if (daysElapsed > 0) {
      switch (true) {
        case waterTracker.today >= currentUser.goal:
          let increase = (waterTracker.streak > 1) ? 2 : 1;
          waterTracker.streak += 1;
          if (terrarium.level + increase > 30) {
            terrarium.level = 30;
          } else {
            terrarium.level += increase;
          }
          break
        case waterTracker.today >= Math.floor(.5 * currentUser.goal):
          //terrariumlevel += 0; no change.
          waterTracker.streak = 0;
          break
        case waterTracker.today < Math.floor(.5 * currentUser.goal):
          if (terrarium.level === 1) {
            terrarium.level = 1;
          } else {
            terrarium.level -= 1;
          }
          waterTracker.streak = 0;
          break
      }
      
      //if user has not been active for over 2 days
      if (daysElapsed > 1) {
        //Lose a level for each day not active. 
        //Subtract a day since the first day's results are calculated in the switch statement above
        const levelsDecrease = daysElapsed - 1;
        if (terrarium.level - levelsDecrease < 1) {
          terrarium.level = 1; 
        } else {
          terrarium.level -= levelsDecrease;
        }
        waterTracker.streak = 0;
      }

      waterTracker.today = 0;
      this.props.updateWaterTracker(waterTracker)
        .then(() => this.props.updateTerrarium(terrarium))
        .then(() => this.forceUpdate());   
    }
  }

  days() {
    let terrarium = this.props.terrarium;
    const currentDate = new Date();
    const lastActiveDate = new Date(terrarium.lastActiveDate);
    console.log('terrarium.lastActiveDate', terrarium.lastActiveDate)
    // const lastActiveDate = new Date(localStorage.getItem('lastActiveDate'));
    let daysElapsed;

    if (lastActiveDate) {
      daysElapsed = daysCounter(lastActiveDate, currentDate)

      // daysElapsed = msElapsed / (1000 * 60 * 60 * 24) //convert ms to days
    } else {
     daysElapsed = 0; 
    }
    
    terrarium.lastActiveDate = currentDate;
    this.props.updateTerrarium(terrarium);
    console.log('days Elapsed: ', daysElapsed)
    console.log('time: ', currentDate)

    // localStorage.setItem('lastActiveDate', currentDate);
    

    return daysElapsed;
  }

  render() {
    return(
      <div></div>
    )
  }

}

export default DayTimer;