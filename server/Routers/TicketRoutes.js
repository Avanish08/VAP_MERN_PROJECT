const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/TicketController');

router.get('/check-ticket/:ticketStatus', ticketController.checkTicketStatus);

module.exports = router;