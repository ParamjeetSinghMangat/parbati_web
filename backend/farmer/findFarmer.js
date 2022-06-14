const { Client } = require("pg"); //It will be used to connect this page to database library

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "parbati_db",
  password: "admin",
  port: 5432,
});
client.connect(); // This function will connect to database through client class

findFarmer = async (req, res) => {
  //this statement will access data from html theough index.js so function name should be same
  try {
    var formData = req.body; // now req.body will transfer all data to LHS
    console.log(formData);

    // var sqlQuery = `SELECT * FROM public.farmers where mobileno='${formData.mobile_no}'`;
    // var result = await client.query(sqlQuery);
    // await client.end();
    res.send("ok");
    // if (result.rowCount == 0) {
    //   res.send("Farmer not found");
    // } else {
    //   res.send(result.rows);
    // }
  } catch (error) {
    // console.log(error);
    res.send("Farmer not found.");
  }
};

module.exports = findFarmer;
