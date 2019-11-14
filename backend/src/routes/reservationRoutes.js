const jwt = require('jsonwebtoken');
const key_secret = 'jwt_secret_key';

const Reservation = require('../models/reservation');

module.exports = function (app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/reservations', (req, res) => {

        Reservation.getReservations((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: false,
                        msg: 'No se encontraron reservas',
                        data: []
                    });
                } else if (data.length > 0) {

                    res.status(200).json({
                        success: true,
                        msg: 'Reservas listadas correctamente',
                        data
                    });
                }                

            } else if (err) {
                console.log(err);
                res.status(500).json({
                    success: false,
                    msg: 'Error al ejecutar Query',
                    data: []
                });

            } else {
                console.log(err);
                res.status(500).json({
                    success: false,
                    msg: 'Sin conecion a la DB',
                    data: []
                });
            }
        });
    });

    app.post('/api/reservations-detail', (req, res) => {

        let reservationData = {
            cod_reservation: req.body.code_reservation
        };

        Reservation.getReservationDetail(reservationData, (err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: false,
                        msg: 'No se encontro detalle',
                        data: []
                    });
                } else if (data.length > 0) {

                    res.status(200).json({
                        success: true,
                        msg: 'Detalle listado correctamente',
                        data
                    });
                }                

            } else if (err) {
                console.log(err);
                res.status(500).json({
                    success: false,
                    msg: 'Error al ejecutar Query',
                    data: []
                });

            } else {
                console.log(err);
                res.status(500).json({
                    success: false,
                    msg: 'Sin conecion a la DB',
                    data: []
                });
            }
        });
    });
}