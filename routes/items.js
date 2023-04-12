const express = require("express");
const router = express.Router();
const mysql = require('mysql');


// connect to the database
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "express_todo"
});

// console log when the database has successfully connected or show the error
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
});

const sql = 'SELECT * FROM items';
db.query(sql, (err, result) => {
    if (err) throw err;
    module.exports = result;
});

router.post("/", (req, res) => {
let text = (req.body.item_text);
    db.query(`INSERT INTO items (item_text) VALUES ('${text}')`, (err, result) => {
        if (err) throw err;
        console.log(result); 
    })
});

module.exports = router