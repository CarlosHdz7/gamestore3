import React from 'react';
import useFetchGames from '../../../hooks/useFetchGames';
import IGame from '../../../interfaces/IGame';
import Card from '../../card';
import Loader from '../../loader';
import './Games.scss';

const Games = () => {
  const { isLoading, apiData: games } = useFetchGames();

  return (
    <>
      <h1 className="title">
        <i className="bi bi-joystick" />
        <span>List of games</span>
      </h1>
      {isLoading && <Loader />}
      <div className="cards-container">
        {!isLoading && (
          games.map((game: IGame) => <Card key={game.id} game={game} />)
        )}
      </div>
    </>
  );
};

export default Games;
