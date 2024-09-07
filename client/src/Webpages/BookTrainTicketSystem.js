import React, { useState } from "react";
import '../App.css';


function BookTrainTicketSystem() {
  const [ticketStatus, setTicketStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [train, setTrain] = useState(null);
  const [stations, setStations] = useState([]);
  const [route, setRoute] = useState([]);

  const handleCheckStatus = async () => {
    try {
      const response = await fetch(`/api/check-ticket/${ticketStatus}`);
      const data = await response.json();
      setStatusMessage(data.isConfirmed ? 'Ticket is confirmed!' : 'Ticket is not confirmed.');
    } catch (error) {
      console.error('Error checking ticket status:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handlePassengerCountChange = (event) => {
    setPassengerCount(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    console.log('From:', from);
    console.log('Destination:', destination);
    console.log('Date:', date);
    console.log('Passenger Count:', passengerCount);
  };

  const handleFindTrain = () => {
    fetch('/api/trains')
      .then(response => response.json())
      .then(data => {
        setTrain(data.train);
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
      <h1 className="text-center text-2xl font-bold text-green-500">Book Train Ticket</h1>
      <div className="bg-gray-100 p-4 rounded-md mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[
            { id: 'book-ticket', title: 'Book Ticket' },
            { id: 'cancel-ticket', title: 'Cancel Ticket' },
            { id: 'find-train', title: 'Find Train' },
            { id: 'check-status', title: 'Check Ticket Status' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center bg-gray-200 p-4 rounded-md hover:bg-gray-300 transition duration-200"
            >
              <div className="w-24 h-24 bg-green-400 rounded-md mb-2"></div>
              <p className="text-gray-700 font-medium">{item.title}</p>
            </button>
        ))}
      </div>
    </div>
  
      {/* Section 2 */}
      <div className="bg-gray-200 p-4 rounded-md mx-auto mt-4 w-full max-w-4xl">
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
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
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
      <div className="bg-gray-200 p-4 rounded-md mx-auto mt-10 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Book Ticket</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="from" className="block text-gray-700 font-bold mb-2">
              From
            </label>
            <select
              id="from"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={from}
              onChange={handleFromChange}
            >
              <option value="">Select a city</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="NewDelhi">NewDelhi</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-700 font-bold mb-2">
              Destination
            </label>
            <select
              id="destination"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={destination}
              onChange={handleDestinationChange}
            >
              <option value="">Select a city</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="NewDelhi">NewDelhi</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passengerCount" className="block text-gray-700 font-bold mb-2">
              No of Passenger
            </label>
            <select
              id="passengerCount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={passengerCount}
              onChange={handlePassengerCountChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Find train
          </button>
        </form>
      </div>

      {/* Section 4 */}
      <div className="bg-gray-100 py-8 px-4 mx-auto mt-10 w-full max-w-4xl">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Find Train</h2>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter train number or station"
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleFindTrain}
          >
            Find Train
          </button>
        </div>

        {train && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Train Status</h2>
            <div className="flex flex-col md:flex-row items-start">
              <div className="relative w-full md:w-1/4 h-40">
                <div
                  className="absolute top-0 left-0 w-2 bg-green-500 rounded-md"
                  style={{
                    height: `${((route.indexOf(train) + 1) / route.length) * 100}%`,
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
                <p className="text-gray-700 font-semibold">Train: {train}</p>
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

export default BookTrainTicketSystem;
