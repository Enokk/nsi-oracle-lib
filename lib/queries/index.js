const querier = {
        executeStatement: function (connection, query, callback) {
            connection.execute(
                query,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectAllFromTable: function (connection, table, callback) {
            connection.execute(
                `select * from ${table}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectAllFromTableSortedByField: function (connection, table, field, callback) {
            connection.execute(
                `select * from ${table} order by ${field}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectAllFromTableSortedByFieldDesc: function (connection, table, field, callback) {
            connection.execute(
                `select * from ${table} order by ${field} desc`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectSingleColumnFromTable: function (connection, column, table, callback) {
            connection.execute(
                `select ${column} from ${table}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectDoubleColumnFromTable: function (connection, column1, column2, table, callback) {
            connection.execute(
                `select ${column1}, ${column2} from ${table}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectNullFieldFromTable: function (connection, field, table, callback) {
            connection.execute(
                `select * from ${table} where ${field} is null`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectNullFieldFromTableSortedByField: function (connection, field, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field} is null order by ${orderField}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectNullFieldFromTableSortedByFieldDesc: function (connection, field, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field} is null order by ${orderField} desc`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectSingleFieldEqualsValueFromTable: function (connection, field, value, table, callback) {
            connection.execute(
                `select * from ${table} where ${field} = '${value}'`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectSingleFieldEqualsValueFromTableSortedByField: function (connection, field, value, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field} = '${value}' order by ${orderField}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectSingleFieldEqualsValueFromTableSortedByFieldDesc: function (connection, field, value, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field} = '${value}' order by ${orderField} desc`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectSingleFieldLikeValueFromTable: function (connection, field, value, table, callback) {
            connection.execute(
                `select * from ${table} where ${field} like '${value}'`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectSingleFieldLikeValueFromTableSortedByField: function (connection, field, value, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field} like '${value}' order by ${orderField}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectSingleFieldLikeValueFromTableSortedByFieldDesc: function (connection, field, value, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field} like '${value}' order by ${orderField} desc`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectDoubleFieldEqualsValueFromTable: function (connection, field1, value1, field2, value2, table, callback) {
            connection.execute(
                `select * from ${table} where ${field1} = '${value1}' and ${field2} = '${value2}'`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectDoubleFieldEqualsValueFromTableSortedByField: function (connection, field1, value1, field2, value2, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field1} = '${value1}' and ${field2} = '${value2}' order by ${orderField}`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectDoubleFieldEqualsValueFromTableSortedByFieldDesc: function (connection, field1, value1, field2, value2, table, orderField, callback) {
            connection.execute(
                `select * from ${table} where ${field1} = '${value1}' and ${field2} = '${value2}' order by ${orderField} desc`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        },

        selectYesterdayFieldFromTable: function (connection, field, table, callback) {
            connection.execute(
                `select * from ${table} where trunc(${field}) = trunc(sysdate) - 1`,
                (err, result) => {
                    connection.close();
                    callback(err, result);
                }
            );
        }
    }
;

module.exports = querier;