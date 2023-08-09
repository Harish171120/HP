const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
    } else {
        console.log("Connected to database");
    }
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, data) => {
        if (err) return res.json({ error: "An error occurred" });
        return res.json(data);
    });
});

app.get("/:id", (req, res) => {
    const sql = "SELECT * FROM employee WHERE ID=? ";
    const values =[
        req.params.id
    ]
    db.query(sql,values, (err, data) => {
        if (err) return res.json({ error: "An error occurred" });
        console.log(data)
        return res.json(data);
    });

});
app.post('/create', (req, res) => {
    const sql = "INSERT INTO employee (Name, Email) VALUES (?, ?)";
    const values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json({ error: "An error occurred" });
        return res.json(data);
    });
});

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE employee SET Name=?, Email=? WHERE ID=?";
    const values = [
        req.body.name,
        req.body.email,
        req.params.id
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json({ error: "An error occurred" });
        return res.json(data);
    });
});

app.delete('/employee/:id', (req, res) => {
    const sql = "DELETE FROM employee WHERE ID=?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json({ error: "An error occurred" });
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Server listening on port 8081");
});
