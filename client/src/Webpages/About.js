import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-gray-100 p-4 sm:p-6 lg:p-8 min-h-screen rounded-lg">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6">About Us</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          We are dedicated to providing a seamless and cost-effective experience for booking train and bus tickets. Our platform is designed to offer convenience and efficiency, ensuring that your travel plans are handled with care.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-green-100 hover:bg-green-200 transition duration-300 ease-in-out text-green-900 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/train.png" alt="Train" className="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Train Ticket Booking</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Effortlessly book your train tickets online and embark on your journey with peace of mind. Our user-friendly platform ensures a smooth booking process and instant confirmations.
            </p>
          </div>
          <div className="bg-red-100 hover:bg-red-200 transition duration-300 ease-in-out text-red-900 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/bus.png" alt="Bus" className="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Bus Ticket Booking</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Enjoy a comfortable ride by booking your bus tickets through our platform. We provide an easy-to-navigate system for selecting routes, seats, and making reservations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
