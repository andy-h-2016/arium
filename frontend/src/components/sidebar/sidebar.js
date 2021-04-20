import React from 'react';
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div id="main">
            <button class="openbtn" onClick={() => this.openNav()}>☰ Open Sidebar</button>  
            <div id="mySidebar" class="sidebar" >

              <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>×</a>
                <Link to={'/terrarium'}>My Terrarium</Link>
                <Link to={'/profile'}>My Profile</Link>
                <Link to={'/waterStats'}>Water Stats</Link>
                <Link to={'/terrariums'}>All Terrariums</Link>
                <Link to={'/info'}>Global Thirst</Link>

              </div>
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

export default SideBar;