const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "parbati_db",
  password: "admin",
  port: 5432,
});

saveFeedback = async (req, res) => {
  try {
    var formData = req.body;
    client.connect();
    var sqlQuery = `INSERT INTO public.feedbacks(name, email, subject, message, "timestamp")
                    VALUES ('${formData.name}', '${formData.email}', '${formData.subject}', '${formData.message}', NOW())`;
    await client.query(sqlQuery);
    await client.end();
    res.send("Feedback saved successfully.");
  } catch (error) {
    console.log(error);
    res.send("Could not save feedback.");
  }
};

module.exports = saveFeedback;
