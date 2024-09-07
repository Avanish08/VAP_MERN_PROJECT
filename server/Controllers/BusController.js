const BusSchedule = require('../Models/BusSchedule');

exports.getBusSchedule = async (req, res) => {
  try {
    const busSchedule = await BusSchedule.find();
    res.json(busSchedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
