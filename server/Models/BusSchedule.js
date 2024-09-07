const mongoose = require('mongoose');

const busScheduleSchema = new mongoose.Schema({
  busName: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true }
});

module.exports = mongoose.model('BusSchedule', busScheduleSchema);
