const express = require('express')
const router = express.Router();

const { addVehicle, deleteVehicle, updateVehicle, getVehicle, searchVehicle } = require('../controllers/vehicle.Controller.js');

router.post('/add',addVehicle);
router.get('/get',getVehicle)
router.get('/search/:vehicleId',searchVehicle)
router.put('/update/:vehicleId',updateVehicle)
router.delete('/delete/:vehicleId',deleteVehicle)
module.exports = router;

