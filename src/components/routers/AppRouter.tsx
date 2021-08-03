import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Route,
} from 'react-router-dom';
import Login from '../pages/login';
import './AppRouter.scss';
import DashboardRouter from './DashboardRouter';
import PublicRoute from './PublicRoute';
import { routesPath } from './routes';

const AppRouter = () => (
  <Router>
    <Switch>
      {/* <Route exact path={routesPath.LOGIN} component={Login} /> */}
      {/* <Route path={routesPath.HOME} component={DashboardRouter} /> */}
      <PublicRoute restricted={false} component={Login} path={routesPath.LOGIN} exact />
      <PublicRoute restricted={false} component={DashboardRouter} path={routesPath.HOME} />
    </Switch>
  </Router>
);

export default AppRouter;
