const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const Controller = require("./controllers/controller");
app.use(express.json());
app.get("/", Controller.home);

app.listen(port, () => {
  console.log("App is running on http://" + hostname + ":" + port + "/");
  // const db = getDatabase();
  // console.log(db);
});
