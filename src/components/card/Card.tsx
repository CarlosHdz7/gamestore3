/* eslint-disable camelcase */
import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import IGame from '../../interfaces/IGame';

const Card = ({ game }: {game: IGame}) => {
  const {
    id, cover_art, name, price,
  } = game;

  return (

    <Link to={`/games/${id}`} className="card">
      <div className="card-img-container">
        <img
          className="card-img"
          src={cover_art?.url || '/images/not-found.png'}
          alt=""
        />
      </div>
      <div className="card-info">
        <p className="card-info__title">{name}</p>
        <p className="card-info__subtitle">From</p>
        <p className="card-info__price">
          $
          {price}
        </p>
        <button
          className="card-info__button"
          type="button"
          onClick={(e) => e.stopPropagation()}
        >
          Buy now
        </button>
      </div>
    </Link>
  );
};

export default Card;
