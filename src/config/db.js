const mongoose = require("mongoose");
//const config = require('./dotenv')
//config.dburi

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected!")
  } catch (error) {
    console.log("Database connection faild : ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
