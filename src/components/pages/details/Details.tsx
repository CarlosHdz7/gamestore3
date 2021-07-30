import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import useFetchGame from '../../../hooks/useFetchGame';
import Breadcrumb from '../../breadcrumb';
import Loader from '../../loader';
import './Details.scss';

const Details = () => {
  const { id } = useParams<any>(); // game id
  const { isLoading, apiData: game, serverError }:
  { isLoading: boolean, apiData : any, serverError: any} = useFetchGame(id);

  if (serverError) {
    return <Redirect to="/" />;
  }

  return (
    <div className="details-page-container">
      {isLoading && <Loader />}
      { (!isLoading && !serverError) ? (
        <>
          <Breadcrumb game={game.name} />
          <div className="details-container">
            <div className="container-img-cover">
              <img
                className="container-img-cover__img"
                src={game.urlImage ? game.urlImage : '/images/not-found.png'}
                alt=""
              />
            </div>
            <div className="info-container">
              <p className="info-container__text info-container__text--name">
                {game.name}
              </p>
              <p className="info-container__text">
                <span className="bold"> Genre: </span>
                {game.genre}
              </p>
              <p className="info-container__text">
                <span className="bold"> Release: </span>
                {game.releaseYear}
              </p>
              <p className="info-container__text">
                <span className="bold">Price: </span>
                $
                {game.price}
              </p>
              {/* <p className="info-container__text">
                <span className="bold">Publishers: </span>
                {game.publishers?.map(({ id: idPublisher, name }) => (
                  <span key={idPublisher}>{name}</span>
                ))}
              </p> */}
              <button type="button" className="info-container__button">
                Buy now
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>{serverError}</p>
      )}
    </div>
  );
};

export default Details;
