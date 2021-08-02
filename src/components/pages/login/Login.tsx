import React, { useRef } from 'react';
import './Login.scss';
import { postLogin } from '../../../api/postLogin';

const Login = ({ history }: { history: any}) => {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleLoginClick = (e: any) => {
    e.preventDefault();
    const { username, password } = formRef.current;

    const credentials = {
      identifier: username.value,
      password: password.value,
    };

    postLogin(credentials).then((user) => {
      history.replace('/');
      console.log(user);
    });
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
