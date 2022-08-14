import { IUser } from '../../../common';

import { connect } from './mongodb';

export const UserCollection = () => {
  return connect().then((db) => db.collection<IUser>('user'));
};
