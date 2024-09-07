const express = require('express');
const router = express.Router();
const busScheduleController = require('../Controllers/BusController');

router.get('/bus-schedule', busScheduleController.getBusSchedule);

module.exports = router;
