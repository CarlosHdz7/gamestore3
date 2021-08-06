/* eslint-disable no-unused-expressions */
import React, { useRef, MutableRefObject, useState } from 'react';
import _ from 'lodash';
import { RouteComponentProps } from 'react-router-dom';
import useFetchGames from '../../../hooks/useFetchGames';
import IGame from '../../../interfaces/IGame';
import Card from '../../card';
import Loader from '../../loader';
import './Games.scss';
import Pagination from '../../pagination/Pagination';

const Games = ({ location, history }: RouteComponentProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const params = new URLSearchParams(location.search);
  const q = params.get('q') || '';
  const page = params.get('page') || '1';
  const { isLoading, games } = useFetchGames(q);

  const [currentPage, setCurrentPage] = useState(parseInt(page, 10));
  const [gamesPerPage] = useState(8);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games?.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber: number) => {
    (pageNumber === 1)
      ? history.push('/games')
      : history.push(`?page=${pageNumber}`);

    setCurrentPage(pageNumber);
  };

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
      {
          currentGames && (
            <>
              <div className="cards-container">
                {currentGames.map((game: IGame) => <Card key={game.id} game={game} />)}
              </div>
              {!!currentGames.length
              && (
              <Pagination
                gamesPerPage={gamesPerPage}
                totalPosts={games?.length || 0}
                paginate={paginate}
                currentPage={currentPage}
              />
              )}
            </>
          )
          }

    </>
  );
};

export default Games;
