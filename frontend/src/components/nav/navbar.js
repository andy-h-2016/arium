import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="get-links-container" >
                <Link to={'/terrarium'}>My Terrarium</Link>
                <Link to={'/profile'}>My Profile</Link>
                <Link to={'/waterStats'}>Water Stats</Link>
                <Link to={'/terrariums'}>All Terrariums</Link>
                <Link to={'/info'}>Global Thirst</Link>
                <nav className="login-modal-button">
                <button className="logout" onClick={this.logoutUser}>Logout</button>
                </nav>
            </div>
        );
      } else {
        return (
          <nav className="login-modal-button">
          <button className="login-signup" onClick={() => this.props.openModal('login')}>sign in</button>     
        </nav>
        );
      }
  }

  render() {
      return (
        <div className="nav-container">
            
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;