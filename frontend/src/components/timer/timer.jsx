import React from 'react';

class Timer extends React.Component {
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
}