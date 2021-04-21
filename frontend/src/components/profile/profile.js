import React from "react";
// import { receiveCurrentUser } from '../../actions/session_actions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.state.update = false;
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.receiveCurrentUser(this.state);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props
      .updateUser(user.id, user)
      .then(this.props.receiveCurrentUser(user));
    this.state.update = true;
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
