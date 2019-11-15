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

roomModel.getCity = (roomData, callback) => {

    if (connection) {

        const sql = "SELECT * FROM city";

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

roomModel.getInfoHome = (roomData, callback) => {

    let add = '';

    if (roomData.city !== 0) {
        add = 'AND b.location = ' + roomData.city;
    }

    if (connection) {

        const sql = "SELECT a.id, c.name, b.cost, d.name as city, b.name as name_room, d.id as id_city FROM hotel_room a, rooms b, hotels c, city d WHERE a.id_hotel=c.id AND a.id_room=b.id AND b.location=d.id " + add;

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

roomModel.getTypesDoc = (roomData, callback) => {

    if (connection) {

        const sql = "SELECT * FROM type_doc";

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

roomModel.getGender = (roomData, callback) => {

    if (connection) {

        const sql = "SELECT * FROM gender";

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

roomModel.createPeople = (roomData, callback) => {

    if (connection) {

        const sql = "INSERT INTO reservation_detail(name, last_name, birth, id_gender, number_doc, email, phone, id_reservation, id_type_doc) VALUES ('" + roomData.name + "','" + roomData.surname + "','" + roomData.christ + "','" + roomData.gender + "','" + roomData.doc + "','" + roomData.mail + "','" + roomData.phone + "','" + roomData.id_reservation + "','" + roomData.type_doc + "')";

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

roomModel.createContact = (roomData, callback) => {

    if (connection) {

        const sql = "INSERT INTO contact(name, phone) VALUES ('" + roomData.contact_name + "','" + roomData.contact_phone + "')";

        connection.query(sql, (err, result) => {

                if (err) {
                    throw err;
                } else {

                    const sql_id = "SELECT LAST_INSERT_ID() as id;";

                    connection.query(sql_id, (err, result) => {

                            if (err) {
                                throw err;
                            } else {
                                callback(null, result);
                            }
                        }
                    );
                }
            }
        );


    }
}

roomModel.createReservation = (roomData, callback) => {

    if (connection) {

        const sql = "INSERT INTO reservations(date_create, date_start, date_end, people, id_city, id_hotel_room, id_contact) VALUES (CURDATE(),'" + roomData.ini + "','" + roomData.end + "','" + roomData.people + "','" + roomData.id_city + "','" + roomData.id_hotel_room + "','" + roomData.id_contact + "')";

        connection.query(sql, (err, result) => {

                if (err) {
                    throw err;
                } else {

                    const sql_id = "SELECT LAST_INSERT_ID() as id;";

                    connection.query(sql_id, (err, result) => {

                            if (err) {
                                throw err;
                            } else {
                                callback(null, result);
                            }
                        }
                    );
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
