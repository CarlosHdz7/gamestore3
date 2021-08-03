import React, { useRef, MutableRefObject } from 'react';
import _ from 'lodash';
import { RouteComponentProps } from 'react-router-dom';
import useFetchGames from '../../../hooks/useFetchGames';
import IGame from '../../../interfaces/IGame';
import Card from '../../card';
import Loader from '../../loader';
import './Games.scss';

const Games = ({ location, history }: RouteComponentProps) => {
  const params = new URLSearchParams(location.search);
  const q = params.get('q') || '';
  const { isLoading, games } = useFetchGames(q);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSearch = _.debounce(() => {
    const query = (inputRef.current.value) ? `?q=${inputRef.current.value}` : '?';
    history.push(query);
  }, 1000);

  return (
    <>
      <h1 className="title">
        <i className="bi bi-joystick" />
        <span>List of games</span>
        <div className="input-search-container">
          <input
            className="input-search"
            type="text"
            placeholder="Search"
            ref={inputRef}
            onChange={handleSearch}
          />
        </div>
      </h1>
      {isLoading && <Loader />}
      <div className="cards-container">
        {
          games && (
            games.map((game: IGame) => <Card key={game.id} game={game} />)
          )
        }
      </div>
    </>
  );
};

export default Games;
