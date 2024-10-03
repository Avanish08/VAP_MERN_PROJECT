import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Busticket() {
  const [ticketStatus, setTicketStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [bus, setBus] = useState(null);
  const [stations, setStations] = useState([]);
  const [route, setRoute] = useState([]);

  const handleCheckStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8080/auth/check-bus-ticket/${ticketStatus}`);
      const data = await response.json();
      setStatusMessage(data.isConfirmed ? 'Ticket is confirmed!' : 'Ticket is not confirmed.');
    } catch (error) {
      console.error('Error checking ticket status:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  const handleFindBus = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/buses');
      const data = await response.json();
      setBus(data.bus);
      setStations(data.stations);
      setRoute(data.route);
    } catch (error) {
      console.error('Error finding bus:', error);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-screen p-4 overflow-auto scrollbar-hidden">
      {/* Section 1 */}
      <div className="bg-[#E9EAEC] p-4 rounded-md mx-auto mt-4 w-full max-w-4xl">
        <h1 className="text-center text-2xl font-bold text-[#FAD02C]">Book Bus Ticket</h1>
        <div className="bg-[#E9EAEC] p-4 rounded-md mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            to="/main/bus-ticket"
            className="flex flex-col items-center bg-[#1E3A8A] p-4 rounded-md hover:bg-[#0E2A5A] transition duration-200"
          >
            <img src="/images/Screenshot 2024-09-27 013021.png" alt="Book Ticket" className="w-24 h-24 rounded-md mb-2" />
            <p className="text-[#051D40] font-medium">Book Ticket</p>
          </Link>
          <button
            className="flex flex-col items-center bg-[#1E3A8A] p-4 rounded-md hover:bg-[#0E2A5A] transition duration-200"
            onClick={() => scrollToSection('cancel-ticket')}
          >
            <img src="/images/Screenshot 2024-09-27 013652.png" alt="Cancel Ticket" className="w-24 h-24 rounded-md mb-2" />
            <p className="text-[#051D40] font-medium">Cancel Ticket</p>
          </button>
          <Link
            to="/bus-ticket"
            className="flex flex-col items-center bg-[#1E3A8A] p-4 rounded-md hover:bg-[#0E2A5A] transition duration-200"
          >
            <img src="/images/Screenshot 2024-09-27 013930.png" alt="Find Bus" className="w-24 h-24 rounded-md mb-2" />
            <p className="text-[#051D40] font-medium">Find Bus</p>
          </Link>
          <button
            className="flex flex-col items-center bg-[#1E3A8A] p-4 rounded-md hover:bg-[#0E2A5A] transition duration-200"
            onClick={() => scrollToSection('check-status')}
          >
            <img src="/images/Screenshot 2024-09-27 014828.png" alt="Check Ticket Status" className="w-24 h-24 rounded-md mb-2" />
            <p className="text-[#051D40] font-medium">Check Ticket Status</p>
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#E9EAEC] p-4 rounded-md mx-auto mt-4 w-full max-w-4xl" id="check-status">
        <h2 className="text-lg font-bold mb-2 text-[#FAD02C]">Check Ticket Status</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            className="w-full sm:w-3/4 rounded-md px-3 py-2 border border-[#7692AB] focus:outline-none focus:ring-2 focus:ring-[#FAD02C]"
            placeholder="Enter ticket ID"
            value={ticketStatus}
            onChange={(e) => setTicketStatus(e.target.value)}
          />
          <button
            className="bg-[#FAD02C] hover:bg-[#FAD02C] text-[#051D40] font-bold py-2 px-4 rounded-md"
            onClick={handleCheckStatus}
          >
            Check
          </button>
        </div>
        {statusMessage && (
          <div className="bg-[#E9EAEC] rounded-md p-4">
            <p className="text-[#051D40] font-medium">{statusMessage}</p>
          </div>
        )}
      </div>

      {/* Section 3 */}
      <div className="bg-[#E9EAEC] p-4 rounded-md mx-auto mt-10 w-full max-w-4xl" id="book-ticket">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#FAD02C]">Book Ticket</h1>
        <Link
          to="/main/BusTicket"
          className="bg-[#FAD02C] hover:bg-[#FAD02C] text-[#051D40] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Ticket
        </Link>
      </div>

      {/* Section 4 */}
      <div className="bg-[#E9EAEC] p-4 rounded-md mx-auto mt-4 w-full max-w-4xl" id="find-bus">
        <h2 className="text-lg font-bold mb-2 text-[#FAD02C]">Find Bus</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            className="w-full sm:w-3/4 rounded-md px-3 py-2 border border-[#7692AB] focus:outline-none focus:ring-2 focus:ring-[#FAD02C]"
            placeholder="Enter bus number or station"
          />
          <button
            className="bg-[#FAD02C] hover:bg-[#FAD02C] text-[#051D40] font-bold py-2 px-4 rounded-md"
            onClick={handleFindBus}
          >
            Find Bus
          </button>
        </div>
        {bus && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2 text-[#051D40]">Bus Status</h2>
            <div className="flex flex-col md:flex-row items-start">
              <div className="relative w-full md:w-1/4 h-40">
                <div
                  className="absolute top-0 left-0 w-2 bg-[#FAD02C] rounded-md"
                  style={{
                    height: `${((route.indexOf(bus) + 1) / stations.length) * 100}%`,
                  }}
                />
                <div className="bg-[#7692AB] p-2 rounded-md mt-4">
                  <p className="text-[#051D40]">{bus}</p>
                </div>
              </div>
              <div className="relative w-full md:w-1/4 h-40">
                <div
                  className="absolute top-0 left-0 w-2 bg-[#FAD02C] rounded-md"
                  style={{
                    height: `${((route.indexOf(bus) + 1) / stations.length) * 100}%`,
                  }}
                />
                <div className="bg-[#7692AB] p-2 rounded-md mt-4">
                  <p className="text-[#051D40]">{bus}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Busticket;
