import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json({
    name: 'Nelson',
    email: 'nelson.oak.13@gmail.com',
  });
})

app.post('/users', (request, response) => {
  return response.json({
    name: 'Nelson Jr',
    email: 'nelson.carvalho.13@outlook.com',
  });
})

app.listen(3333, () => {
  console.log('🔥️ Server is running on port 3333 🔥️')
})