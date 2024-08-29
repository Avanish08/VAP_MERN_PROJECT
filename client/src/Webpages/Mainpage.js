import { useState } from "react";
import logo from './Component/Logo1.png'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

const Mainpage = () => {
  return (
   <>
   <Navbar/>
   <div className="container mx-auto p-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/4 bg-gray-200 p-4 min-h-screen rounded-md mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-[30rem] h-[12rem] mx-auto" />
          <button className="bg-faint-navy hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
            Option 1
          </button>
          <button className="bg-faint-navy hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full">
            Option 2
          </button>
          <button className="bg-faint-navy hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full">
            Option 3
          </button>
          <button className="bg-faint-navy hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full">
            Option 4
          </button>
          <button className="bg-faint-navy hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
            LogOUT
          </button>
        </div>
        <div className="w-full md:w-3/4 bg-white p-4 min-h-screen rounded-md">
          <div className="bg-dark-purple text-white font-bold py-2 px-4 rounded mb-4 h-20">
            Hii UserName
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center mb-4 h-[20rem] gap-5 p-10">
            <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-50 w-[20rem] md:w-1/2">
              <img src="/train.png" alt="Train" className="w-12 h-12 mx-auto mb-2" />
              <p>TRAIN TICKET</p>
            </div>
            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-50 w-[20rem] md:w-1/2">
              <img src="/bus.png" alt="Bus" className="w-12 h-12 mx-auto mb-2" />
              <p>BUS TICKET</p>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-2">NEWS</h2>
            <div className="h-48 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
   </>
  )
}

export default Mainpage