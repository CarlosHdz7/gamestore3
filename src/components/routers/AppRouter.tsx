import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from '../navbar';
import details from '../pages/details';
import games from '../pages/games';
import Home from '../pages/home';
import Login from '../pages/login';

const AppRouter = () => (
  <Router>
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/games" component={games} />
          <Route exact path="/games/:id" component={details} />
          <Route exact path="/" component={Home} />

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  </Router>
);

export default AppRouter;
