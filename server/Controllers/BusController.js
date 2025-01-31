const BusSchedule = require('../Models/BusSchedule');
const Bus = require('../Models/BusModel');

exports.getBusSchedule = async (req, res) => {
  try {
    const busSchedule = await BusSchedule.find();
    res.json(busSchedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findBuses = async (req, res) => {
  try {
    const { from, to } = req.query;

    // Validate query parameters
    if (!from || !to) {
      const missingParams = [];
      if (!from) missingParams.push('from');
      if (!to) missingParams.push('to');
      return res.status(400).json({ error: `Missing required parameters: ${missingParams.join(', ')}` });
    }

    // Fetch buses based on the query parameters
    const buses = await Bus.find({ from, to });

    if (buses.length === 0) {
      return res.status(404).json({ message: 'No buses found' });
    }

    res.json(buses);
  } catch (error) {
    console.error('Error fetching buses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getBuses = async (req, res) => {
  try {
    const buses = await Bus.find({});
    const stations = ['Mumbai', 'Pune', 'NewDelhi']; // Example stations
    const route = ['Mumbai', 'Pune', 'NewDelhi'];   // Example route

    res.json({ buses, stations, route });
  } catch (error) {
    console.error('Error fetching buses:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
