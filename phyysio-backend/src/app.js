import express from 'express';
import userRoutes from './routes/user-routes.js';
import sessionRoutes from './routes/session-routes.js';

const app = express();

app.use(express.json());
app.use(userRoutes, sessionRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;