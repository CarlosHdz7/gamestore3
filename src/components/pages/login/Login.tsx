import React, { useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import { ICredentials } from '../../../interfaces/ICredentials';

import './Login.scss';

const Login = ({ history }: RouteComponentProps) => {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [error, setError] = useState(false);
  const { login } = useAuth();

  const handleLoginClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { username, password } = formRef.current;

    const credentials: ICredentials = {
      identifier: username.value,
      password: password.value,
    };

    try {
      await login(credentials);
      history.push('/');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-container__welcome">
            <h1>Hi! It’s nice to see you!</h1>
          </div>
          <form className="login-container__form" ref={formRef}>
            <h1 className="form__title">
              <i className="bi bi-person-circle" />
              {' '}
              Welcome
            </h1>
            <p>User</p>
            <input
              type="text"
              placeholder="Ex. john-doe"
              className="form__input"
              name="username"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Ex. john123"
              className="form__input"
              name="password"
            />
            {error && <p className="error-message">Invalid user or email</p>}
            <button className="form__button" type="submit" onClick={(e) => handleLoginClick(e)}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
