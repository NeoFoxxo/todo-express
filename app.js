const express = require('express');
const mysql = require('mysql');
const app = express();

// allow the public folder to be read
app.use(express.static("public"))

// allows json requests to be read
app.use(express.json());

// used to read requests
app.use(express.urlencoded({extended: true}))

// use ejs
app.set('view engine', 'ejs');

// serve the ejs and display all the items
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM items';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('index', { items: result });
    });
})

// DATABASE DETAILS
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

// the endpoint to add items to the database
app.post("/items", (req, res) => {

    // get the text of the item from the frontend
    let text = (req.body.item_text);

    // execute the sql
    db.query(`INSERT INTO items (item_text) VALUES ('${text}')`, (err, result) => {
        if (err) throw err;
        console.log(result); 
    })
});

// the endpoint delete items from the database
app.post("/items/delete", (req, res) => {

    // get the id from the frontend
    let id = (req.body.item_id);

    // execute the sql
    db.query(`DELETE FROM items WHERE items.item_id =('${id}')`, (err, result) => {
        if (err) throw err;
        console.log(result); 
    })
});

// the endpoint to edit items in the database
app.post("/items/edit", (req, res) => {

    // get the id and text that was sent from the frontend
    let id = (req.body.item_id);
    let text = (req.body.item_text);

    // execute the sql
    db.query(`UPDATE items SET item_text = '${text}' WHERE items.item_id = ${id}`, (err, result) => {
        if (err) throw err;
        console.log(result); 
    })
});

// the endpoint to edit items in the database
app.post("/items/finished", (req, res) => {

    // get the id and text that was sent from the frontend
    let isFinished = (req.body.is_finished);
    let id = (req.body.item_id);

    // execute the sql
    db.query(`UPDATE items SET is_finished = '${isFinished}' WHERE items.item_id = ${id}`, (err, result) => {
        if (err) throw err;
        console.log(result); 
    })
});

// start the server
app.listen(3001);