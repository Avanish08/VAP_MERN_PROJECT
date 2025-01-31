import React from "react";
import { useNavigate } from "react-router-dom";
import manzilLogo from "./Component/newlogo2.png";

const TicketSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <header className="bg-gray-900 w-full shadow mt-10 mb-0 border border-gray-300 rounded-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
          <img src={manzilLogo} alt="Manzil - Safar Hamara Sath" className="h-20 w-auto" />
        </div>
      </header>

      <main className="flex-grow w-full max-w-4xl px-4 py-10">
        <div className="space-y-8 bg-white shadow-lg rounded-lg p-8 md:p-10 lg:p-12 mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Payment Successful!</h2>
          <p className="text-lg text-gray-600">Your booking has been confirmed. Thank you for using Manzil!</p>
          <button
            onClick={() => navigate("/main/Home")}
            className="mt-4 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Go Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default TicketSuccess;
