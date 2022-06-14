const { Client } = require("pg"); //It will be used to connect this page to database library

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "parbati_db",
  password: "admin",
  port: 5432,
});

saveFarmer = async (req, res) => { //this statement will access data from html
  try {
    
    var formData = req.body;// now req.body will transfer all data to LHS

    client.connect(); // This function will connect to database through client class

    var sqlQuery = `INSERT INTO public.farmers(name, address, land, mobileno, farmer_id,entrydatetime)
                    VALUES ('${formData.farmer_name}', '${formData.farmer_address}', '${formData.farmer_land}', '${formData.farmer_mobileno}', '${formData.farmer_id}', NOW())`;
    await client.query(sqlQuery);
    await client.end();
    res.send("Farmer Entry saved successfully.");
  } catch (error) {
    console.log(error);
    res.send("Farmer Entry not save.");
  }
};

module.exports = saveFarmer;
