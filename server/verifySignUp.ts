import { Request, Response, NextFunction } from 'express';
import { UserCollection } from './database/user';

export const checkDuplicateUsernameOrEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const collection = await UserCollection();
    const username = await collection.findOne({
      username: req.body.username,
    });
    if (username) {
      return res
        .status(400)
        .send({ message: 'Failed! Username is already in use!' });
    }
    const email = await collection.findOne({
      email: req.body.email,
    });
    if (email) {
      return res
        .status(400)
        .send({ message: 'Failed! Email is already in use!' });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
