const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const cors = require('cors');
app.use(cors());


const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});

// Rest of your API routes (GET, POST, PUT, DELETE) should be defined here

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
