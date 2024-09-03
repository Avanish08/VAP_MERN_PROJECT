import React, { useState } from "react";


function BookTrainTicketSystem() {
  const [pnr, setPnr] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [trainStatus, setTrainStatus] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengerCount, setPassengerCount] = useState("");

  const handlePnrChange = (event) => {
    setPnr(event.target.value);
  };

  const handleTrainNumberChange = (event) => {
    setTrainNumber(event.target.value);
  };

  const handleFindTrain = async () => {
    try {
      // Fetch train status from backend
      const response = await fetch(`/api/trains/${trainNumber}`);
      const data = await response.json();
      setTrainStatus(data);
    } catch (error) {
      console.error("Error fetching train status:", error);
      setTrainStatus({ error: "Failed to fetch train status" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Fetch ticket status from backend using PNR
    try {
      const response = await fetch(`/api/tickets/${pnr}`);
      const data = await response.json();
      console.log(data);
      // Update UI based on ticket status
    } catch (error) {
      console.error("Error fetching ticket status:", error);
      // Handle error
    }
  };

  const handleBookTicketSubmit = async (event) => {
    event.preventDefault();

    // Fetch data from backend API
    try {
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to, date, passengerCount }),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Ticket booked successfully!");
      } else {
        // Handle error response
        console.error("Error booking ticket!");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error!", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Book Train Ticket System
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book ticket
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cancel ticket
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Check ticket status
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Track Train
        </button>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">
        Check Ticket status
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="mb-4">
          <label htmlFor="pnr" className="block text-gray-700 font-bold mb-2">
            Enter PNR number:
          </label>
          <input
            type="text"
            id="pnr"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={pnr}
            onChange={handlePnrChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
        >
          Submit
        </button>
      </form>
      <div className="bg-blue-500 p-4 rounded-lg">
        <h2 className="text-white text-2xl font-bold mb-4">Book Ticket</h2>
        <form onSubmit={handleBookTicketSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div>
              <label htmlFor="from" className="text-white">
                From:
              </label>
              <select
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="bg-blue-700 text-white rounded-lg px-3 py-2 focus:outline-none"
              >
                <option value="">Select City</option>
                {/* Fetch city options from backend */}
              </select>
            </div>
            <div>
              <label htmlFor="to" className="text-white">
                To:
              </label>
              <select
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="bg-blue-700 text-white rounded-lg px-3 py-2 focus:outline-none"
              >
                <option value="">Select City</option>
                {/* Fetch city options from backend */}
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label htmlFor="date" className="text-white">
                Date:
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-blue-700 text-white rounded-lg px-3 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="passengerCount" className="text-white">
                No of Passenger:
              </label>
              <input
                type="number"
                id="passengerCount"
                value={passengerCount}
                onChange={(e) => setPassengerCount(e.target.value)}
                className="bg-blue-700 text-white rounded-lg px-3 py-2 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none"
          >
            Find Ticket
          </button>
        </form>
      </div>
      <div className="container mx-auto p-4">
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Track Train</h2>
          <div className="mb-4">
            <label htmlFor="trainNumber" className="block text-gray-700 font-bold mb-2">
              Enter train number:
            </label>
            <input
              type="text"
              id="trainNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={trainNumber}
              onChange={handleTrainNumberChange}
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleFindTrain}
          >
            Find Train
          </button>
        </div>

        {trainStatus && (
          <div className="mt-6 bg-blue-500 text-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Train Status</h3>
            {trainStatus.error ? (
              <p className="text-red-500">{trainStatus.error}</p>
            ) : (
              <div>
                <p>
                  <strong>Train Number:</strong> {trainStatus.trainNumber}
                </p>
                <p>
                  <strong>Status:</strong> {trainStatus.status}
                </p>
                {/* Add other relevant train status details here */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookTrainTicketSystem;