import request from 'supertest'

import { app } from '../app';

import createConnection from '../database';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'john doe',
        email: 'john.doe@example.com',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to crete a use with a email from another', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'john doe',
        email: 'john.doe@example.com',
      });

    expect(response.status).toBe(400);
  });
});