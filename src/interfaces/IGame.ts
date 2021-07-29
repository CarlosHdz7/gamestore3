/* eslint-disable camelcase */
export interface IGame {
  id: number;
  name: string;
  price: string;
  cover_art: ICoverArt | undefined;
}

export interface ICoverArt {
  url: string | undefined;
}
export default IGame;
