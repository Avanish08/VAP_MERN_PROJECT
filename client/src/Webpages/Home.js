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
        const trainResponse = await axios.get('http://localhost:8080/auth/train-schedule');
        setTrainSchedule(trainResponse.data);
        
        // Fetch bus schedule
        const busResponse = await axios.get('http://localhost:8080/auth/bus-schedule');
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
    <div className="w-full bg-[#E9EAEC] p-4 sm:p-6 lg:p-8 min-h-screen rounded-md">
      <div className="text-xl sm:text-2xl md:text-3xl bg-[#051D40] text-[#FAD02C] font-bold py-2 px-4 rounded mb-4">
        <h1>Hi {Username}</h1>
      </div>
      <div className="bg-[#7692AB] flex flex-col md:flex-row justify-center md:justify-around items-center mb-6 gap-6 p-4 sm:p-6 lg:p-8 rounded-lg">
        <Link to='/main/Trainticket' className="bg-[#FAD02C] hover:bg-[#FFE680] text-[#051D40] font-bold py-4 px-6 rounded flex flex-col items-center text-center">
          <img src={train} alt="Train" className="w-16 h-16 mb-2" />
          <p className="text-lg sm:text-xl md:text-2xl">TRAIN TICKET</p>
        </Link>
        <Link to='/main/Busticket' className="bg-[#FAD02C] hover:bg-[#FFE680] text-[#051D40] font-bold py-4 px-6 rounded flex flex-col items-center text-center">
          <img src={bus} alt="Bus" className="w-16 h-16 mb-2" />
          <p className="text-lg sm:text-xl md:text-2xl">BUS TICKET</p>
        </Link>
      </div>
      <div className="bg-[#E9EAEC] p-4 sm:p-6 lg:p-8 rounded-md mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAD02C] mb-4">News</h2>
        {loading && <p className="text-center text-[#051D40]">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && (
          <div className="max-h-80 sm:max-h-96 lg:max-h-screen overflow-y-auto">
            {news.length > 0 ? (
              news.map((item, index) => (
                <div key={index} className="mb-4 p-4 border-b border-[#FAD02C]">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#051D40]">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#051D40]">{item.description}</p>
                </div>
              ))
            ) : (
              <p className="text-[#051D40]">No news available</p>
            )}
          </div>
        )}
      </div>
      <div className="bg-[#E9EAEC] p-4 sm:p-6 lg:p-8 rounded-md mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAD02C] mb-4">Train Schedule</h2>
        {!loading && !error && (
          <div className="max-h-80 sm:max-h-96 lg:max-h-screen overflow-y-auto">
            {trainSchedule.length > 0 ? (
              trainSchedule.map((item, index) => (
                <div key={index} className="mb-4 p-4 border-b border-[#FAD02C]">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#051D40]">{item.trainName}</h3>
                  <p className="text-sm sm:text-base text-[#051D40]">Departure: {item.departure}</p>
                  <p className="text-sm sm:text-base text-[#051D40]">Arrival: {item.arrival}</p>
                </div>
              ))
            ) : (
              <p className="text-[#051D40]">No train schedule available</p>
            )}
          </div>
        )}
      </div>
      <div className="bg-[#E9EAEC] p-4 sm:p-6 lg:p-8 rounded-md mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAD02C] mb-4">Bus Schedule</h2>
        {!loading && !error && (
          <div className="max-h-80 sm:max-h-96 lg:max-h-screen overflow-y-auto">
            {busSchedule.length > 0 ? (
              busSchedule.map((item, index) => (
                <div key={index} className="mb-4 p-4 border-b border-[#FAD02C]">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#051D40]">{item.busName}</h3>
                  <p className="text-sm sm:text-base text-[#051D40]">Departure: {item.departure}</p>
                  <p className="text-sm sm:text-base text-[#051D40]">Arrival: {item.arrival}</p>
                </div>
              ))
            ) : (
              <p className="text-[#051D40]">No bus schedule available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
