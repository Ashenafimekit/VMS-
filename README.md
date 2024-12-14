# Vehicle Management Dashboard

A simple, interactive vehicle management dashboard built with React.js for the frontend, and Node.js with MongoDB for the backend. This application allows users to manage vehicle data efficiently by adding, updating, deleting, and viewing vehicle information in a flexible table format.

## Features

- **Vehicle Table Display**: Displays vehicle data (name, number, status, and last updated time) fetched from MongoDB in a sortable, filterable, and searchable table.
- **Add New Vehicle**: Adds a new vehicle with a unique vehicle number and sets the "Last Updated" column to "No Update" initially. The table updates immediately after submission.
- **Edit Vehicle**: Each vehicle in the table has an edit button that allows the user to modify its name, number, and status. The "Last Updated" column reflects the current time and date after any edit.
- **Delete Vehicle**: A delete button next to each vehicle allows users to remove vehicles from the table, with immediate updates after deletion.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup Instructions

### Prerequisites

- Node.js (version 14 or above)
- MongoDB (or MongoDB Atlas for cloud database)

### Installation

1. Clone the repository:
   git clone https://github.com/Ashenafimekit/VMS-.git

2. Install backend dependencies:
   cd backend
   npm install

3. Install frontend dependencies:
   cd frontend
   npm install

4. Set up your MongoDB database. If you're using MongoDB Atlas, create a cluster and get your connection string. Update the connection string in `backend/config/db.js`.

5. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

6. Start the frontend server:
   ```bash
   cd frontend
   npm run dev
   ```

Now, open your browser and navigate to `http://localhost:5173` to view the dashboard.

## Usage

### Displaying Vehicles

The vehicles are fetched from MongoDB and displayed in a table. You can search, sort, and filter the table to easily manage the vehicle list.

**Screenshot:**
![Display Vehicles](/images/Display%20Vehicle.jpg)

### Adding a Vehicle

Click the "Add Vehicle" button to open a modal. Enter the vehicle's name, number, and status. The vehicle number must be unique. After submission, the table is updated with the new vehicle and the "Last Updated" column is set to "No Update."

**Screenshot:**
![Add Vehicle Button](/images/Add%20Vehicle%20button.jpg)
![Add Vehicle Modal](/images/Add%20vehicle%20modal.jpg)

### Editing a Vehicle

Each row in the table has an "Edit" button. Clicking this button opens a modal with the vehicle’s data. You can modify the vehicle details and save the changes, which will update the "Last Updated" column with the current time and date.

**Screenshot:**
![Edit Vehicle Button](/images/Edit%20Vehicle%20Button.jpg)
![Edit Vehicle Modal](/images/Edit%20Vehicle%20Modal.jpg)

### Deleting a Vehicle

Each row also has a "Delete" button. Clicking the button will remove the vehicle from the database, and the table will update immediately.

**Screenshot:**
![Delete Vehicle](/images/Delete%20Vehicle%20Button.jpg)

## API Endpoints

- `GET /api/vehicle/get`: Fetch all vehicles from the database.
- `POST /api/vehicle/add`: Add a new vehicle.
- `PUT /api/vehicle/update/:id`: Update an existing vehicle.
- `DELETE /api/vehicle/delete/:id`: Delete a vehicle by its ID.
