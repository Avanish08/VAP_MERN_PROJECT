const TrainSchedule = require('../Models/TrainSchedule');

exports.getTrainSchedule = async (req, res) => {
  try {
    const trainSchedule = await TrainSchedule.find();
    res.json(trainSchedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
