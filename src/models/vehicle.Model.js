const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehicleName: {
    type: String,
    require: true,
  },
  vehicleNumber: {
    type: String,
    require: true,
    unique: true,
  },
  vehicleStatus: {
    type: String,
    require: true,
  },
  vehicleLastUpdate:{
    type: String,
    require: false,
  }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
