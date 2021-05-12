import React from 'react';
// import { Route} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
// import ProfileContainer from './profile/profile_container';
import TerrariumContainer from './terrarium/terrarium_container';
import WaterTrackerContainer from './water_tracker/water_tracker_container';
import Modal from './modal/modal'
import SideBar from './sidebar/sidebar_container'
import TerrariumIndexContainer from './terrarium/terrarium_index_container';
import InfoPage from './info/info_page';
import DonationInfoPage from './info/donation_info';
import TerrariumShowContainer from './terrarium/terrarium_show_container';
import InstructionPage from './info/instruction';

const App = () => (
  <div className="main-container">
    <SideBar/>
    <Modal/>
    {/* <ProtectedRoute path="/" component={TimerContainer}/> */}
    <Switch>
      <AuthRoute exact path="/" component={Splash} />

      <ProtectedRoute exact path="/terrarium" component={TerrariumContainer} />
      <ProtectedRoute exact path="/terrarium/:id" component={TerrariumShowContainer} />
      <ProtectedRoute exact path="/terrariums" component={TerrariumIndexContainer} />
      <ProtectedRoute exact path="/watertracker" component={WaterTrackerContainer} />
      <ProtectedRoute exact path="/info" component={InfoPage} />
      <ProtectedRoute exact path="/donation" component={DonationInfoPage} />
      <ProtectedRoute exact path="/instruction" component={InstructionPage} />

    </Switch>
      <div className="foot">
          <div className="push"></div>
        <footer className="foot"></footer>
      </div>
  </div>
);

export default App;