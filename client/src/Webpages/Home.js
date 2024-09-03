import React from 'react';
import Footer from './Component/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const Username = localStorage.getItem('Username');
  return (
    <div className="w-full bg-primary-color p-4 min-h-screen rounded-md">
      <div className=" text-2xl  bg-dark-purple text-white font-bold py-2 px-4 rounded mb-4 h-20">
        Hi {Username}
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center mb-4 h-[20rem] gap-5 p-10">
        <Link to='/main/Trainticket' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
        <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
          <img src="/train.png" alt="Train" className="w-12 h-12 mx-auto mb-2" />
          <p className="text-2xl">TRAIN TICKET</p>
        </div>
        </Link>
        <Link to='/main/Busticket' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
        <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
          <img src="/bus.png" alt="Bus" className="w-12 h-12 mx-auto mb-2" />
          <p className="text-2xl">BUS TICKET</p>
        </div>
        </Link>
      </div>
      <div className="bg-gray-200 p-4 rounded-md">
        <h2 className="text-3xl font-bold mb-2">NEWS</h2>
        <div className="h-48 rounded-md"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;