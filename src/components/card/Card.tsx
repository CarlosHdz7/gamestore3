import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import IGame from '../../interfaces/IGame';

const Card = ({ game }: {game: IGame}) => (
  <Link to={`/games/${game.id}`} className="card">
    <div className="card-img-container">
      <img
        className="card-img"
        src={game.cover_art?.url || '/images/not-found.png'}
        alt=""
      />
    </div>
    <div className="card-info">
      <p className="card-info__title">{game.name}</p>
      <p className="card-info__subtitle">From</p>
      <p className="card-info__price">
        $
        {game.price}
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

export default Card;
