const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureTime: { type: Date, required: true },
  availableSeats: {
    'Sleeper': { type: Number, default: 0 },
    'Seater': { type: Number, default: 0 },
    'Luxury': { type: Number, default: 0 },
    'SemiSleeper': { type: Number, default: 0 },
  },
  price: {
    'Sleeper': { type: Number, default: 0 },
    'Seater': { type: Number, default: 0 },
    'Luxury': { type: Number, default: 0 },
    'SemiSleeper': { type: Number, default: 0 },
  },
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
