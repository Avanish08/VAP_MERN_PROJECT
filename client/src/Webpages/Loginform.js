import React from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

const Loginform = () => {
  return (
    <>
   
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md mx-auto flex flex-col">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-dark-purple">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-dark-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm">
              Don't have an account? <a href="/" className="text-dark-purple hover:text-purple-700">Sign up here</a>
            </p>
          </form>
        
        </div>
      </div>
    </>
  );
};

export default Loginform;