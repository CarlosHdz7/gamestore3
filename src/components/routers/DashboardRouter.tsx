import React from 'react';
import {
  Switch,
  Redirect,
} from 'react-router-dom';
import Footer from '../footer';
import Navbar from '../navbar';
import Details from '../pages/details';
import Error404 from '../pages/error404';
import Games from '../pages/games';
import Home from '../pages/home';
import './AppRouter.scss';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { routesPath } from './routes';

const DashboardRouter = () => (
  <>
    <Navbar />
    <div className="container">
      <Switch>
        <PublicRoute restricted={false} component={Error404} path={routesPath.ERROR} exact />
        <PublicRoute restricted={false} component={Home} path={routesPath.HOME} exact />
        <PublicRoute restricted={false} component={Games} path={routesPath.GAMES} exact />
        <PrivateRoute component={Details} path={routesPath.DETAILS} exact />
        <Redirect to="/" />
      </Switch>
    </div>
    <Footer />
  </>
);

export default DashboardRouter;
