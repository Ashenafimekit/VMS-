const vehicleService = require("../services/vehicle.Service");

const addVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleService.addVehicle(req.body);
    res.status(200).json({ status: true, vehicle: vehicle });
  } catch (error) {
    res.status(401).json({ status: false });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const update = await vehicleService.updateVehicle(
      req.body,
      req.params.vehicleId
    );
    res.status(200).json({ status: true, vehicle: update });
  } catch (error) {
    res.status(401).json({ status: false });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const Delete = await vehicleService.deleteVehicle(req.params.vehicleId);
    res.status(200).json({ status: true, vehicle: Delete });
  } catch (error) {
    res.status(401).json({ status: false });
  }
};

const getVehicle = async (req, res) => {
  try {
    const vehicles = await vehicleService.getVehicle();
    res.status(200).json({ status: true, vehicle: vehicles });
  } catch (error) {
    res.status(401).json({ status: false });
  }
};

const searchVehicle = async (req, res) => {
  try {
    const vehicle = vehicleService.searchVehicle(req.params.vehicleId);
    res.status(200).json({ status: true, vehicle: vehicle });
  } catch (error) {
    res.status(401).json({ status: false });
  }
};

module.exports = {
  searchVehicle,
  getVehicle,
  deleteVehicle,
  updateVehicle,
  addVehicle,
};
