/* eslint-disable camelcase */
export interface IGameDetail {
  id: number;
  name: string;
  price: string;
  releaseYear: string;
  cover_art: ICoverArt | undefined;
}

export interface ICoverArt {
  url: string | undefined;
}
export default IGameDetail;
