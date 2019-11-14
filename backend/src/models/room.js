const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

let roomModel = {};

roomModel.getRooms = (roomData, callback) => {
    
    if (connection) {

        const sql = "SELECT a.id, a.name FROM rooms a, hotel_room b WHERE a.id=b.id_room AND a.state=1 AND b.id_hotel=" + roomData.id;
        
        connection.query(sql, roomData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

roomModel.getRoomsActive = (roomData, callback) => {
    
    if (connection) {

        const sql = "SELECT id, name FROM rooms WHERE state=1";
        
        connection.query(sql, roomData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

roomModel.getTypes = (roomData, callback) => {
    
    if (connection) {

        const sql = "SELECT * FROM types";
        
        connection.query(sql, roomData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

roomModel.getRoom = (roomData, callback) => {
    
    if (connection) {

        const sql = "SELECT a.id, a.name, a.location, a.state, TRUNCATE(a.cost+(a.cost*(a.tax/100)), 0) as cost, a.cost as cost_room,b.name as type, b.id as id_type, a.tax FROM rooms a, types b WHERE a.id_type=b.id";
        
        connection.query(sql, roomData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

roomModel.createRoom = (roomData, callback) => {
    
    if (connection) {

        const sql = "INSERT INTO rooms (name, cost, tax, location, state, id_type) VALUES ('" + roomData.name + "',"  + roomData.cost + "," + roomData.tax + ",'" + roomData.location + "'," + roomData.state + "," + roomData.id_type + ")";
        
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

roomModel.updateStateRoom = (roomData, callback) => {
    
    if (connection) {

        const sql = "UPDATE rooms SET state = '" + roomData.state + "' WHERE id = " + roomData.id;
        
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

roomModel.updateRoom = (roomData, callback) => {
    
    if (connection) {

        const sql = "UPDATE rooms SET cost = " + roomData.cost + ", location = '" + roomData.location + "', name = '" + roomData.name + "', tax = " + roomData.tax + ", id_type = " + roomData.type + " WHERE id = " + roomData.id;
        
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

module.exports = roomModel;
