import React from 'react';
import { withRouter } from 'react-router-dom';
class Terrarium extends React.Component {
  constructor(props) {
    super(props);
    this.addWater = this.addWater.bind(this);
    this.removeWater = this.removeWater.bind(this);
  }

  componentDidMount() {
    const id = this.props.currentUser.id || this.props.currentUser._id;
    this.props.fetchUserTerrarium(id)
    this.props.fetchUserWaterTracker(id)
  }


  renderTerra() {
    if (this.props.terrarium && this.props.currentUser) {

      if (this.props.terrarium.level <= 9) {
        //desert
        switch (true) {
          case this.props.terrarium.health < Math.floor((0.5 * this.props.currentUser.goal)) :
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
          case this.props.terrarium.health < Math.floor((0.5 * this.props.currentUser.goal)) :
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
          case this.props.terrarium.health < Math.floor((0.5 * this.props.currentUser.goal)) :
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
    if(this.props.waterTracker.today >= 10){return}

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
    if(this.props.waterTracker.today <= 0){return}
    this.props.updateWaterTracker(waterTracker)
      .then(() => this.props.updateTerrarium(terrarium))
      .then(() => this.forceUpdate())
  }

  renderStatus() {
    if (this.props.terrarium && this.props.waterTracker) {
      return (
        <div className='stat-innerbox'>
          <div className='terra-row'>
            <p>Goal</p>
            <p>{this.props.currentUser.goal}</p>
          </div>
          <div className='terra-row'>
            <p>Cups of water today</p>
            <p>{this.props.waterTracker.today}</p>
          </div>
          <div className='terra-row'>
            <p>Terrarium health</p>
            <p>{this.props.terrarium.health}</p>
          </div>
          <div className='terra-row'>
            <p>Terrarium level</p>
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
        <h1 className='welcome-mes'>{this.props.currentUser.username}'s Terrarium</h1>
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