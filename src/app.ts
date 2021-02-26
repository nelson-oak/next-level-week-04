import 'reflect-metadata';
import 'express-async-errors';
import express, { Response, Request, NextFunction } from 'express';

import createConnection from './database';

import { AppError } from './errors/AppError';

import { router } from './routes';

createConnection()

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });

    console.error(err.message);

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  }
})

export { app };