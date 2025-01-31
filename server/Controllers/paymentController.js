const Transaction = require("../Models/transactionModel");

exports.createPayment = async (req, res) => {
  const { transactionId, amount, state, passengers } = req.body;

  if (!transactionId || !amount) {
    return res.status(400).json({ success: false, message: "Transaction ID and amount are required!" });
  }

  try {
    // Create a new transaction with "pending" status
    const transaction = new Transaction({
      transactionId,
      amount,
      status: "pending",
    });

    await transaction.save();

    return res.json({
      success: true,
      message: "Payment created successfully. Please proceed to verify the payment.",
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

exports.verifyPayment = async (req, res) => {
  const { transactionId } = req.body;

  if (!transactionId) {
    return res.status(400).json({ success: false, message: "Transaction ID is required!" });
  }

  try {
    // Find the transaction by transaction ID and ensure it is verified
    const transaction = await Transaction.findOne({ transactionId });

    if (!transaction) {
      return res.status(404).json({ success: false, message: "Transaction not found!" });
    }

    if (transaction.status === "verified") {
      return res.json({ success: true, message: "Payment verified successfully!" });
    } else {
      return res.status(400).json({ success: false, message: "Transaction not verified yet." });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

exports.simulatePayment = async (req, res) => {
  const { transactionId, amount } = req.body;

  if (!transactionId || !amount) {
    return res.status(400).json({ success: false, message: "Transaction ID and amount are required!" });
  }

  try {
    // Simulate a payment by updating the transaction status to "verified"
    const transaction = await Transaction.findOneAndUpdate(
      { transactionId },
      { status: "verified" },
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({ success: false, message: "Transaction not found!" });
    }

    return res.json({
      success: true,
      message: "Payment successfully simulated and verified!",
    });
  } catch (error) {
    console.error("Error simulating payment:", error);
    return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};
