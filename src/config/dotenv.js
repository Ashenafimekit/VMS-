const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
    throw new Error("Failed to load .env file");
}

const requiredEnvVars = ['PORT', 'DB_URI'];
requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
});

module.exports = {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
};
