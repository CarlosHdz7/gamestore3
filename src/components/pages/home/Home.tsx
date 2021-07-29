import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => (
  <>
    <div className="home-container">
      <div className="container-info">
        <h4 className="container-info__title">
          Welcome
          to our store
          <i className="bi bi-shop" />
        </h4>
        <p className="container-info__subtitle">
          Where you can find a lot of new titles of your favorites consoles
          everyday at good price.
        </p>
        <div className="button-container-home">
          <Link className="container-info__button" to="/games">
            GameStore
            <i className="bi bi-cart-fill" />
          </Link>
        </div>
      </div>
      <div className="container-image">
        <img
          className="container-image__img"
          src="/images/controller.png"
          alt="img-homepage"
        />
      </div>
    </div>
  </>
);

export default Home;
