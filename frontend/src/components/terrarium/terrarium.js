import React from 'react';
import { withRouter } from 'react-router-dom';
class Terrarium extends React.Component {
  constructor(props) {
    super(props);
    this.addWater = this.addWater.bind(this);
    this.removeWater = this.removeWater.bind(this);
    this.calculateTerrariumLevels = this.calculateTerrariumLevels.bind(this);
    this.daysCounter = this.daysCounter.bind(this);
  }

  componentDidMount() {
    const id = this.props.currentUser.id || this.props.currentUser._id;
    this.props.fetchUserTerrarium(id)
    this.props.fetchUserWaterTracker(id)

    const timerId = Math.random();
    this.intervalID = setInterval( () => {
      console.log(`tick! timerId: ${timerId}`);
      this.calculateTerrariumLevels();
    }, 5000); 
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


  renderTerra() {
    if (this.props.terrarium && this.props.currentUser) {

      if (this.props.terrarium.level <= 9) {
        //desert
        switch (true) {
          case this.props.terrarium.health < Math.floor((0.5 * this.props.currentUser.goal)) && (this.props.terrarium.health !== 0):
            return (<img className='im-the-terra' src='images/terra-stages/dry-d.gif' alt='dry-d' width="700" height="850"></img>)
          case this.props.terrarium.health >= Math.floor((0.5 * this.props.currentUser.goal)) && (this.props.terrarium.health !== this.props.currentUser.goal) && !(this.props.terrarium.health > this.props.currentUser.goal):
            return (<img className='im-the-terra' src='images/terra-stages/normal-d.gif' alt='normal-d' width="700" height="850"></img>)
          case this.props.terrarium.health >= this.props.currentUser.goal:
            return (<img className='im-the-terra' src='images/terra-stages/wet-d.gif' alt='wet-d' width="700" height="850"></img>)
          default:
            return (<img className='im-the-terra' src='images/terra-stages/normal-d.gif' alt='normal-d' width="700" height="850" ></img>)
        }
      } else if (this.props.terrarium.level < 20 && this.props.terrarium.level >= 10) {
        //oasis
        switch (true) {
          case this.props.terrarium.health < Math.floor((0.5 * this.props.currentUser.goal)) && (this.props.terrarium.health !== 0):
            return (<img className='im-the-terra' src='images/terra-stages/dry-o.gif' alt='dry-o' width="700" height="850"></img>)
          case this.props.terrarium.health >= Math.floor((0.5 * this.props.currentUser.goal)) && (this.props.terrarium.health !== this.props.currentUser.goal) && !(this.props.terrarium.health > this.props.currentUser.goal):
            return (<img className='im-the-terra' src='images/terra-stages/normal-o.gif' alt='normal-o' width="700" height="850"></img>)
          case this.props.terrarium.health >= this.props.currentUser.goal:
            return (<img className='im-the-terra' src='images/terra-stages/wet-o.gif' alt='wet-o' width="700" height="850"></img>)
          default:
            return (<img className='im-the-terra' src='images/terra-stages/normal-o.gif' alt='normal-o' width="700" height="850"></img>)
        }
      } else {
        //forest
        switch (true) {
          case this.props.terrarium.health < Math.floor((0.5 * this.props.currentUser.goal)) && (this.props.terrarium.health !== 0):
            return (<img className='im-the-terra' src='images/terra-stages/dry-f.gif' alt='dry-f' width="700" height="850"></img>)
          case this.props.terrarium.health >= Math.floor((0.5 * this.props.currentUser.goal)) && (this.props.terrarium.health !== this.props.currentUser.goal) && !(this.props.terrarium.health > this.props.currentUser.goal):
            return (<img className='im-the-terra' src='images/terra-stages/normal-f.gif' alt='normal-f' width="700" height="850"></img>)
          case this.props.terrarium.health >= this.props.currentUser.goal:
            return (<img className='im-the-terra' src='images/terra-stages/wet-f.gif' alt='wet-f' width="700" height="850"></img>)
          default:
            return (<img className='im-the-terra' src='images/terra-stages/normal-f.gif' alt='normal-f' width="700" height="850"></img>)
        };
      }
    }

  };

  addWater(e) {
    e.preventDefault()
    e.stopPropagation()
    let terrarium = {
      ...this.props.terrarium,
      health: this.props.terrarium.health + 1,
    }
    let waterTracker = {
      ...this.props.waterTracker,
      total: this.props.waterTracker.total + 1,
      today: this.props.waterTracker.today + 1,
      delta: +1
    }
    this.props.updateWaterTracker(waterTracker)
      .then(() => this.props.updateTerrarium(terrarium))
      .then(() => this.forceUpdate())
  }

  removeWater(e) {
    e.preventDefault()
    e.stopPropagation()
    let terrarium = {
      ...this.props.terrarium,
      health: this.props.terrarium.health - 1,
    }
    let waterTracker = {
      ...this.props.waterTracker,
      total: this.props.waterTracker.total - 1,
      today: this.props.waterTracker.today - 1,
      delta: -1
    }
    this.props.updateWaterTracker(waterTracker)
      .then(() => this.props.updateTerrarium(terrarium))
      .then(() => this.forceUpdate())
  }

  renderStatus() {
    if (this.props.terrarium && this.props.waterTracker) {
      return (
        <div className='stat-innerbox'>
          <div className='terra-row'>
            <p>goal</p>
            <p>{this.props.currentUser.goal}</p>
          </div>
          <div className='terra-row'>
            <p>cups of water today</p>
            <p>{this.props.waterTracker.today}</p>
          </div>
          <div className='terra-row'>
            <p>terrarium health</p>
            <p>{this.props.terrarium.health}</p>
          </div>
          <div className='terra-row'>
            <p>terraruim level</p>
            <p>{this.props.terrarium.level}</p>
          </div>
        </div>
      )
    }

  }
  //level, goal, today, health 

  render() {
    return (
      <div className='terra-page'>
        <h1 className='welcome-mes'>this is {this.props.currentUser.username}'s terrerium</h1>
        <div></div>
        <div className='on-shelf'>
          {this.renderTerra()}
          <div className='status-terra-con'>
            {this.renderStatus()}
            <div className='terra-btn-con'>
              <button type='click' className='water-btn' onClick={this.addWater}>Add Water</button>
              <button type='click' className='water-btn' onClick={this.removeWater}>Oops</button>
            </div>
          </div>
        </div>
        <div className='im-shelf'></div>





      </div>

    );
  }

}

export default withRouter(Terrarium);