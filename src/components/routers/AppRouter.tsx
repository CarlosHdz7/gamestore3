import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../pages/login';
import './AppRouter.scss';
import DashboardRouter from './DashboardRouter';
import { routesPath } from './routes';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={routesPath.LOGIN} component={Login} />
      <Route path={routesPath.HOME} component={DashboardRouter} />
    </Switch>
  </Router>
);

export default AppRouter;
