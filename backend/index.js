const express = require("express");
const bodyParser = require("body-parser");

const saveFeedback = require("./feedback");
const saveFarmer = require("./farmer/savefarmer");
const farmerList = require("./farmer/farmerList");
const delFarmer = require("./farmer/delFarmer");
const findFarmer = require("./farmer/findFarmer");

const app = express();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/feedback", saveFeedback);
app.post("/farmer/save", saveFarmer);
app.get("/farmer/list", farmerList);
app.post("/farmer/del", delFarmer); //here del comes from .html url; so del passes all data to consecutive function which is earlier declered
app.get("/farmer/find", findFarmer);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
