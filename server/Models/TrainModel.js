const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  availableSeats: {
    SL: { type: Number, default: 0 },
    '1A': { type: Number, default: 0 },
    '2A': { type: Number, default: 0 },
    '3A': { type: Number, default: 0 },
    GEN: { type: Number, default: 0 },
  },
  price: {
    SL: { type: Number, default: 0 },
    '1A': { type: Number, default: 0 },
    '2A': { type: Number, default: 0 },
    '3A': { type: Number, default: 0 },
    GEN: { type: Number, default: 0 },
  },
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
