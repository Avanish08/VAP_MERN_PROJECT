const Ticket = require('../Models/TicketModel');

exports.checkTicketStatus = async (req, res) => {
  const { ticketStatus } = req.params;

  try {
    const ticket = await Ticket.findOne({ ticketStatus });
    if (ticket) {
      res.json({ isConfirmed: ticket.isConfirmed });
    } else {
      res.json({ isConfirmed: false });
    }
  } catch (error) {
    console.error('Error checking ticket status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};