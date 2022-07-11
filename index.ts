import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRoutes } from './server/routes/auth';

dotenv.config();

const app: Express = express();
app.use(
  cors({
    origin: 'http://localhost:8081',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/auth', authRoutes);

app.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
