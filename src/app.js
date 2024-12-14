const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://vms-kn4z.onrender.com"], // Allow both frontend URLs
  })
);
app.use(express.json());

const vehicleRoute = require("./routes/vehicle.Route");
app.use("/vehicle", vehicleRoute);

connectDB();

module.exports = app;
