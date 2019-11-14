const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

let reservationModel = {};

reservationModel.getReservations = (reservationData, callback) => {
    
    if (connection) {

        const sql = `SELECT a.id, a.date_start, a.date_end, b.name, d.name as name_hotel, e.name as name_room
                    FROM reservations a, city b, hotel_room c, hotels d, rooms e
                    WHERE a.id_city=b.id AND
                        a.id_hotel_room=c.id AND
                        c.id_hotel=d.id AND
                        c.id_room=e.id AND
                        d.state=1 AND
                        e.state=1
                    ORDER BY d.name`;
        
        connection.query(sql, reservationData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

reservationModel.getReservationDetail = (reservationData, callback) => {
    
    if (connection) {

        const sql = "SELECT a.date_create, a.people, b.name as name_person, b.last_name, b.birth, e.name name_gender, b.number_doc, b.email, b.phone, d.name as type_doc, c.name as name_contact, c.phone as phone_contact FROM reservations a, reservation_detail b, contact c, type_doc d, gender e WHERE a.id=b.id_reservation AND a.id_contact=c.id AND b.id_type_doc=d.id AND b.id_gender=e.id AND a.id=" + reservationData.cod_reservation;
        
        connection.query(sql, reservationData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

module.exports = reservationModel;
