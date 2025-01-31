import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Loginform from './Webpages/Loginform';
import Mainpage from './Webpages/Mainpage';
import Maincontent from './Webpages/Maincontent';
import Navbar from './Webpages/Component/Navbar';
import Rejs from './Webpages/Rejs';
import TicketSuccess from './Webpages/TIcketSuccess';
import TicketFailed from './Webpages/TicketFailed';


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Rejs/>} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/main" element={<Mainpage />}>
          <Route path="" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Maincontent />} />
          <Route path="About" element={<Maincontent />} />
          <Route path="Services" element={<Maincontent />} />
          <Route path="ContactUs" element={<Maincontent />} />
          <Route path="Trainticket" element={<Maincontent />} />
          <Route path="Busticket" element={<Maincontent />} />
          <Route path="TrainTicket" element={<Maincontent />} />
          <Route path="Passengerdetail" element={<Maincontent />} />
          <Route path="Paymentinterface" element={<Maincontent/>}/>
          <Route path="bus-ticket" element={<Maincontent />} />
          <Route path="ticket-success" element={<TicketSuccess />} />
          <Route path="ticket-failed" element={<TicketFailed />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;