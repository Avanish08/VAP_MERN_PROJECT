const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "verified", "failed"], default: "pending" },
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
