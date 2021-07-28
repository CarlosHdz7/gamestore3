import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from '../navbar';
import games from '../pages/games';
import Home from '../pages/home';
import Login from '../pages/login';

const AppRouter = () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/games" component={games} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
