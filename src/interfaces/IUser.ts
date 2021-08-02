/* eslint-disable camelcase */
export interface IUser {
  jwt: string;
  user: User;
}
export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
  created_at: string;
  updated_at: string;
  firstName: string;
  lastName: string;
  comments?: (CommentsEntity)[] | null;
}
export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
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
