import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import '../App.css';


const Busticket = () => {
  const [ticketStatus, setTicketStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const [bus, setBus] = useState(null);
  const [stations, setStations] = useState([]);
  const [route, setRoute] = useState([]);

  const handleCheckStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8080/auth/check-ticket/${ticketStatus}`);
      const data = await response.json();
      setStatusMessage(data.isConfirmed ? 'Ticket is confirmed!' : 'Ticket is not confirmed.');
    } catch (error) {
      console.error('Error checking ticket status:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  const handleFindBus = () => {
    fetch('http://localhost:8080/auth/buses')
      .then(response => response.json())
      .then(data => {
        setBus(data.bus);
        setStations(data.stations);
        setRoute(data.route);
      });
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
      <div className="bg-gray-200 p-4 rounded-md mx-auto mt-4 w-full max-w-4xl">
        <h1 className="text-center text-2xl font-bold text-blue-500">Book Bus Ticket</h1>
        <div className="bg-gray-100 p-4 rounded-md mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            to="/main/bus-ticket"
            className="flex flex-col items-center bg-gray-200 p-4 rounded-md hover:bg-gray-300 transition duration-200"
          >
            <div className="w-24 h-24 bg-blue-400 rounded-md mb-2"></div>
            <p className="text-gray-700 font-medium">Book Ticket</p>
          </Link>
          <button
            className="flex flex-col items-center bg-gray-200 p-4 rounded-md hover:bg-gray-300 transition duration-200"
            onClick={() => scrollToSection('cancel-ticket')}
          >
            <div className="w-24 h-24 bg-blue-400 rounded-md mb-2"></div>
            <p className="text-gray-700 font-medium">Cancel Ticket</p>
          </button>
          <Link
            to="/bus-ticket"
            className="flex flex-col items-center bg-gray-200 p-4 rounded-md hover:bg-gray-300 transition duration-200"
          >
            <div className="w-24 h-24 bg-blue-400 rounded-md mb-2"></div>
            <p className="text-gray-700 font-medium">Find Bus</p>
          </Link>
          <button
            className="flex flex-col items-center bg-gray-200 p-4 rounded-md hover:bg-gray-300 transition duration-200"
            onClick={() => scrollToSection('check-status')}
          >
            <div className="w-24 h-24 bg-blue-400 rounded-md mb-2"></div>
            <p className="text-gray-700 font-medium">Check Ticket Status</p>
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gray-200 p-4 rounded-md mx-auto mt-4 w-full max-w-4xl" id="check-status">
        <h2 className="text-lg font-bold mb-2">Check Ticket Status</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            className="w-full sm:w-3/4 rounded-md px-3 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ticket ID"
            value={ticketStatus}
            onChange={(e) => setTicketStatus(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            onClick={handleCheckStatus}
          >
            Check
          </button>
        </div>
        {statusMessage && (
          <div className="bg-gray-100 rounded-md p-4">
            <p className="text-gray-700 font-medium">{statusMessage}</p>
          </div>
        )}
      </div>

      {/* Section 3 */}
      <div className="bg-gray-200 p-4 rounded-md mx-auto mt-10 w-full max-w-4xl" id="book-ticket">
        <h1 className="text-3xl font-bold text-center mb-8">Book Ticket</h1>
        <Link
          to="/main/bus-ticket"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Ticket
        </Link>
      </div>

      {/* Section 4 */}
      <div className="bg-gray-100 py-8 px-4 mx-auto mt-10 w-full max-w-4xl">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Find Bus</h2>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter bus number or station"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleFindBus}
          >
            Find Bus
          </button>
        </div>

        {bus && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Bus Status</h2>
            <div className="flex flex-col md:flex-row items-start">
              <div className="relative w-full md:w-1/4 h-40">
                <div
                  className="absolute top-0 left-0 w-2 bg-blue-500 rounded-md"
                  style={{
                    height: `${((route.indexOf(bus) + 1) / route.length) * 100}%`,
                  }}
                />
                {stations.map((station, index) => (
                  <div
                    key={index}
                    className="absolute bottom-0 left-0 w-2 h-4 bg-red-500 rounded-md"
                    style={{
                      bottom: `${(index / stations.length) * 100}%`,
                    }}
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-gray-700 font-semibold">Bus: {bus}</p>
                {stations.map((station, index) => (
                  <p key={index} className="text-gray-600">
                    {station}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Busticket
