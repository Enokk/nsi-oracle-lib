const updater = {
    updateSignleTableField: function (connection, table, field, value, whereCondition, callback) {
        connection.execute(
            `begin update ${table} set ${field} = ${value} where ${whereCondition}; commit; end;`,
            (err, result) => {
                connection.close();
                callback(err, result);
            }
        );
    },

    updateDoubleTableField: function (connection, table, field1, value1, field2, value2, whereCondition, callback) {
        connection.execute(
            `begin update ${table} set ${field1} = ${value1}, ${field2} = ${value2} where ${whereCondition}; commit; end;`,
            (err, result) => {
                connection.close();
                callback(err, result);
            }
        );
    }
};

module.exports = updater;