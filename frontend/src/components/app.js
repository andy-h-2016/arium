import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import TweetsContainer from './tweets/tweets_container';
import Splash from './splash/splash';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';
import Modal from './modal/modal'

const App = () => (
  <div className="main-container">
    <NavBarContainer />
    <Modal/>
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
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