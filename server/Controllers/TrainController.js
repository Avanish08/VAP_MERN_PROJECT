const TrainSchedule = require('../Models/TrainSchedule');
const Train = require('../Models/TrainModel');

exports.getTrainSchedule = async (req, res) => {
  try {
    const trainSchedule = await TrainSchedule.find();
    res.json(trainSchedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findTrains = async (req, res) => {
  try {
    const { from, to } = req.query;

    // Validate query parameters
    if (!from || !to) {
      const missingParams = [];
      if (!from) missingParams.push('from');
      if (!to) missingParams.push('to');
      return res.status(400).json({ error: `Missing required parameters: ${missingParams.join(', ')}` });
    }

    // Fetch trains based on the query parameters
    const trains = await Train.find({ from, to });

    if (trains.length === 0) {
      return res.status(404).json({ message: 'No trains found' });
    }

    res.json(trains);
  } catch (error) {
    console.error('Error fetching trains:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTrains = async (req, res) => {
  try {
    const trains = await Train.find({});
    const stations = ['Mumbai', 'Pune', 'NewDelhi'];
    const route = ['Mumbai', 'Pune', 'NewDelhi'];

    res.json({ trains, stations, route });
  } catch (error) {
    console.error('Error fetching trains:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};