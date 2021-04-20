import React from 'react';
// import { Route} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash/splash';
import ProfileContainer from './profile/profile_container';
import TerrariumContainer from './terrarium/terrarium_container';
import Modal from './modal/modal'

const App = () => (
  <div className="main-container">
    <NavBarContainer />
    <Modal/>
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/terrarium" component={TerrariumContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
      <div className="wrapper">
        <div className="push"></div>
    <footer>
          {/* Copyright &copy; 2021 Arium */}
    </footer>
      </div>
  </div>
);

export default App;