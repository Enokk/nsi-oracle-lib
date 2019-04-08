require("dotenv").config();
const async = require("async");
const connectionGetter = require("./lib/connection");
const querier = require("./lib/queries");
const invoker = require("./lib/procedures");
const RichResult = require("./lib/model").RichResult;

function getQueryResult(query, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectQuery(
                    connection,
                    query,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, new RichResult(result))
        }
    );
}

function getAllFromTable(table, callback) {
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
            callback(err, new RichResult(result))
        }
    );
}

function getSingleColumnFromTable(column, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectSingleColumnFromTable(
                    connection,
                    column,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, new RichResult(result))
        }
    );
}

function getDoubleColumnFromTable(column1, column2, table, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                querier.selectDoubleColumnFromTable(
                    connection,
                    column1,
                    column2,
                    table,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, new RichResult(result))
        }
    );
}

function getNullFieldFromTable(field, table, callback) {
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
            callback(err, new RichResult(result))
        }
    );
}

function getSingleFieldEqualsValueFromTable(field, value, table, callback) {
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
            callback(err, new RichResult(result))
        }
    );
}

function getSingleFieldStartWithValueFromTable(field, value, table, callback) {
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
            callback(err, new RichResult(result))
        }
    );
}

function getSingleFieldLikeValueFromTable(field, value, table, callback) {
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
            callback(err, new RichResult(result))
        }
    );
}

function getDoubleFieldEqualsValueFromTable(field1, value1, field2, value2, table, callback) {
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
            callback(err, new RichResult(result))
        }
    );
}

function getYesterdayFieldFromTable(field, table, callback) {
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
            callback(err, new RichResult(result))
        }
    );
}

function callProcedure(name, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                invoker.procedure(
                    connection,
                    name,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
}

function callOneParamProcedure(name, param, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                invoker.oneParamProcedure(
                    connection,
                    name,
                    param,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
}

function callTwoParamProcedure(name, param1, param2, callback) {
    async.waterfall([
            connectionGetter.getConnection,
            (connection, callback) => {
                invoker.twoParamProcedure(
                    connection,
                    name,
                    param1,
                    param2,
                    (err, result) => callback(err, result)
                );
            }
        ],(err, result) => {
            callback(err, result)
        }
    );
}

module.exports.getQueryResult = getQueryResult;
module.exports.getAllFromTable = getAllFromTable;
module.exports.getSingleColumnFromTable = getSingleColumnFromTable;
module.exports.getDoubleColumnFromTable = getDoubleColumnFromTable;
module.exports.getNullFieldFromTable = getNullFieldFromTable;
module.exports.getSingleFieldEqualsValueFromTable = getSingleFieldEqualsValueFromTable;
module.exports.getSingleFieldStartWithValueFromTable = getSingleFieldStartWithValueFromTable;
module.exports.getSingleFieldLikeValueFromTable = getSingleFieldLikeValueFromTable;
module.exports.getDoubleFieldEqualsValueFromTable = getDoubleFieldEqualsValueFromTable;
module.exports.getYesterdayFieldFromTable = getYesterdayFieldFromTable;
module.exports.callProcedure = callProcedure;
module.exports.callOneParamProcedure = callOneParamProcedure;
module.exports.callTwoParamProcedure = callTwoParamProcedure;
