import express from 'express';
import { User } from './User.js';
import { History } from './History.js';

const router = express.Router();

let pointHistory = []; // [{ userId, points, timestamp }]

// Claim points for a user and update in MongoDB
router.post('/claim/:userId', async (req, res) => {
  const userId = req.params.userId;
  const points = Math.floor(Math.random() * 10) + 1;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.totalPoints = (user.totalPoints || 0) + points;
    await user.save();

    // Save history in collection
    await History.create({
      userId: user._id,
      name: user.name,
      points,
      timestamp: new Date()
    });

    res.json({ userId, points, totalPoints: user.totalPoints });
  } catch (err) {
    res.status(500).json({ error: "Failed to claim points" });
  }
});

router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email, totalPoints: 0 });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Get leaderboard from MongoDB
router.get('/leaderboard', async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    const leaderboard = users.map(user => ({
      userId: user._id,
      name: user.name,
      totalPoints: user.totalPoints || 0
    }));
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

// Get point history
router.get('/history', async (req, res) => {
  try {
    const history = await History.find().sort({ timestamp: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

export { router };