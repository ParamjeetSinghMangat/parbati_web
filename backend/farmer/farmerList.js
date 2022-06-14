const { Client } = require("pg"); //It will be used to connect this page to database library

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "parbati_db",
  password: "admin",
  port: 5432,
});

farmerList = async (req, res) => { //this statement will access data from html
  try {
    
       client.connect(); // This function will connect to database through client class
       
    var sqlQuery = `SELECT * FROM public.farmers`;
    
    resultset = await client.query(sqlQuery);
    //console.log(resultset.rows);

    await client.end();
    res.send(resultset.rows);
  } catch (error) {
    console.log(error);
    res.send("Farmer Entry not Get.");
  }
};

module.exports = farmerList;
