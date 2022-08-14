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
