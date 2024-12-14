import axios from "axios";
import React, { useEffect, useState } from "react";

const AddVehicle = () => {
  const [addVehicle, setAddVehicle] = useState({
    vehicleName: "",
    vehicleNumber: "",
    vehicleStatus: "",
    vehicleLastUpdate: "No Update",
  });
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setAddVehicle({
      ...addVehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted Vehicle : ", addVehicle);
    try {
      await axios
        .post("http://localhost:3000/vehicle/add", addVehicle)
        .then((res) => {
          if (res.data.status === true) {
            setSuccess("Successfully submitted!");
            location.reload()
          } else {
            setErr("please try again!");
          }
        });
      setAddVehicle({
        vehicleName: "",
        vehicleNumber: "",
        vehicleStatus: "",
        vehicleLastUpdate: "No Update",
      });
    } catch (error) {
      console.log("Error Adding vehicles : ", error);
      setErr("Unable to Add vehicle");
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center ">
      <h1 className="text-lg font-semibold text-center">Add Vehicle</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center jsu  max-w-lg h-full"
      >
        <input
          type="text"
          className="outline-none border border-gray-300 w-full p-1 text-center rounded-lg focus:border-black "
          onChange={handleChange}
          placeholder="Vehicle Name"
          name="vehicleName"
          value={addVehicle.vehicleName}
        />
        <input
          type="text"
          className="outline-none border border-gray-300 w-full p-1 text-center rounded-lg focus:border-black "
          onChange={handleChange}
          placeholder="Vehicle Number"
          name="vehicleNumber"
          value={addVehicle.vehicleNumber}
        />
        <input
          type="text"
          className="outline-none border border-gray-300 w-full p-1 text-center rounded-lg focus:border-black "
          onChange={handleChange}
          placeholder="vehicle Status"
          name="vehicleStatus"
          value={addVehicle.vehicleStatus}
        />
        <button className="px-5 py-2 rounded-lg bg-customGreen" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
