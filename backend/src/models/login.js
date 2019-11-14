const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

let loginModel = {};

loginModel.getLogin = (loginData, callback) => {
    
    if (connection) {

        const sql = "SELECT id, user, token FROM agents WHERE user = '" + loginData.user + "' AND pass = '" + loginData.pass + "' LIMIT 1";
        
        connection.query(sql, loginData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

loginModel.verifyToken = (tokenData, callback) => {
    
    if (connection) {

        const sql = "SELECT id, user, token, name FROM agents WHERE user = '" + tokenData.user + "' AND token = '" + tokenData.token + "' LIMIT 1";
        
        connection.query(sql, tokenData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

loginModel.updateToken = (tokenData, callback) => {
    
    if (connection) {

        const sql = "UPDATE agents SET token = '" + tokenData.token + "' WHERE id = " + tokenData.id;
        
        connection.query(sql, (err, result) => {

                if (err) {
                    throw err;
                } else {
                    callback(null, true);
                }
            }
        );
    }
}

module.exports = loginModel;
