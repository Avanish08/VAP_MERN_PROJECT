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

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const bookingData = {
      ...state,
      passengers,
    };

    try {
      const response = await fetch('http://localhost:8080/auth/complete-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) throw new Error('Booking failed');

      setPaymentStatus('Booking successful! Proceed to payment.');
      // You might redirect to a payment page or show a success message
      navigate('/payment');
    } catch (error) {
      console.error('Error completing booking:', error);
      setPaymentStatus('Booking failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Passenger Details</h2>
        <form onSubmit={handleSubmit}>
          {passengers.map((passenger, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold">Passenger {index + 1}</h3>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
                <input
                  type="text"
                  value={passenger.name}
                  onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Age
                <input
                  type="number"
                  value={passenger.age}
                  onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Proceed to Payment
          </button>
        </form>
        {paymentStatus && (
          <div className={`mt-4 p-4 rounded-lg ${paymentStatus.includes('failed') ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
            {paymentStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default PassengerDetails;
