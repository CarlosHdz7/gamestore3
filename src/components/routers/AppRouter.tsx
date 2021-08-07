import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Login from '../pages/login';
import DashboardRouter from './DashboardRouter';
import PublicRoute from './PublicRoute';
import { routesPath } from './routes';

import './AppRouter.scss';

const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute restricted component={Login} path={routesPath.LOGIN} exact />
      <PublicRoute restricted={false} component={DashboardRouter} path={routesPath.HOME} />
    </Switch>
  </Router>
);

export default AppRouter;
