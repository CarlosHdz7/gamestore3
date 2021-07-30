import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from '../navbar';
import details from '../pages/details';
import games from '../pages/games';
import './AppRouter.scss';

const DashboardRouter = () => (
  <>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/games" component={games} />
        <Route exact path="/games/:id" component={details} />

        <Redirect to="/games" />
      </Switch>
    </div>
  </>
);

export default DashboardRouter;
