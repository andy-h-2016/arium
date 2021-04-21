import React from 'react';
import { receiveCurrentUser } from '../../actions/session_actions';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);      
      this.props.updateUser(user.id, user)
      .then(this.props.receiveCurrentUser(user))
    }
    
    update(field) {
      return (e) => this.setState({ [field]: e.currentTarget.value });
    }
    
    render() {
      console.log(this.state.bio)
          return (
            <div className="user-edit-container">
              <div className="user-edit-greeting">
                Welcome {this.state.username}!             
              </div> 
              <form onSubmit={this.handleSubmit}> 

              <div className="edit-goals">
                <input    
                type="text"
                onChange={this.update("goal")}
                value={this.state.goal}
                >                
                </input>
              
              </div>
              <div className="edit-bio">
                <br/>      
                <input    
                type="text"
                onChange={this.update("bio")}
                value={this.state.bio}
                >          
                </input>              
              </div> 
              
              <div className="edit-submit-button">
                <button type='submit'>
                </button>
              </div>           
              </form>

            </div>
          );
        }
     
}

export default Profile;