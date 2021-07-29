import React from 'react';
import useFetchGames from '../../../hooks/useFetchGames';

const Games = () => {
  const { isLoading, apiData: games } = useFetchGames();

  console.log('me renderizo');
  return (
    <div>
      {isLoading && <p>Cargando</p>}
      {!isLoading && (
        games.map((game) => game.name)
      )}
    </div>
  );
};

export default Games;
