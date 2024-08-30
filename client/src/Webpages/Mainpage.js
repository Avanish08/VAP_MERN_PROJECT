import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from './Component/newlogo2.png'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

const Mainpage = () => {
  return (
    <div className="h-screen w-full bg-primary-color flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full h-full">
        <div className="w-80 md:w-40rem xl:w-44rem lg:w-42rem sm:w-8rem bg-dark-purple p-4 min-h-screen rounded-md mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-full h-auto mx-auto" />
          <div className="flex flex-col justify-center items-center">
            <Link to="/option1" className="text-white font-bold text-2xl py-2 px-4 rounded mt-4 w-full hover:underline" style={{ height: '4rem' }}>
              Home
            </Link>
            <Link to="/option2" className="text-white font-bold text-2xl py-2 px-4 rounded mt-2 w-full hover:underline" style={{ height: '4rem' }}>
              About
            </Link>
            <Link to="/option3" className="text-white font-bold text-2xl py-2 px-4 rounded mt-2 w-full hover:underline" style={{ height: '4rem' }}>
              Services
            </Link>
            <Link to="/option4" className="text-white font-bold text-2xl py-2 px-4 rounded mt-2 w-full hover:underline" style={{ height: '4rem' }}>
              ContactUs
            </Link>
            <Link to="/logout" className="text-white font-bold text-2xl py-2 px-4 rounded mt-4 w-full hover:underline" style={{ height: '4rem' }}>
              LogOUT
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/4 bg-primary-color p-4 min-h-screen rounded-md">
          <div className="bg-dark-purple text-white font-bold py-2 px-4 rounded mb-4 h-20">
            Hii UserName
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center mb-4 h-[20rem] gap-5 p-10">
            <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
              <img src="/train.png" alt="Train" className="w-12 h-12 mx-auto mb-2" />
              <p className="text-2xl">TRAIN TICKET</p>
            </div>
            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-50 w-full md:w-1/2">
              <img src="/bus.png" alt="Bus" className="w-12 h-12 mx-auto mb-2" />
              <p className="text-2xl">BUS TICKET</p>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <h2 className="text-3xl font-bold mb-2">NEWS</h2>
            <div className="h-48 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage