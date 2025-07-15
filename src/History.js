import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  points: Number,
  timestamp: { type: Date, default: Date.now }
});

export const History = mongoose.model('History', historySchema);