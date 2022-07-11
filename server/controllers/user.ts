import { Request, Response } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status';

import { hashSync } from 'bcrypt';
import { UserCollection } from '../database/user';
import { Role } from '../../types';

export const signup = async (req: Request, res: Response) => {
  try {
    const collection = await UserCollection();
    console.log('signu2p');
    if (!req.body.username) {
      return res.status(BAD_REQUEST).send({ message: 'Username is required' });
    }
    if (!req.body.email) {
      return res.status(BAD_REQUEST).send({ message: 'Email is required' });
    }
    if (!req.body.password) {
      return res.status(BAD_REQUEST).send({ message: 'Password is required' });
    }
    await collection.insertOne({
      username: req.body.username,
      email: req.body.email,
      password: hashSync(req.body.password, 8),
      role: Role.User,
    });
    return res.send({ message: 'User was registered successfully!' });
  } catch (error: any) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ message: `Error: ${JSON.stringify(error?.message)}` });
  }
};
