const app = require("./app");
const config = require('./config/dotenv')

app.listen(config.port, () => {
  console.log(`Server running on port https://localhost:${config.port}`);
});
