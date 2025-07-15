import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { router } from './routes.js';
import { User } from './User.js';

function startServer() {
  const app = express();
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });
  app.use(cors());
  app.use(bodyParser.json());

  // Connect to MongoDB
  mongoose.connect('mongodb://127.0.0.1:27017/leaderboard?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

  // API to get users from MongoDB
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });

  app.use('/api', router);

  server.listen(3001, () => {
    console.log('Backend running on http://localhost:3001');
  });
}

startServer();