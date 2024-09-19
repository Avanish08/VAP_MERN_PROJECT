const express = require('express');
const router = express.Router();
const { findTrains, getTrainSchedule, getTrains } = require('../Controllers/TrainController');

// Route for finding trains
router.get('/find-train', findTrains);

// Route for getting train schedules
router.get('/train-schedule', getTrainSchedule);

// Route for getting all trains, stations, and route
router.get('/trains', getTrains);

module.exports = router;
