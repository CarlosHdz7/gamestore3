/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  const { getUser } = useAuth();
  const storedValue = getUser();
  return (
    <Route
      {...rest}
      render={(props) => (
        storedValue && restricted
          ? <Redirect to="/" />
          : <Component {...props} />
      )}
    />
  );
};

export default PublicRoute;
