const oracle = require("oracledb");

const user = process.env.DB_CONNECTION_USER;
const password = process.env.DB_CONNECTION_PASSWORD;
const connectString = process.env.DB_CONNECTION_STRING;

function getConnection(callback) {
    oracle.getConnection({user, password, connectString}, (error, connection) => {
        if (error) {
            return console.log(error);
        }
        callback(error, connection);
    });
}

module.exports.getConnection = getConnection;

