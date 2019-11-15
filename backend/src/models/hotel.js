const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

let hotelModel = {};

hotelModel.getHotel = (hotelData, callback) => {
    
    if (connection) {

        const sql = "SELECT a.id, a.name, a.state FROM hotels a";
        
        connection.query(sql, hotelData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

hotelModel.updateStateHotel = (hotelData, callback) => {
    
    if (connection) {

        const sql = "UPDATE hotels SET state = '" + hotelData.state + "' WHERE id = " + hotelData.id;
        
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

hotelModel.updateNameHotel = (hotelData, callback) => {
    
    if (connection) {

        const sql = "UPDATE hotels SET name = '" + hotelData.name + "' WHERE id = " + hotelData.id;
        
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

hotelModel.updateHotelRooms = (hotelData, callback) => {
    
    if (connection) {

        const sql = "INSERT INTO hotel_room (id_hotel, id_room) VALUES (" + hotelData.id_hotel + "," + hotelData.id_room + ")";
        
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

hotelModel.deleteHotelRooms = (hotelData, callback) => {
    
    if (connection) {

        const sql = "DELETE FROM hotel_room WHERE id_hotel =" + hotelData.id_hotel;
        
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

hotelModel.createHotel = (createData, callback) => {
    
    if (connection) {

        const sql = "INSERT INTO hotels (name) VALUES ('" + createData.name + "')";
        
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

module.exports = hotelModel;
