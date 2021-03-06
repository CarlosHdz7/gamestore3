import React, { useState, useCallback } from 'react';
import { useParams, RouteComponentProps, Redirect } from 'react-router-dom';

import { postComment } from '../../../api/postComment';
import useFetchComments from '../../../hooks/useFetchComments';
import useFetchGameById from '../../../hooks/useFetchGame';
import Breadcrumb from '../../breadcrumb';
import Comments from '../../comments';
import Loader from '../../loader';
import { routesPath } from '../../routers/routes';

import './Details.scss';

const Details = ({ history }: RouteComponentProps) => {
  const { id }: { id: string } = useParams();
  const [inputComment, setInputComment] = useState('');
  const { isLoading, game, error: errorGame } = useFetchGameById(id);

  const {
    isLoading: isLoadingComments, comments, error, getCommentsRefresh,
  } = useFetchComments(parseInt(id, 10));

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
  }, [id]);

  const handlePostComment = async () => {
    if (!inputComment || inputComment.length > 100) return;
    const comment = {
      body: inputComment,
    };

    try {
      await postComment(id, comment);
      setInputComment('');
      getCommentsRefresh();
    } catch (errorMessage) {
      history.push(routesPath.HOME);
    }
  };

  return (
    <div className="details-page-container">
      {errorGame && <Redirect to={routesPath.GAMES} />}
      {isLoading && <Loader />}
      {
        game && (
          <>
            <Breadcrumb name={game.name} />
            <div className="details-container">
              <div className="container-img-cover">
                <img
                  className="container-img-cover__img"
                  src={game.cover_art.url ? game.cover_art?.url : '/images/not-found.png'}
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
            <p className="comments-container__title">Write a comment:</p>
            <textarea
              className="comments-container__textarea"
              onChange={handleInputChange}
              value={inputComment}
            />
            <div className="comments-container-button">
              <button
                type="button"
                className="comment-button"
                onClick={handlePostComment}
              >
                Comment
              </button>
            </div>
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
