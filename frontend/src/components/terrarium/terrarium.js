import React from 'react';
import { withRouter } from 'react-router-dom';
class Terrarium extends React.Component {
  constructor(props) {
    super(props);
    // this.state.terrarium = this.props.terrarium;
    // this.state.waterTracker = this.props.waterTracker;
  }

  componentDidMount() {
    this.props.fetchUserTerrarium(this.props.currentUser.id)
    this.props.fetchUserWaterTracker(this.props.currentUser.id)
  }
  // switch (true) {
  //   case terrarium.health < Math.floor((0.5 * currentUser.goal)) && (terrarium.health !== 0):
  //     healthMsg = <div id="healthmsg">Start drinking now or else...</div>;
  //     break;
  //   case terrarium.health >= Math.floor((0.5 * currentUser.goal)) && (terrarium.health !== currentUser.goal) && !(terrarium.health > currentUser.goal):
  //     healthMsg = <div id="healthmsg">I know you can do better than this!</div>;
  //     break;
  //   case terrarium.health === currentUser.goal:
  //     healthMsg = <div id="healthmsg">Amazing work... You deserve a drink</div>;
  //     break;
  //   case terrarium.health > currentUser.goal:
  //     healthMsg = <div id="healthmsg">Alright, you don't want to drown now...</div>;
  //     break;
  //   default:
  //     healthMsg = <div id="healthmsg">Just keep drinking, just keep drinking...</div>;
  //     break;
  // }
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
    console.log('t', this.props)

  };

  addWater() {
    this.props.updateWaterTracker(this.state.waterTracker.today)
    this.props.updateTerrarium(this.state.terrarium.health)

    // console.log('t', this.props)


  }


  render() {
    return (
      <div className='terra-page'>
        <h1 className='welcome-mes'>this is {this.props.currentUser.username}'s terrerium</h1>
        {/* <div className='terra-container'>
          </div> */}
        {this.renderTerra()}
        <div className='im-shelf'></div>

        <div className='terra-btn-con'>
          <button type='submit' className='water-btn' onClick={this.addWater}>Add</button>
          <button type='submit' className='water-btn' onClick={this.removeWater}>Decrement</button>
        </div>
      </div>


    );
  }

}

export default withRouter(Terrarium);