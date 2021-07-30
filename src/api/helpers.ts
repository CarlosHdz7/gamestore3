// eslint-disable-next-line import/no-extraneous-dependencies
// import _ from 'lodash';
import Singleton from './singleton';
import IGame from '../interfaces/IGame';

// const singleton = new Singleton(process.env.REACT_APP_API_URL!);
const singleton = new Singleton('https://trainee-gamerbox.herokuapp.com');
class Helpers {
  static async getGames() {
    const url = '/games';
    const data = await singleton.getData(url, 'A error has ocurred while loading video games information.');
    const games = data.map((game: IGame): IGame => ({
      id: game.id,
      name: game.name,
      price: game.price,
      cover_art: {
        url: game.cover_art?.url,
      },
    }));
    return games;
  }

  static async getGameById(id: number) {
    const url = `/games/${id}`;
    const data = await singleton.getData(url,
      'A error has ocurred while loading video game information.');
    const game = {
      id: data.id,
      name: data.name,
      genre: data.genre?.name,
      releaseYear: data.release_year,
      price: data.price,
      urlImage: data.cover_art?.url,
      comments: data.comments,
      publishers: data.publishers,
    };
    return game;
  }
}

export default Helpers;
