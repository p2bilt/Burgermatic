// Set up MySQL connection.
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "3mca0djwbgdwnd",
        database: "burgers_db"
    });

};


const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b8c6fa9b781d46",
    password: "dfb8a686",
    database: "heroku_6cda3c09e407d86"
});

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
