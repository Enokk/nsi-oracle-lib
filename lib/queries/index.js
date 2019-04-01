function selectAllFromTable(connection, table, callback) {
    connection.execute(
        `select * from ${table}`,
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

module.exports.selectAllFromTable = selectAllFromTable;
module.exports.selectNullFieldFromTable = selectNullFieldFromTable;
module.exports.selectSingleFieldEqualsValueFromTable = selectSingleFieldEqualsValueFromTable;
module.exports.selectSingleFieldLikeValueFromTable = selectSingleFieldLikeValueFromTable;
module.exports.selectDoubleFieldEqualsValueFromTable = selectDoubleFieldEqualsValueFromTable;
module.exports.selectYesterdayFieldFromTable = selectYesterdayFieldFromTable;