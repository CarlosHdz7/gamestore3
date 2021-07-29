import { useState, useEffect, useRef } from 'react';
import IGame from '../interfaces/IGame';
import Helpers from '../api/helpers';

const useFetchGames = () => {
  const isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiData, setApiData] = useState<IGame[]>([]);
  const [serverError, setServerError] = useState<boolean | null | string>(null);

  useEffect(() => {
    isMounted.current = true;

    Helpers.getGames()
      .then((games: IGame[]) => {
        if (isMounted.current) {
          setApiData(games);
          setIsLoading(false);
        }
      }).catch((error) => {
        setServerError(error.message);
        setIsLoading(false);
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { isLoading, apiData, serverError };
};

export default useFetchGames;
