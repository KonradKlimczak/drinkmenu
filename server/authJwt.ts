import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserCollection } from './database/user';
import { Role } from '../types';
import { ObjectId } from 'mongodb';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers['x-access-token'];
  if (!token || Array.isArray(token)) {
    return res.status(403).send({ message: 'No token provided!' });
  }
  verify(token, JWT_SECRET, (err, decoded) => {
    if (err || !decoded || typeof decoded === 'string') {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id;
    next();
  });
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const collection = await UserCollection();
    const user = await collection.findOne({ _id: new ObjectId(req.userId) });
    if (user?.role !== Role.Admin) {
      return res.status(403).send({ message: 'Require Admin Role!' });
    }

    next();
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
