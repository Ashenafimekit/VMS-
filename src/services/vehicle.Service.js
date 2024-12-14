const Vehicle = require("../models/vehicle.Model");

const addVehicle = async (vehicleInfo) => {
  const { vehicleName, vehicleNumber, vehicleStatus, vehicleLastUpdate } = vehicleInfo;
  //console.log("vehicle info : ", vehicleInfo);
  try {
    const newVehicle = await Vehicle.create({
      vehicleName: vehicleName,
      vehicleNumber: vehicleNumber,
      vehicleStatus: vehicleStatus,
      vehicleLastUpdate: vehicleLastUpdate,
    });
    await newVehicle.save();
    console.log("successfully adedd");
    return newVehicle;
  } catch (error) {
    console.log("Error Adding Vechile : ", error);
  }
};

const updateVehicle = async (updatedVehicle, vehicleId) => {
  //console.log("update vehicle id and vehicle : ", vehicleId, updatedVehicle);
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, updatedVehicle, {
      new: true,
    });
    //console.log("changed vehicle data : ", vehicle);
    return vehicle;
  } catch (error) {
    throw new Error("Error updating vehicle : ", error.message);
  }
};

const deleteVehicle = async (vehicleId) => {
  console.log("delete vehicle id : ", vehicleId);
  try {
    const vehicle = await Vehicle.findOneAndDelete(vehicleId);
    return vehicle;
  } catch (error) {
    throw new Error("Error deleting vehicle : ", error.message);
  }
};

const getVehicle = async () => {
  try {
    const vehicles = await Vehicle.find();
    console.log("vehicles : ", vehicles);
    return vehicles;
  } catch (error) {
    console.log("Error fetching vehicle : " + error.message);
    throw error;
  }
};

const searchVehicle = async (vehicleId) => {
  console.log("search vehicle id : ", vehicleId);
  try {
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      throw new Error("vehicle not found");
    }
    return vehicle;
  } catch (error) {
    throw new Error("Error searching vehicle : " + error.message);
  }
};

module.exports = {
  addVehicle,
  updateVehicle,
  deleteVehicle,
  getVehicle,
  searchVehicle,
};
