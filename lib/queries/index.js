function selectQuery(connection, query, callback) {
    connection.execute(
        query,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectAllFromTable(connection, table, callback) {
    connection.execute(
        `select * from ${table}`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectSingleColumnFromTable(connection, column, table, callback) {
    connection.execute(
        `select ${column} from ${table}`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectDoubleColumnFromTable(connection, column1, column2, table, callback) {
    connection.execute(
        `select ${column1}, ${column2} from ${table}`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectNullFieldFromTable(connection, field, table, callback) {
    connection.execute(
        `select * from ${table} where ${field} is null`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectSingleFieldEqualsValueFromTable(connection, field, value, table, callback) {
    connection.execute(
        `select * from ${table} where ${field} = '${value}'`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectSingleFieldLikeValueFromTable(connection, field, value, table,  callback) {
    connection.execute(
        `select * from ${table} where ${field} like '${value}'`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectDoubleFieldEqualsValueFromTable(connection, field1, value1, field2, value2, table, callback) {
    connection.execute(
        `select * from ${table} where ${field1} = '${value1}' and ${field2} = '${value2}'`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function selectYesterdayFieldFromTable(connection, field, table, callback) {
    connection.execute(
        `select * from ${table} where trunc(${field}) = trunc(sysdate) - 1`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

module.exports.selectQuery = selectQuery;
module.exports.selectAllFromTable = selectAllFromTable;
module.exports.selectSingleColumnFromTable = selectSingleColumnFromTable;
module.exports.selectDoubleColumnFromTable = selectDoubleColumnFromTable;
module.exports.selectNullFieldFromTable = selectNullFieldFromTable;
module.exports.selectSingleFieldEqualsValueFromTable = selectSingleFieldEqualsValueFromTable;
module.exports.selectSingleFieldLikeValueFromTable = selectSingleFieldLikeValueFromTable;
module.exports.selectDoubleFieldEqualsValueFromTable = selectDoubleFieldEqualsValueFromTable;
module.exports.selectYesterdayFieldFromTable = selectYesterdayFieldFromTable;