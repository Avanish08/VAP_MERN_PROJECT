import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bus from '../Webpages/img/bus.png';
import train from '../Webpages/img/train.png';

const Home = () => {
  const [news, setNews] = useState([]);
  const [trainSchedule, setTrainSchedule] = useState([]);
  const [busSchedule, setBusSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Username = localStorage.getItem('Username');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch news
        const newsResponse = await axios.get('http://localhost:8080/auth/news');
        setNews(newsResponse.data);
        
        // Fetch train schedule
        const trainResponse = await axios.get('http://localhost:8080/auth/train-schedule'); // Replace with your endpoint
        setTrainSchedule(trainResponse.data);
        
        // Fetch bus schedule
        const busResponse = await axios.get('http://localhost:8080/auth/bus-schedule'); // Replace with your endpoint
        setBusSchedule(busResponse.data);

      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-primary-color p-4 sm:p-6 lg:p-8 min-h-screen rounded-md">
      <div className="text-xl sm:text-2xl md:text-3xl bg-dark-purple text-white font-bold py-2 px-4 rounded mb-4">
        Hi {Username}
      </div>
      <div className="bg-gray-200 flex flex-col md:flex-row justify-center md:justify-around items-center mb-6 gap-6 p-4 sm:p-6 lg:p-8 rounded-lg">
        <Link to='/main/Trainticket' className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded flex flex-col items-center text-center">
          <img src={train} alt="Train" className="w-16 h-16 mb-2" />
          <p className="text-lg sm:text-xl md:text-2xl">TRAIN TICKET</p>
        </Link>
        <Link to='/main/Busticket' className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded flex flex-col items-center text-center">
          <img src={bus} alt="Bus" className="w-16 h-16 mb-2" />
          <p className="text-lg sm:text-xl md:text-2xl">BUS TICKET</p>
        </Link>
      </div>
      <div className="bg-gray-200 p-4 sm:p-6 lg:p-8 rounded-md mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">NEWS</h2>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && (
          <div className="max-h-80 sm:max-h-96 lg:max-h-screen overflow-y-auto">
            {news.length > 0 ? (
              news.map((item, index) => (
                <div key={index} className="mb-4 p-4 border-b border-gray-300">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm sm:text-base">{item.description}</p>
                </div>
              ))
            ) : (
              <p>No news available</p>
            )}
          </div>
        )}
      </div>
      <div className="bg-gray-200 p-4 sm:p-6 lg:p-8 rounded-md mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Train Schedule</h2>
        {!loading && !error && (
          <div className="max-h-80 sm:max-h-96 lg:max-h-screen overflow-y-auto">
            {trainSchedule.length > 0 ? (
              trainSchedule.map((item, index) => (
                <div key={index} className="mb-4 p-4 border-b border-gray-300">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{item.trainName}</h3>
                  <p className="text-sm sm:text-base">Departure: {item.departure}</p>
                  <p className="text-sm sm:text-base">Arrival: {item.arrival}</p>
                </div>
              ))
            ) : (
              <p>No train schedule available</p>
            )}
          </div>
        )}
      </div>
      <div className="bg-gray-200 p-4 sm:p-6 lg:p-8 rounded-md mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Bus Schedule</h2>
        {!loading && !error && (
          <div className="max-h-80 sm:max-h-96 lg:max-h-screen overflow-y-auto">
            {busSchedule.length > 0 ? (
              busSchedule.map((item, index) => (
                <div key={index} className="mb-4 p-4 border-b border-gray-300">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{item.busName}</h3>
                  <p className="text-sm sm:text-base">Departure: {item.departure}</p>
                  <p className="text-sm sm:text-base">Arrival: {item.arrival}</p>
                </div>
              ))
            ) : (
              <p>No bus schedule available</p>
            )}
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Home;
