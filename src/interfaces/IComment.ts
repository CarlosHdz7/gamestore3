/* eslint-disable camelcase */
export interface IComment {
  id: number;
  trainee?: null;
  game: Game;
  body: string;
  created_at: string;
  updated_at: string;
  user: User;
}
export interface Game {
  id: number;
  name: string;
  genre: number;
  release_year: number;
  price: string;
  created_at: string;
  updated_at: string;
  cover_art: CoverArt;
}
export interface CoverArt {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  created_at: string;
  updated_at: string;
}
export interface Formats {
  small: SmallOrMediumOrThumbnail;
  medium: SmallOrMediumOrThumbnail;
  thumbnail: SmallOrMediumOrThumbnail;
}
export interface SmallOrMediumOrThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}
export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: number;
  created_at: string;
  updated_at: string;
  firstName: string;
  lastName: string;
}
