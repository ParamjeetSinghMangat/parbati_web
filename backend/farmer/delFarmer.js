const { Client } = require("pg"); //It will be used to connect this page to database library

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "parbati_db",
  password: "admin",
  port: 5432,
});

delFarmer = async (req, res) => { //this statement will access data from html theough index.js so function name should be same
  try {
    
    var formData = req.body;// now req.body will transfer all data to LHS

    client.connect(); // This function will connect to database through client class

    var sqlQuery = `DELETE FROM public.farmers where mobileno= '${formData.farmer_mobileno}' and farmer_id= '${formData.farmer_id}'`;
    await client.query(sqlQuery);
    await client.end();
    res.send("Farmer Entry deleted successfully.");
  } catch (error) {
    console.log(error);
    res.send("Farmer Entry not deleted.");
  }
};

module.exports = delFarmer;
