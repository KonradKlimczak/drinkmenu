import { Request, Response } from 'express';
import { OK } from 'http-status';

export const allAccess = (req: Request, res: Response) => {
  res.status(OK).send('Public Content.');
};

export const userBoard = (req: Request, res: Response) => {
  res.status(OK).send('User Content.');
};

export const adminBoard = (req: Request, res: Response) => {
  res.status(OK).send('Admin Content.');
};
