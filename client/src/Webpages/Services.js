// Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="w-full bg-primary-color p-4 min-h-screen rounded-md">
      <h1 className="text-3xl font-bold mb-2">Our Services</h1>
      <div className="flex flex-col md:flex-row justify-around items-center mb-4 h-[20rem] gap-5 p-10">
        <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
          <img src="/train.png" alt="Train" className="w-12 h-12 mx-auto mb-2" />
          <p className="text-2xl">TRAIN TICKET BOOKING</p>
        </div>
        <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
          <img src="/bus.png" alt="Bus" className="w-12 h-12 mx-auto mb-2" />
          <p className="text-2xl">BUS TICKET BOOKING</p>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
          <img src="/flight.png" alt="Flight" className="w-12 h-12 mx-auto mb-2" />
          <p className="text-2xl">FLIGHT TICKET BOOKING</p>
        </div>
      </div>
    </div>
  );
};

export default Services;