import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusTicket = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPassenger, setSelectedPassenger] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busData, setBusData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatPrice, setSeatPrice] = useState(null);
  const navigate = useNavigate();

  const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bengaluru'];

  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handlePassengerChange = (event) => setSelectedPassenger(event.target.value);
  const handleFromChange = (event) => setFrom(event.target.value);
  const handleToChange = (event) => setTo(event.target.value);

  const handleFindBus = async () => {
    if (!selectedDate || !selectedPassenger || !from || !to) {
      alert('Please fill in all fields');
      return;
    }

    setHasSearched(true);

    try {
      const response = await fetch(`http://localhost:8080/auth/find-bus?from=${from}&to=${to}`);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setBusData(data);
    } catch (error) {
      console.error('Error fetching bus data:', error);
    }
  };

  const handleBusClick = (bus) => {
    setSelectedBus(bus);
    setSelectedSeat(null);
    setSeatPrice(null);
  };

  const handleSeatClick = (seatType) => {
    setSelectedSeat(seatType);
    setSeatPrice(selectedBus.price[seatType]);
  };

  const handleBookNow = () => {
    if (!selectedBus || !selectedSeat) {
      alert('Please select a seat before booking');
      return;
    }

    navigate('/main/Passengerdetail', {
      state: {
        date: selectedDate,
        from,
        to,
        busName: selectedBus.name,
        seatType: selectedSeat,
        price: seatPrice,
        passengerCount: selectedPassenger,
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700 text-sm font-bold mb-2">
            From
          </label>
          <select
            id="from"
            value={from}
            onChange={handleFromChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-gray-700 text-sm font-bold mb-2">
            To
          </label>
          <select
            id="to"
            value={to}
            onChange={handleToChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="passengerCount" className="block text-gray-700 text-sm font-bold mb-2">
            No of Passengers
          </label>
          <input
            type="number"
            id="passengerCount"
            value={selectedPassenger}
            onChange={handlePassengerChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="1"
          />
        </div>
        <button
          onClick={handleFindBus}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Find Bus
        </button>
      </div>

      {hasSearched && (
        <div className="bg-blue-500 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold text-white mb-4">Bus Availability</h2>

          {busData.length === 0 ? (
            <p className="text-white">No buses found. Please refine your search criteria.</p>
          ) : (
            <div>
              {busData.map((bus) => (
                <div key={bus.name} className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-2">{bus.name}</h3>
                  <button
                    onClick={() => handleBusClick(bus)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Show Seat Options
                  </button>

                  {selectedBus && selectedBus.name === bus.name && (
                    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-2">Select a Seat Type for {selectedBus.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Object.keys(selectedBus.price).map((seatType) => (
                          <button
                            key={seatType}
                            onClick={() => handleSeatClick(seatType)}
                            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                              selectedSeat === seatType ? 'bg-gray-400' : ''
                            }`}
                          >
                            {seatType} ({selectedBus.availableSeats[seatType]} seats available)
                          </button>
                        ))}
                      </div>

                      {selectedSeat && seatPrice !== null && (
                        <div className="mt-4">
                          <h5 className="text-md font-semibold">Price for {selectedSeat}:</h5>
                          <p>₹{seatPrice}</p>
                          <button
                            onClick={handleBookNow}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                          >
                            Book Now
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusTicket;
