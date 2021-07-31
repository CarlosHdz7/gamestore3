import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchGameById from '../../../hooks/useFetchGame';
import Breadcrumb from '../../breadcrumb';
import Loader from '../../loader';
import './Details.scss';

const Details = () => {
  const { id } = useParams<any>(); // game id
  const { isLoading, game } = useFetchGameById(id);

  return (
    <div className="details-page-container">
      {isLoading && <Loader />}
      {
        game && (
          <>
            <Breadcrumb game={game.name} />
            <div className="details-container">
              <div className="container-img-cover">
                <img
                  className="container-img-cover__img"
                  src={game.cover_art?.url ? game.cover_art?.url : '/images/not-found.png'}
                  alt=""
                />
              </div>
              <div className="info-container">
                <p className="info-container__text info-container__text--name">
                  {game.name}
                </p>
                <p className="info-container__text">
                  <span className="bold"> Genre: </span>
                  {game.genre.name}
                </p>
                <p className="info-container__text">
                  <span className="bold"> Release: </span>
                  {game.release_year}
                </p>
                <p className="info-container__text">
                  <span className="bold">Price: </span>
                  $
                  {game.price}
                </p>
                <p className="info-container__text">
                  <span className="bold">Publishers: </span>
                  {game.publishers?.map((publisher: {id: number; name: string}) => (
                    <span key={publisher.id}>{publisher.name}</span>
                  ))}
                </p>
                <button type="button" className="info-container__button">
                  Buy now
                </button>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Details;
