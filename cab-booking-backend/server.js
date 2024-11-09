const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/cabBooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Inquiry schema
const inquirySchema = new mongoose.Schema({
  tripType: String,
  date: Date,
  carType: String,
  pickupLocation: String,
  dropLocation: String,
  fullName: String,
  contactNo: String,
  email: String,
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

// API to handle form submissions
app.post("/inquiry", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).send("Inquiry submitted successfully");
  } catch (error) {
    res.status(500).send("Error submitting inquiry");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
