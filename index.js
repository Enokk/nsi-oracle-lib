require("dotenv").config();
const async = require("async");
const connectionGetter = require("./connection");
const querier = require("./queries");

const getAllFromTable = function(table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectAllFromTable(
                    connection,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
};

const getNullFieldFromTable = function(field, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectNullFieldFromTable(
                    connection,
                    field,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
};

const getSingleFieldEqualsValueFromTable = function(field, value, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectSingleFieldEqualsValueFromTable(
                    connection,
                    field,
                    value,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
};

const getSingleFieldStartWithValueFromTable = function(field, value, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectSingleFieldLikeValueFromTable(
                    connection,
                    field,
                    value + "%",
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
};

const getSingleFieldLikeValueFromTable = function(field, value, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectSingleFieldLikeValueFromTable(
                    connection,
                    field,
                    value,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
};

const getDoubleFieldEqualsValueFromTable = function(field1, value1, field2, value2, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectDoubleFieldEqualsValueFromTable(
                    connection,
                    field1,
                    value1,
                    field2,
                    value2,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
};

const getYesterdayFieldFromTable = function(field, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectYesterdayFieldFromTable(
                    connection,
                    field,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
};

module.exports.getAllFromTable = getAllFromTable;
module.exports.getNullFieldFromTable = getNullFieldFromTable;
module.exports.getSingleFieldEqualsValueFromTable = getSingleFieldEqualsValueFromTable;
module.exports.getSingleFieldStartWithValueFromTable = getSingleFieldStartWithValueFromTable;
module.exports.getSingleFieldLikeValueFromTable = getSingleFieldLikeValueFromTable;
module.exports.getDoubleFieldEqualsValueFromTable = getDoubleFieldEqualsValueFromTable;
module.exports.getYesterdayFieldFromTable = getYesterdayFieldFromTable;