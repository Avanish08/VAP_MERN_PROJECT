import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PassengerDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState(Array.from({ length: state.passengerCount }, () => ({ name: '', age: '' })));
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const bookingData = {
      ...state,
      passengers,
      amount: state.totalPrice, // Use the total price from the state
    };

    console.log('Booking Data:', bookingData); // Log bookingData to inspect its structure

    setPaymentStatus('Booking successful! Proceed to payment.');

    // Redirect to payment page with booking details in state
    navigate('/main/Paymentinterface', { state: { bookingData } });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        {passengers.map((passenger, index) => (
          <div key={index} className="mb-4">
            <label className="block text-[#051D40] text-sm font-bold mb-2">
              Passenger {index + 1} Name
              <input
                type="text"
                value={passenger.name}
                onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#051D40] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
              />
            </label>
            <label className="block text-[#051D40] text-sm font-bold mb-2">
              Passenger {index + 1} Age
              <input
                type="number"
                value={passenger.age}
                onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#051D40] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Age"
              />
            </label>
          </div>
        ))}
        <div className="mt-2">
          <h5 className="text-md font-semibold text-[#051D40]">Total Price:</h5>
          <p className="text-[#051D40]">₹{state.totalPrice}</p>
        </div>
        <button type="submit" className="bg-[#FAD02C] hover:bg-[#FFE67D] text-[#051D40] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Proceed to payment
        </button>
      </form>
      <p>{paymentStatus}</p>
    </div>
  );
};

export default PassengerDetails;
