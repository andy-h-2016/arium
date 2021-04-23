import React from 'react';
const INTERVAL = 1000 * 10 //TIME IN MILLISECONDS


class SecondsTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {countdown: 0}
    this.setCountdown = this.setCountdown.bind(this);
    this.setCountdown();

  }

  componentDidMount() {
    const id = this.props.currentUser.id || this.props.currentUser._id;
    this.props.fetchUserTerrarium(id);
    this.props.fetchUserWaterTracker(id);

    const timerId = Math.random();
    this.intervalID = setInterval( () => {
      this.calculateTerrariumLevels();
      this.setCountdown();
    }, INTERVAL); 
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    clearInterval(this.countdownID);
  }

  setCountdown() {
    this.setState({countdown: INTERVAL / 1000})
    let countdown = this.state.countdown;
    clearInterval(this.countdownID)

    this.countdownID = setInterval( () => {
      if (countdown > 0) {
        this.setState({countdown: this.state.countdown - 1})
      } else {
        this.setCountdown()
      }
    }, 1000)
  }

  calculateTerrariumLevels() {
    let {waterTracker, terrarium, currentUser} = this.props;
    let daysElapsed = this.daysCounter();
    let isTerrariumMaxed;
    let isTerrariumMin;
    // console.log('daysElapsed', daysElapsed)

    // while (daysElapsed > 0) {
      switch (true) {
        case waterTracker.today >= currentUser.goal:
          let increase = (waterTracker.streak > 1) ? 2 : 1;
          waterTracker.streak += 1;
          if (terrarium.level === 30) {isTerrariumMaxed = true}

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
            
            isTerrariumMin = true
          } else {
            terrarium.level -= 1;
          }

          waterTracker.streak = 0;
          break
      }

      waterTracker.today = 0;
      this.props.updateWaterTracker(waterTracker)
        .then(() => {
          if (isTerrariumMaxed || isTerrariumMin) {
            return
          } else {
            this.props.updateTerrarium(terrarium);
          }
        })
        .then(() => this.forceUpdate());

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

  render() {
    return(
      <div className='timer'>
        <p className='timer-title'>Time to Next Terrarium Update</p>
        <p className='timer-value'>{this.state.countdown}</p>
      </div>
    )
  }

}

export default SecondsTimer;