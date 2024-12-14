import React, { useState } from "react";
import Table from "./Table";
//import Modal from "./Modal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddVehicle from "./AddVehicle";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const Body = () => {
  const [showModal, setShowModal] = useState(false);

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

  const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <Button onClick={handleOpen}>
        <button
            className="bg-customGreen px-10 py-3 rounded-lg text-sm font-bold text-white"
            onClick={() => setShowModal(true)}
          >
            Add Vehicle
          </button>
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
              <AddVehicle/>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3 bg-white mx-10 rounded-md py-10 overflow-y-scroll">
      <div className="flex flex-row items-center justify-between px-8">
        <div className="">
          <h1 className="text-lg font-bold">List of Vehicle</h1>
        </div>
        <div className="flex justify-end w-5/6 relative">
          
          <div className="">
            <BasicModal />
          </div>
        </div>
      </div>
      <div className="px-8">
        <Table />
      </div>
    </div>
  );
};

export default Body;
