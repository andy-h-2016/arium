import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser
    }
    
  
    
    render() {

          return (
            <div className="user-show-container">
              <div className="user-show-greeting">
                Welcome {this.props.currentUser.username}!             
              </div> 
              <div className="edit-goals">

              </div>
            </div>
          );
        }
     
}

export default Profile;