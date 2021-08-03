/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { getUser } = useAuth();
  const storedValue = getUser();
  return (
    <Route
      {...rest}
      render={(props) => (
        storedValue
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  );
};

export default PrivateRoute;
