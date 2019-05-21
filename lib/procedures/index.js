const invoker = {
    procedure: function (connection, name, callback) {
        connection.execute(
            `begin ${name}; commit; end;`,
            (err, result) => {
                connection.close();
                callback(err, result);
            }
        );
    },

    oneParamProcedure: function (connection, name, param, callback) {
        connection.execute(
            `begin ${name}(:param); commit; end;`,
            [param],
            (err, result) => {
                connection.close();
                callback(err, result);
            }
        );
    },

    twoParamProcedure: function (connection, name, param1, param2, callback) {
        connection.execute(
            `begin ${name}(:param1, :param2); commit; end;`,
            [param1, param2],
            (err, result) => {
                connection.close();
                callback(err, result);
            }
        );
    }
};

module.exports = invoker;