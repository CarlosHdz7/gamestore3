import React from 'react';
import './Login.scss';

const handleLoginClick = (history: any): any => {
  history.replace('/');
};

const Login = ({ history }: { history: any}) => (
  <>
    <div className="login-page">
      <div className="login-container">
        <div className="login-container__welcome">
          <h1>Hi! It’s nice to see you!</h1>
        </div>
        <div className="login-container__form">
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
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Ex. john123"
            className="form__input"
          />
          <button className="form__button" type="button" onClick={() => handleLoginClick(history)}>
            Log in
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Login;
