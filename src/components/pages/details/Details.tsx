import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFetchComments from '../../../hooks/useFetchComments';
import useFetchGameById from '../../../hooks/useFetchGame';
import Breadcrumb from '../../breadcrumb';
import Comments from '../../comments';
import Loader from '../../loader';
import './Details.scss';

const Details = () => {
  const { id }: { id: string } = useParams(); // game id
  const { isLoading, game } = useFetchGameById(id);
  const { isLoading: isLoadingComments, comments, error } = useFetchComments(id);
  const { getUser } = useAuth();
  const storedValue = getUser();

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

            {
              storedValue && (
                <>
                  <p className="comments-container__title">Write a comment:</p>
                  <textarea
                    className="comments-container__textarea"
                  />
                  <div className="comments-container-button">
                    <button
                      type="button"
                      className="comment-button"
                    >
                      Comment
                    </button>
                  </div>
                </>
              )
            }
          </>
        )
      }

      <div className="comments-container">
        <p className="comments-container__title">Comments:</p>

        {isLoadingComments && <Loader />}

        { (comments) ? (
          <Comments comments={comments} />
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Details;
