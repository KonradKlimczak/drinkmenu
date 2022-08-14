import { ObjectId } from 'mongodb';

export enum Role {
  User = 'USER',
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  role: Role;
}

export type UserOutput = {
  id: ObjectId;
  accessToken: string;
  username: string;
  email: string;
  role: Role;
};
