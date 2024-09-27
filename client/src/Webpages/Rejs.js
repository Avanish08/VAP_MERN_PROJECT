import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './utils';

const Rejs = () => {
  const [regiInfo, setRegiInfo] = useState({
    Username: '',
    AddharCard: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegiInfo((prevRegiInfo) => ({ ...prevRegiInfo, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { Username, AddharCard, Email, Password, ConfirmPassword } = regiInfo;
    if (!Username || !Email || !AddharCard || !Password || !ConfirmPassword) {
      return handleError('There some Mismatched');
    }
    try {
      const response = await fetch('http://localhost:8080/auth/Regis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regiInfo)
      });
      const result = await response.json();
      if (response.status === 400) {
        handleError(result.message);
      } else if (response.status === 201) {
        handleSuccess('User Created Successful');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        handleError('Unknown error occurred');
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md lg:w-4/5 xl:w-4/5 2xl:w-4/5 mx-auto flex flex-col">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
            {/* Heading Color */}
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#FAD02C' }}>
              Register
            </h2>
            {/* Username Input */}
            <div className="mb-4">
              <label className="block" style={{ color: '#051D40' }} htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="Username"
                value={regiInfo.Username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                style={{ borderColor: '#E9EAEC', focus: { borderColor: '#7692AB' } }}
              />
            </div>
            {/* AddharCard Input */}
            <div className="mb-4">
              <label className="block" style={{ color: '#051D40' }} htmlFor="addhaar-card">
                AddharCard
              </label>
              <input
                id="addhaar-card"
                type="text"
                name="AddharCard"
                onChange={handleChange}
                value={regiInfo.AddharCard}
                placeholder="Enter your VID"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                style={{ borderColor: '#E9EAEC', focus: { borderColor: '#7692AB' } }}
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block" style={{ color: '#051D40' }} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                onChange={handleChange}
                value={regiInfo.Email}
                placeholder="you@example.com"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                style={{ borderColor: '#E9EAEC', focus: { borderColor: '#7692AB' } }}
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label className="block" style={{ color: '#051D40' }} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="Password"
                onChange={handleChange}
                value={regiInfo.Password}
                placeholder="Enter your password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                style={{ borderColor: '#E9EAEC', focus: { borderColor: '#7692AB' } }}
              />
            </div>
            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block" style={{ color: '#051D40' }} htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                name="ConfirmPassword"
                onChange={handleChange}
                value={regiInfo.ConfirmPassword}
                placeholder="Confirm your password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                style={{ borderColor: '#E9EAEC', focus: { borderColor: '#7692AB' } }}
              />
            </div>
            {/* Register Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#051D40] hover:bg-[#7692AB] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
            {/* Link to Login */}
            <p className="mt-4 text-center" style={{ color: '#051D40' }}>
              Already have an account? 
              <Link to="/login" className="text-[#FAD02C] text-base py-2 px-4 rounded hover:underline h-12">
                Login
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Rejs;
