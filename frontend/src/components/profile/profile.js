import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.updateUser(user.id);
     
    }
    
    update(field) {
      return (e) => this.setState({ [field]: e.currentTarget.value });
    }
    
    render() {

          return (
            <div className="user-edit-container">
              <div className="user-edit-greeting">
                Welcome {this.props.currentUser.username}!             
              </div> 
              <div className="edit-goals">
                <input    
                type="text"
                onChange={this.update("goal")}
                value={this.state.goal}
                >                
                </input>
              
              </div>
              <div className="edit-bio">
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

            </div>
          );
        }
     
}

export default Profile;