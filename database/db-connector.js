/*

// Get an instance of mysql we can use in the app
var mysql = require('mysql')


// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_kistlerr',
    password        : '8068',
    database        : 'cs340_kistlerr',
    dateStrings     : 'date'
})

// Export it for use in our applicaiton
module.exports.pool = pool;
*/

var mysql = require('mysql');

// Create a 'connection pool' using the default credentials
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', // Default host for local installations
    user: 'root', // Default user for local installations
    password: '', // Default password is often empty for local installations
    database: 'CS_361', // Default test database
    dateStrings: 'date',
});

// Export it for use in our application
module.exports.pool = pool;
