import React from 'react';
import { withRouter } from 'react-router-dom';


class Terrarium extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount(){
    // this.props.fetchUserTerrarium(this.props.pageId)
    // this.props.fetchUserWaterTracker(this.props.pageId)
  }

  renderTerra(){
    
  
  }

  render() {
//  console.log(this.props)
      return (
        <div className='terra-page'>
          <h1 className='welcome-mes'>this is {this.props.currentUser.username}'s terrerium</h1>
          <div className='im-the-terra'></div>
          <div className='im-shelf'></div>
        </div>
      );
    }
 
}

export default withRouter(Terrarium);