import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; 
import manzilLogo from "./Component/newlogo2.png";

const PaymentInterface = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const upiId = "ojhaavanish190@okaxis"; 
  const amount = state.bookingData.amount;
  const upiLink = `upi://pay?pa=${upiId}&pn=Manzil&am=${amount}&cu=INR`;

  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentCreated, setPaymentCreated] = useState(false); 

  // Create Payment API call
  const createTransaction = async () => {
    if (transactionId.trim() === "") {
      alert("Please enter a valid Transaction ID.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/payment/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionId, amount }),
      });

      const data = await response.json();

      if (data.success) {
        setPaymentCreated(true); 
        alert("Payment created successfully!");
      } else {
        alert("Payment creation failed. Please try again.");
      }
    } catch (error) {
      alert("Error creating transaction: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Verify Payment API call
  const handlePaymentVerification = async () => {
    if (!paymentCreated) {
      alert("Please create the payment first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/payment/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionId }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Payment verified! Redirecting...");
        navigate('/main/ticket-success');
      } else {
        alert("Invalid or Unverified Transaction ID! Please check again.");
        navigate('/main/ticket-failed');
      }
    } catch (error) {
      alert("Server error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <header className="bg-gray-900 w-full shadow mt-10 mb-0 border border-gray-300 rounded-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
          <img src={manzilLogo} alt="Manzil - Safar Hamara Sath" className="h-20 w-auto" />
        </div>
      </header>

      <main className="flex-grow w-full max-w-4xl px-4 py-10">
        <div className="space-y-8 bg-white shadow-lg rounded-lg p-8 md:p-10 lg:p-12 mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Scan & Pay</h2>
          <p className="text-lg text-gray-600">Pay ₹{amount} to complete your booking.</p>

          <div className="flex justify-center">
            <QRCodeCanvas value={upiLink} size={200} />
          </div>

          <p className="text-md text-gray-500 mt-4">UPI ID: <span className="font-semibold">{upiId}</span></p>

          <div className="mt-4">
            <label htmlFor="transactionId" className="block text-lg font-medium text-gray-700">
              Enter UPI Transaction ID
            </label>
            <input
              type="text"
              id="transactionId"
              placeholder="Transaction ID"
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
          </div>

          <button
            onClick={createTransaction}
            disabled={loading}
            className="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {loading ? "Creating..." : "Create Payment"}
          </button>

          <button
            onClick={handlePaymentVerification}
            disabled={loading || !paymentCreated}
            className="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            {loading ? "Verifying..." : "Verify Payment"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default PaymentInterface;
