function procedure(connection, name, callback) {
    connection.execute(
        `begin ${name}; commit; end;`,
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function oneParamProcedure(connection, name, param, callback) {
    connection.execute(
        `begin ${name}(:param); commit; end;`,
        [param],
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

function twoParamProcedure(connection, name, param1, param2, callback) {
    connection.execute(
        `begin ${name}(:param1, :param2); commit; end;`,
        [param1, param2],
        (err, result) => {
            connection.close();
            callback(err, result);
        }
    );
}

module.exports.procedure = procedure;
module.exports.oneParamProcedure = oneParamProcedure;
module.exports.twoParamProcedure = twoParamProcedure;