const mongoose = require("mongoose");
const config = require('./dotenv')

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUri);
    console.log("Database Connected!")
  } catch (error) {
    console.log("Database connection faild : ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
