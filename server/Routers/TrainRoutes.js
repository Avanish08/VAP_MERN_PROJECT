const express = require('express');
const router = express.Router();
const trainScheduleController = require('../Controllers/TrainController');

router.get('/train-schedule', trainScheduleController.getTrainSchedule);

module.exports = router;
