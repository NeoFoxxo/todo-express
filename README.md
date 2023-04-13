# Express Todo App

This is a simple todo app made with Express.js, JavaScript, EJS, Bootstrap, and MySQL.
<br><br>Made this to get the hang of Express

<b>Timespent:</b> 7 hours 21 mins

## Features
* Add new todo items
* Mark items as completed and it will be saved
* Edit existing todo items
* Delete todo items

## How To Run It

To run this on your local machine, you will need to have Node.js installed and access to a MySQL database.

1. Clone the repository to your local machine
2. Create a database called on your MySQL database
3. Add these rows: `item_id INT AutoIncrement`, `item_text VARCHAR(255)`, and `is_finished Boolean NULL`
4. Change the database details in the `app.js` file to your database
5. Start the app using `node app.js` in your console
6. Open a web browser and navigate to `http://localhost:3001` to access the app

## Screenshots

![Todo List](https://github.com/NeoFoxxo/todo-express/blob/master/express-ss1.png)

### Example of deleting an item
![Delete Functionality](https://github.com/NeoFoxxo/todo-express/blob/master/express-ss2.png)

### Example of making an edit
![Edit Functionality](https://github.com/NeoFoxxo/todo-express/blob/master/express-ss3.png)

### Example of marking an item as finished
![Crossout Functionality](https://github.com/NeoFoxxo/todo-express/blob/master/express-ss4.png)
