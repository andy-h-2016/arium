import React from 'react';
// import { Route} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import ProfileContainer from './profile/profile_container';
import TerrariumContainer from './terrarium/terrarium_container';
import Modal from './modal/modal'
import SideBar from './sidebar/sidebar_container'

const App = () => (
  <div className="main-container">
    <SideBar/>
 
    <Modal/>
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/terrarium" component={TerrariumContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
      <div className="foot">
        <div className="push"></div>
    <footer className="foot">
          Copyright &copy; 2021 Arium
    </footer>
      </div>
  </div>
);

export default App;