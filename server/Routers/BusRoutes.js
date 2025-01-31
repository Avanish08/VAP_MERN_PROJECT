const express = require('express');
const router = express.Router();
const { findBuses, getBusSchedule, getBuses } = require('../Controllers/BusController');

// Route for finding buses
router.get('/find-bus', findBuses);

// Route for getting bus schedules
router.get('/bus-schedule', getBusSchedule);

// Route for getting all buses, stations, and route
router.get('/buses', getBuses);

module.exports = router;
