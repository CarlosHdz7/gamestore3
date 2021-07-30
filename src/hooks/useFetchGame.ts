import { useState, useEffect, useRef } from 'react';
import Helpers from '../api/helpers';
// import IGame from '../interfaces/IGame';

const useFetchGame = (id: number) => {
  const isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiData, setApiData] = useState({});
  const [serverError, setServerError] = useState<boolean | null | string>(null);

  useEffect(() => {
    isMounted.current = true;

    Helpers.getGameById(id)
      .then((game: any) => {
        if (isMounted.current) {
          setApiData(game);
          setIsLoading(false);
        }
      }).catch((error) => {
        setServerError(error.message);
        setIsLoading(false);
      });

    return () => {
      isMounted.current = false;
    };
  }, [id]);

  return { isLoading, apiData, serverError };
};

export default useFetchGame;
