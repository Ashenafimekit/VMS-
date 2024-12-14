import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const Table = () => {
  const [getVehicles, setGetVehicles] = useState([]);
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`${backendURL}/vehicle/get`);
        setGetVehicles(response.data.vehicle);
        //console.log("incoming vehicles : ", getVehicles);
      } catch (error) {
        console.log("Error fetching vehicles : ", error);
      }
    };

    fetchVehicles();
  }, []);


  const handleDelete = async (data) => {
    //console.log("Deleted vehicle : ", data);
    try {
      await axios
        .delete(`${backendURL}/vehicle/delete/${data._id}`)
        .then((res) => {
          if (res.data.status) {
            setGetVehicles((prevVehicles) =>
              prevVehicles.filter((vehicle) => vehicle._id !== data._id)
            );
            setSuccess("successfully Deleted!");
          }
        });
    } catch (error) {
      console.log("Error Deleting : ", error);
      setErr("Unable to Delete!");
    }
  };

  const columns = [
    {
      field: "vehicleName",
      headerName: "Vehicle Name",
      width: 150,
    },
    {
      field: "vehicleNumber",
      headerName: "Vehicle Number",
      width: 150,
    },
    {
      field: "vehicleStatus",
      headerName: "Vehicle Status",
      width: 150,
    },
    {
      field: "vehicleLastUpdate",
      headerName: "Last Update",
      width : 200,
    },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => (
        <button
          className="bg-customBlue rounded-lg"
        >
          <BasicModal row={params.row} getVehicles={getVehicles} />
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <button
          className="bg-customRed px-4 rounded-lg"
          onClick={() => handleDelete(params.row)}
        >
          <DeleteIcon />
        </button>
      ),
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const BasicModal = ({ row, getVehicles }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const date = new Date();
    const lastUpdate =
      date.toLocaleDateString("en-us") + " " + date.toLocaleTimeString("en-us");

    const [editVehicle, setEditVehicle] = useState({
      vehicleName: row.vehicleName,
      vehicleNumber: row.vehicleNumber,
      vehicleStatus: row.vehicleStatus,
      vehicleLastUpdate: lastUpdate,
    });

    const handleChange = (e) => {
      setEditVehicle({
        ...editVehicle,
        [e.target.name]: e.target.value,
      });
    };

    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        await axios
          .put(`${backendURL}/vehicle/update/${row._id}`, editVehicle)
          .then((res) => {
            const updatedVehicle = res.data.vehicle;
            console.log("edited vehicle : ",editVehicle)
            console.log("updated vehicle : ", updatedVehicle)
            setGetVehicles((prevFormData) =>
              prevFormData.map((vehicle) =>
                vehicle._id === updatedVehicle._id ? updatedVehicle : vehicle
              )
            );
            setSuccess("Successfully Updated!");
          });
      } catch (error) {
        console.log("Error updating vehicle : ", error);
        setErr("Unable to Update!");
      }
    };

    return (
      <div>
        <Button onClick={handleOpen}>
          <EditIcon />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Typography>
              <div className="fixed top-2 right-3">
                <button onClick={handleClose}>
                  <DisabledByDefaultIcon sx={{color:"#EF3C43"}}/>
                </button>
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="flex flex-col gap-5 items-center justify-center ">
                <h1 className="text-lg font-semibold text-center">
                  Edit Vehicle
                </h1>
                <form
                  onSubmit={handleUpdate}
                  className="flex flex-col gap-3 items-center jsu  max-w-lg h-full"
                >
                  <input
                    type="text"
                    className="outline-none border border-gray-300 w-full p-1 text-center rounded-lg focus:border-black "
                    onChange={handleChange}
                    placeholder="Vehicle Name"
                    name="vehicleName"
                    value={editVehicle.vehicleName}
                  />
                  <input
                    type="text"
                    className="outline-none border border-gray-300 w-full p-1 text-center rounded-lg focus:border-black "
                    onChange={handleChange}
                    placeholder="Vehicle Number"
                    name="vehicleNumber"
                    value={editVehicle.vehicleNumber}
                  />
                  <input
                    type="text"
                    className="outline-none border border-gray-300 w-full p-1 text-center rounded-lg focus:border-black "
                    onChange={handleChange}
                    placeholder="vehicle Status"
                    name="vehicleStatus"
                    value={editVehicle.vehicleStatus}
                  />
                  <button
                    className="px-5 py-2 rounded-lg bg-customGreen"
                    type="submit"
                  >
                    Update
                  </button>
                </form>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <Box sx={{ height: 370, width: "100%" }}>
      <DataGrid
        rows={getVehicles}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </Box>
  );
};

export default Table;
