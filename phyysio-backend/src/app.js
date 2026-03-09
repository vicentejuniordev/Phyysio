import express from 'express';
import adminRoutes from './routes/admin-routes.js';

const app = express();

app.use(express.json());
app.use(adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;