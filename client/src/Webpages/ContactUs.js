// ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full bg-primary-color p-4 min-h-screen rounded-md">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <form>
        <label className="block mb-2">
          <span className="text-lg">Name:</span>
          <input type="text" className="w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <label className="block mb-2">
          <span className="text-lg">Email:</span>
          <input type="email" className="w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <label className="block mb-2">
          <span className="text-lg">Message:</span>
          <textarea className="w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;