import { Request, Response } from 'express';
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNAUTHORIZED,
} from 'http-status';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

import { compareSync, hashSync } from 'bcrypt';
import { UserCollection } from '../database/user';
import { Role } from '../../../types';
import { sign } from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {
  try {
    const collection = await UserCollection();
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

export const signin = async (req: Request, res: Response) => {
  try {
    const collection = await UserCollection();
    const user = await collection.findOne({ username: req.body.username });

    if (!user) {
      return res.status(NOT_FOUND).send({ message: 'User Not found.' });
    }

    const passwordIsValid = compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(UNAUTHORIZED).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    var token = sign({ id: user._id }, JWT_SECRET, {
      expiresIn: 86400, // 24 hours
    });
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      accessToken: token,
    });
  } catch (error: any) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ message: `Error: ${JSON.stringify(error?.message)}` });
  }
};
