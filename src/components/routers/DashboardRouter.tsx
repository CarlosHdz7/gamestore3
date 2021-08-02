import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from '../navbar';
import details from '../pages/details';
import games from '../pages/games';
import Home from '../pages/home';
import './AppRouter.scss';
import { routesPath } from './routes';

const DashboardRouter = () => (
  <>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path={routesPath.HOME} component={Home} />
        <Route exact path={routesPath.GAMES} component={games} />
        <Route exact path={routesPath.DETAILS} component={details} />

        <Redirect to="/" />
      </Switch>
    </div>
  </>
);

export default DashboardRouter;
