/* eslint-disable camelcase */
export interface IGame {
  id: number;
  name: string;
  genre: PublishersEntityOrGenre;
  release_year: number;
  price: string;
  created_at: string;
  updated_at: string;
  cover_art: CoverArt;
  platforms?: (PlatformsEntity)[] | null;
  publishers?: (PublishersEntityOrGenre)[] | null;
  comments?: (CommentsEntity)[] | null;
}
export interface PublishersEntityOrGenre {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
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
  large: LargeOrSmallOrMediumOrThumbnail;
  small: LargeOrSmallOrMediumOrThumbnail;
  medium: LargeOrSmallOrMediumOrThumbnail;
  thumbnail: LargeOrSmallOrMediumOrThumbnail;
}
export interface LargeOrSmallOrMediumOrThumbnail {
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
export interface PlatformsEntity {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  logo?: null;
}
export interface CommentsEntity {
  id: number;
  trainee?: null;
  game: number;
  body: string;
  created_at: string;
  updated_at: string;
  user: number;
}

export default IGame;
