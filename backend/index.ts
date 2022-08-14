import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRoutes } from './server/routes/auth';
import { userRoutes } from './server/routes/test';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
