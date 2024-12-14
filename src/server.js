const app = require("./app");
//const config = require('./config/dotenv')
//config.port

app.listen(process.env.PORT, () => {
  console.log(`Server running on port https://localhost:${process.env.PORT}`);
});
