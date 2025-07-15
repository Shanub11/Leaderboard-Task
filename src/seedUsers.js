import mongoose from 'mongoose';
import { User } from './User.js';

const users = [
  { name: "Alice", email: "alice@example.com", totalPoints: 0 },
  { name: "Bob", email: "bob@example.com", totalPoints: 0 },
  { name: "Charlie", email: "charlie@example.com", totalPoints: 0 },
  { name: "David", email: "david@example.com", totalPoints: 0 },
  { name: "Eva", email: "eva@example.com", totalPoints: 0 },
  { name: "Frank", email: "frank@example.com", totalPoints: 0 },
  { name: "Grace", email: "grace@example.com", totalPoints: 0 },
  { name: "Hannah", email: "hannah@example.com", totalPoints: 0 },
  { name: "Ivan", email: "ivan@example.com", totalPoints: 0 },
  { name: "Julia", email: "julia@example.com", totalPoints: 0 }
];

mongoose.connect('mongodb://localhost:27017/leaderboard')
  .then(async () => {
    await User.deleteMany({});
    await User.insertMany(users);
    console.log("10 users added!");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });