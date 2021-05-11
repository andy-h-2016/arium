import React from 'react';
import {daysCounter} from '../../../../helper/time_operations';

class SecondsTimer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.currentUser.id || this.props.currentUser._id;
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

  calculateTerrariumLevels() {
    let {waterTracker, terrarium, currentUser} = this.props;
    let daysElapsed = this.days();
    // console.log('daysElapsed', daysElapsed)

    // while (daysElapsed > 0) {
      switch (true) {
        case waterTracker.today >= currentUser.goal:
          let increase = (waterTracker.streak > 1) ? 2 : 1;
          waterTracker.streak += 1;
          terrarium.level += increase;
          break
        case waterTracker.today >= Math.floor(.5 * currentUser.goal):
          //terrariumlevel += 0; no change.
          waterTracker.streak = 0;
          break
        case waterTracker.today < Math.floor(.5 * currentUser.goal):
          terrarium.level -= 1;
          waterTracker.streak = 0;
          break
      }

      waterTracker.today = 0;
      this.props.updateTerrarium(terrarium)
        .then(() => this.props.updateWaterTracker(waterTracker))
        .then(() => this.forceUpdate());

      // daysElapsed -= 1;
    // }
    // terrarium.level += 1;
    // this.props.updateTerrarium(terrarium)
    //   .then(() => this.forceUpdate())
  }

  days() {
    const currentDate = new Date();
    const lastActiveDate = new Date(localStorage.getItem('lastActiveDate'));
    let daysElapsed;

    if (lastActiveDate) {
      daysElapsed = daysCounter(lastActiveDate, currentDate)

      // daysElapsed = msElapsed / (1000 * 60 * 60 * 24) //convert ms to days
    } else {
     daysElapsed = 0; 
    }

    localStorage.setItem('lastActiveDate', currentDate);

    return daysElapsed;
  }

  render() {
    return(
      <div></div>
    )
  }

}

export default SecondsTimer;