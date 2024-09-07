const mongoose = require('mongoose');

const trainScheduleSchema = new mongoose.Schema({
  trainName: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true }
});

module.exports = mongoose.model('TrainSchedule', trainScheduleSchema);
