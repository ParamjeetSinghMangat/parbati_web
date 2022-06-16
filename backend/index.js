const express = require("express"); //import express package
const cors = require("cors"); // import cors package

const saveFeedback = require("./feedback"); // importing concerned function to use
const saveFarmer = require("./farmer/savefarmer");
const farmerList = require("./farmer/farmerList");
const delFarmer = require("./farmer/delFarmer");
const findFarmer = require("./farmer/findFarmer");
const updateFarmer = require("./farmer/updateFarmer");

const app = express();
const port = 3000;

app.use(express.json()); //data communicate through JSON
app.use(cors()); // cors enabled if API persist on different server then frontend

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/feedback", saveFeedback);
app.post("/farmer/save", saveFarmer);
app.get("/farmer/list", farmerList);
app.post("/farmer/del", delFarmer); //here del comes from .html url; so del passes all data to consecutive function which is earlier declered
app.post("/farmer/find", findFarmer);
app.post("/farmer/update", updateFarmer);

app.listen(port, () => {
  //it will start server ; should be in last
  console.log(`Example app listening on port ${port}`);
});
