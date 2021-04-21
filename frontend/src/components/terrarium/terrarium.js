import React from 'react';
import { withRouter } from 'react-router-dom';


class Terrarium extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }



  render() {
 console.log(this.props.currentUser.username)
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