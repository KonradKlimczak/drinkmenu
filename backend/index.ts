import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRoutes } from './server/routes/auth';
import { userRoutes } from './server/routes/test';
import path from 'path';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
