import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full bg-[#E9EAEC] p-4 sm:p-6 lg:p-8 min-h-screen rounded-md">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#051D40] mb-6">Contact Us</h1>
      <form className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-lg font-semibold text-[#051D40]">Name:</span>
          <input 
            type="text" 
            className="w-full p-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-md" 
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg font-semibold text-[#051D40]">Email:</span>
          <input 
            type="email" 
            className="w-full p-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-md" 
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg font-semibold text-[#051D40]">Message:</span>
          <textarea 
            className="w-full p-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-md" 
          />
        </label>
        <button className="bg-[#FAD02C] hover:bg-[#E9EAEC] text-[#051D40] font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
