const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Controller = require("./controllers/controller");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// for app routes
// app.use("/", require("./routes/webhook_verify"));
app.use(express.static(__dirname));
// app.get("/", Controller.home);

app.listen(port, () => {
  console.log("App is running on http://" + hostname + ":" + port + "/");
  // const db = getDatabase();
  // console.log(db);
});
