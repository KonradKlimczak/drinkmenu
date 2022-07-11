import { IUser } from '../../types';
import { connect } from './mongodb';

export const UserCollection = () => {
  return connect().then((db) => db.collection<IUser>('user'));
};
