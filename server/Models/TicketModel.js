const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketStatus: String,
  isConfirmed: Boolean,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;