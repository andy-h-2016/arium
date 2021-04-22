import React from 'react';
import { withRouter } from 'react-router-dom';
class TerrariumShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const id = this.props.showUser.id || this.props.showUser._id;
    this.props.fetchUserTerrarium(id)
    this.props.fetchUserWaterTracker(id)
  }


  renderTerra() {
    if (this.props.terrarium && this.props.showUser) {

      if (this.props.terrarium.level <= 9) {
        //desert
        switch (true) {
          case this.props.terrarium.health < Math.floor((0.5 * this.props.showUser.goal)) && (this.props.terrarium.health !== 0):
            return (<img className='im-the-terra' src='images/terra-stages/dry-d.gif' alt='dry-d' width="700" height="850"></img>)
          case this.props.terrarium.health >= Math.floor((0.5 * this.props.showUser.goal)) && (this.props.terrarium.health !== this.props.showUser.goal) && !(this.props.terrarium.health > this.props.showUser.goal):
            return (<img className='im-the-terra' src='images/terra-stages/normal-d.gif' alt='normal-d' width="700" height="850"></img>)
          case this.props.terrarium.health >= this.props.showUser.goal:
            return (<img className='im-the-terra' src='images/terra-stages/wet-d.gif' alt='wet-d' width="700" height="850"></img>)
          default:
            return (<img className='im-the-terra' src='images/terra-stages/normal-d.gif' alt='normal-d' width="700" height="850" ></img>)
        }
      } else if (this.props.terrarium.level < 20 && this.props.terrarium.level >= 10) {
        //oasis
        switch (true) {
          case this.props.terrarium.health < Math.floor((0.5 * this.props.showUser.goal)) && (this.props.terrarium.health !== 0):
            return (<img className='im-the-terra' src='images/terra-stages/dry-o.gif' alt='dry-o' width="700" height="850"></img>)
          case this.props.terrarium.health >= Math.floor((0.5 * this.props.showUser.goal)) && (this.props.terrarium.health !== this.props.showUser.goal) && !(this.props.terrarium.health > this.props.showUser.goal):
            return (<img className='im-the-terra' src='images/terra-stages/normal-o.gif' alt='normal-o' width="700" height="850"></img>)
          case this.props.terrarium.health >= this.props.showUser.goal:
            return (<img className='im-the-terra' src='images/terra-stages/wet-o.gif' alt='wet-o' width="700" height="850"></img>)
          default:
            return (<img className='im-the-terra' src='images/terra-stages/normal-o.gif' alt='normal-o' width="700" height="850"></img>)
        }
      } else {
        //forest
        switch (true) {
          case this.props.terrarium.health < Math.floor((0.5 * this.props.showUser.goal)) && (this.props.terrarium.health !== 0):
            return (<img className='im-the-terra' src='images/terra-stages/dry-f.gif' alt='dry-f' width="700" height="850"></img>)
          case this.props.terrarium.health >= Math.floor((0.5 * this.props.showUser.goal)) && (this.props.terrarium.health !== this.props.showUser.goal) && !(this.props.terrarium.health > this.props.showUser.goal):
            return (<img className='im-the-terra' src='images/terra-stages/normal-f.gif' alt='normal-f' width="700" height="850"></img>)
          case this.props.terrarium.health >= this.props.showUser.goal:
            return (<img className='im-the-terra' src='images/terra-stages/wet-f.gif' alt='wet-f' width="700" height="850"></img>)
          default:
            return (<img className='im-the-terra' src='images/terra-stages/normal-f.gif' alt='normal-f' width="700" height="850"></img>)
        };
      }
    }

  };




  // renderStatus() {
  //   if (this.props.terrarium && this.props.waterTracker) {
  //     return (
  //       <div className='stat-innerbox'>
  //         <div className='terra-row'>
  //           <p>goal</p>
  //           <p>{this.props.showUser.goal}</p>
  //         </div>
  //         <div className='terra-row'>
  //           <p>cups of water today</p>
  //           <p>{this.props.waterTracker.today}</p>
  //         </div>
  //         <div className='terra-row'>
  //           <p>terrarium health</p>
  //           <p>{this.props.terrarium.health}</p>
  //         </div>
  //         <div className='terra-row'>
  //           <p>terraruim level</p>
  //           <p>{this.props.terrarium.level}</p>
  //         </div>
  //       </div>
  //     )
  //   }
  // }


  render() {
    console.log(this.props)
    return (
      <div className='terra-page'>
        <h1 className='welcome-mes'>This is {this.props.terrarium.title}</h1>
        <div></div>
        <div className='on-shelf'>
          {this.renderTerra()}
          {/* <div className='status-terra-con'>
            {this.renderStatus()}
          </div> */}
        </div>
        <div className='im-shelf'></div>

      </div>

    );
  }

}

export default withRouter(TerrariumShow);