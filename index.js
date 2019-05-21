require("dotenv").config();
const async = require("async");
const connectionGetter = require("./lib/connection");
const querier = require("./lib/queries");
const invoker = require("./lib/procedures");
const updater = require("./lib/updates");
const RichResult = require("./lib/model").RichResult;

const services = {
    getQueryResult: function (statement, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.executeStatement(
                        connection,
                        statement,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getStatementResult: function (statement, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.executeStatement(
                        connection,
                        statement,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, result)
            }
        );
    },

    getAllFromTable: function (table, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectAllFromTable(
                        connection,
                        table,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getAllFromTableSortedByField: function (table, field, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectAllFromTableSortedByField(
                        connection,
                        table,
                        field,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getAllFromTableSortedByFieldDesc: function (table, field, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectAllFromTableSortedByFieldDesc(
                        connection,
                        table,
                        field,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleColumnFromTable: function (column, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getDoubleColumnFromTable: function (column1, column2, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getNullFieldFromTable: function (field, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getNullFieldFromTableSortedByField: function (field, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectNullFieldFromTableSortedByField(
                        connection,
                        field,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getNullFieldFromTableSortedByFieldDesc: function (field, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectNullFieldFromTableSortedByFieldDesc(
                        connection,
                        field,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldEqualsValueFromTable: function (field, value, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldEqualsValueFromTableSortedByField: function (field, value, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectSingleFieldEqualsValueFromTableSortedByField(
                        connection,
                        field,
                        value,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldEqualsValueFromTableSortedByFieldDesc: function (field, value, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectSingleFieldEqualsValueFromTableSortedByFieldDesc(
                        connection,
                        field,
                        value,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldStartWithValueFromTable: function (field, value, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldStartWithValueFromTableSortedByField: function (field, value, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectSingleFieldLikeValueFromTableSortedByField(
                        connection,
                        field,
                        value + "%",
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldStartWithValueFromTableSortedByFieldDesc: function (field, value, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectSingleFieldLikeValueFromTableSortedByFieldDesc(
                        connection,
                        field,
                        value + "%",
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldLikeValueFromTable: function (field, value, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldLikeValueFromTableSortedByField: function (field, value, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectSingleFieldLikeValueFromTableSortedByField(
                        connection,
                        field,
                        value,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getSingleFieldLikeValueFromTableSortedByFieldDesc: function (field, value, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectSingleFieldLikeValueFromTableSortedByFieldDesc(
                        connection,
                        field,
                        value,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getDoubleFieldEqualsValueFromTable: function (field1, value1, field2, value2, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getDoubleFieldEqualsValueFromTableSortedByField: function (field1, value1, field2, value2, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectDoubleFieldEqualsValueFromTableSortedByField(
                        connection,
                        field1,
                        value1,
                        field2,
                        value2,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getDoubleFieldEqualsValueFromTableSortedByFieldDesc: function (field1, value1, field2, value2, table, orderField, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    querier.selectDoubleFieldEqualsValueFromTableSortedByFieldDesc(
                        connection,
                        field1,
                        value1,
                        field2,
                        value2,
                        table,
                        orderField,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    getYesterdayFieldFromTable: function (field, table, callback) {
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
            ], (err, result) => {
                callback(err, new RichResult(result))
            }
        );
    },

    callProcedure: function (name, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    invoker.procedure(
                        connection,
                        name,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, result)
            }
        );
    },

    callOneParamProcedure: function (name, param, callback) {
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
            ], (err, result) => {
                callback(err, result)
            }
        );
    },

    callTwoParamProcedure: function (name, param1, param2, callback) {
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
            ], (err, result) => {
                callback(err, result)
            }
        );
    },

    updateSingleTableField: function (table, field, value, whereCondition, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    updater.updateSignleTableField(
                        connection,
                        table,
                        field,
                        value,
                        whereCondition,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, result)
            }
        );
    },

    updateDoubleTableField: function (table, field1, value1, field2, value2, whereCondition, callback) {
        async.waterfall([
                connectionGetter.getConnection,
                (connection, callback) => {
                    updater.updateDoubleTableField(
                        connection,
                        table,
                        field1,
                        value1,
                        field2,
                        value2,
                        whereCondition,
                        (err, result) => callback(err, result)
                    );
                }
            ], (err, result) => {
                callback(err, result)
            }
        );
    }
};

module.exports = services;
