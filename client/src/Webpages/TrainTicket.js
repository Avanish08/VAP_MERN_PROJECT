import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainTicket = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPassenger, setSelectedPassenger] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [trainData, setTrainData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatPrice, setSeatPrice] = useState(null);
  const navigate = useNavigate();

  const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bengaluru'];

  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handlePassengerChange = (event) => setSelectedPassenger(event.target.value);
  const handleFromChange = (event) => setFrom(event.target.value);
  const handleToChange = (event) => setTo(event.target.value);

  const handleFindTrain = async () => {
    if (!selectedDate || !selectedPassenger || !from || !to) {
      alert('Please fill in all fields');
      return;
    }

    setHasSearched(true);

    try {
      const response = await fetch(`http://localhost:8080/auth/find-train?from=${from}&to=${to}`);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setTrainData(data);
    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  };

  const handleTrainClick = (train) => {
    setSelectedTrain(train);
    setSelectedSeat(null);
    setSeatPrice(null);
  };

  const handleSeatClick = (seatType) => {
    setSelectedSeat(seatType);
    setSeatPrice(selectedTrain.price[seatType]);
  };

  const handleBookNow = () => {
    if (!selectedTrain || !selectedSeat) {
      alert('Please select a seat before booking');
      return;
    }

    navigate('/main/Passengerdetail', {
      state: {
        date: selectedDate,
        from,
        to,
        trainName: selectedTrain.name,
        seatType: selectedSeat,
        price: seatPrice,
        passengerCount: selectedPassenger,
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-[#E9EAEC] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="date" className="block text-[#051D40] text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#051D40] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from" className="block text-[#051D40] text-sm font-bold mb-2">
            From
          </label>
          <select
            id="from"
            value={from}
            onChange={handleFromChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#051D40] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-[#051D40] text-sm font-bold mb-2">
            To
          </label>
          <select
            id="to"
            value={to}
            onChange={handleToChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#051D40] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="passengerCount" className="block text-[#051D40] text-sm font-bold mb-2">
            No of Passengers
          </label>
          <input
            type="number"
            id="passengerCount"
            value={selectedPassenger}
            onChange={handlePassengerChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#051D40] leading-tight focus:outline-none focus:shadow-outline"
            min="1"
          />
        </div>
        <button
          onClick={handleFindTrain}
          className="bg-[#FAD02C] hover:bg-[#FFE67D] text-[#051D40] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Find Train
        </button>
      </div>

      {hasSearched && (
        <div className="bg-[#7692AB] p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold text-white mb-4">Train Availability</h2>

          {trainData.length === 0 ? (
            <p className="text-white">No trains found. Please refine your search criteria.</p>
          ) : (
            <div>
              {trainData.map((train) => (
                <div key={train.name} className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-2">{train.name}</h3>
                  <button
                    onClick={() => handleTrainClick(train)}
                    className="bg-[#FAD02C] hover:bg-[#FFE67D] text-[#051D40] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Show Seat Options
                  </button>

                  {selectedTrain && selectedTrain.name === train.name && (
                    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-2 text-[#051D40]">Select a Seat Type for {selectedTrain.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Object.keys(selectedTrain.price).map((seatType) => (
                          <button
                            key={seatType}
                            onClick={() => handleSeatClick(seatType)}
                            className={`bg-[#FAD02C] hover:bg-[#FFE67D] text-[#051D40] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                              selectedSeat === seatType ? 'bg-[#FFE67D]' : ''
                            }`}
                          >
                            {seatType} ({selectedTrain.availableSeats[seatType]} seats available)
                          </button>
                        ))}
                      </div>

                      {selectedSeat && seatPrice !== null && (
                        <div className="mt-4">
                          <h5 className="text-md font-semibold text-[#051D40]">Price for {selectedSeat}:</h5>
                          <p className="text-[#051D40]">₹{seatPrice}</p>
                          <button
                            onClick={handleBookNow}
                            className="bg-[#FAD02C] hover:bg-[#FFE67D] text-[#051D40] font-bold py-2 px-4 rounded mt-4"
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

export default TrainTicket;
