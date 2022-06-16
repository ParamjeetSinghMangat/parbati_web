const { Client } = require("pg"); //It will be used to connect this page to database library

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "parbati_db",
  password: "admin",
  port: 5432,
});

client.connect(); // This function will connect to database through client class
updateFarmer = async (req, res) => {
  //this statement will access data from html
  try {
    var formData = req.body; // now req.body will transfer all data to LHS

    // Update query
    // This will update data of a particular farmer based on farmer id
    var sqlQuery = `UPDATE 
                        public.farmers 
                    SET 
                        name='${formData.farmer_name}', 
                        address='${formData.farmer_address}', 
                        land='${formData.farmer_land}', 
                        mobileno='${formData.farmer_mobileno}', 
                        farmer_id='${formData.farmer_id}', 
                        entrydatetime=NOW()
                    WHERE
                        id='${formData.farmer_sr}'
    `;
    var result = await client.query(sqlQuery); // executes query then save result (which contains no. of rows updated)
    await client.end(); //closes the connection to db.
    res.send(result); //sending result as response to client
  } catch (error) {
    // console.log(error);
    res.send({ rowCount: 0 }); //if any error occurred then return 0 as no row updated in table.
  }
};

module.exports = updateFarmer;
