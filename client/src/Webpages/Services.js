import React from 'react';

const Services = () => {
  return (
    <div className="w-full bg-[#E9EAEC] p-4 sm:p-6 lg:p-12 min-h-screen rounded-lg">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#051D40] mb-6 sm:mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#FAD02C] hover:bg-[#FAD02C] transition duration-300 ease-in-out text-[#051D40] p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/images/Screenshot 2024-09-27 021142.png" alt="Train" className="w-14 h-14 sm:w-16 sm:h-16 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#051D40]">Train Ticket Booking</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Easily book train tickets online with our user-friendly platform. Enjoy a smooth and convenient booking experience with instant confirmations.
            </p>
          </div>
          <div className="bg-[#FAD02C] hover:bg-[#FAD02C] transition duration-300 ease-in-out text-[#051D40] p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/images/Screenshot 2024-09-27 021159.png" alt="Bus" className="w-14 h-14 sm:w-16 sm:h-16 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#051D40]">Bus Ticket Booking</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Book your bus tickets online and travel comfortably. Our platform offers a simple booking process and a wide range of options for your journey.
            </p>
          </div>
          <div className="bg-[#FAD02C] hover:bg-[#FAD02C] transition duration-300 ease-in-out text-[#051D40] p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/images/Screenshot 2024-09-27 021259.png" alt="Flight" className="w-14 h-14 sm:w-16 sm:h-16 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#051D40]">Flight Ticket Booking</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Coming soon: Book your flight tickets through our platform. Stay tuned for a seamless booking experience for air travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
