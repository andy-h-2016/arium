import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.state.update = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const id = this.state.id || this.state._id;      
    this.props.fetchUser(id);    
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentUser.goal !== this.props.currentUser.goal || prevProps.currentUser.bio !== this.props.currentUser.bio){
      this.setState(this.props.currentUser)
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const id = user.id || user._id;
    this.props.updateUser(id, user)
    this.setState({update: true});
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  
  render() {
    const updated = 
      this.state.update ? (
        <div className="edit-message">Profile updated</div>
      ) : (
        <div className="edit-message">You can update your profile here.</div>
      );

    return (
      <div className="user-edit-outter">
        <div className="user-edit-container">
            {updated}
            <br/>
          <div className="user-edit-greeting">
            Welcome {this.state.username}! 
          </div>
          <br />
          <form className="user-edit-form" onSubmit={this.handleSubmit}>
            <div className="edit-goals">
              This is your current water intake goal.
              <br />
              <input
                className="edit-goal-input"
                type="number"
                onChange={this.update("goal")}
                value={this.state.goal}
              ></input>
              <br />
            </div>
            <div className="edit-bio">
              Write a short description of your goals.
              <br />
              <textarea
                className="edit-bio-textarea"
                type="text"
                onChange={this.update("bio")}
                value={this.state.bio}
              ></textarea>
            </div>
            <br />
            <div className="edit-submit-button-container">
              <button className="edit-submit-button login-signup" type="submit">
                Submit Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
