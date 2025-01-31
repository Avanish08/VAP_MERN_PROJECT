import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';
import BookTrainTicketSystem from './BookTrainTicketSystem';
import Busticket from './Busticket';
import TrainTicket from './TrainTicket';
import PassengerDetails from './PassengerDetails';
import Bus_Ticket from './Bus_Ticket';
import PaymentInterface from './PaymentInterface';
import TicketSuccess from './TIcketSuccess';
import TicketFailed from './TicketFailed';

const Maincontent = () => {
  const location = useLocation();

  return (
    <>
      <div>
        {location.pathname === '/main/Home' && <Home />}
        {location.pathname === '/main/About' && <About />}
        {location.pathname === '/main/Services' && <Services/>}
        {location.pathname === '/main/ContactUs' && <ContactUs/>}
        {location.pathname === '/main/Trainticket' && <BookTrainTicketSystem/>}
        {location.pathname === '/main/Busticket' && <Busticket/>}
        {location.pathname === '/main/TrainTicket' && <TrainTicket/>}
        {location.pathname === '/main/Passengerdetail' && <PassengerDetails/>}
        {location.pathname === '/main/bus-ticket' && <Bus_Ticket/>}
        {location.pathname === '/main/Paymentinterface' && <PaymentInterface/>}
        {location.pathname === '/main/ticket-success' && <TicketSuccess/>}
        {location.pathname === '/main/ticket-failed' && <TicketFailed/>}

      </div>
    </>
  );
};

export default Maincontent;