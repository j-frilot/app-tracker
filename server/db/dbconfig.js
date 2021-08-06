require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

client.connect();

client.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.log("Error connecting to database: ", err);
    } else {
        console.log("Connection success at: ", res.rows);
    }
});

module.exports = client;
