const jwt = require('jsonwebtoken');
const key_secret = 'jwt_secret_key';

const Hotel = require('../models/hotel');

module.exports = function (app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/hotel', (req, res) => {

        Hotel.getHotel((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: false,
                        msg: 'No se encontraron hoteles',
                        data: []
                    });
                } else if (data.length > 0) {
                    
                    res.status(200).json({
                        success: true,
                        msg: 'Hoteles listados',
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

    app.post('/api/update-state-hotel', (req, res) => {

        let updateData = {
            id: req.body.id,
            state: req.body.state
        };

        Hotel.updateStateHotel(updateData, (err, data) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al actualizar el estado',
                    data: []
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: 'Estado actualizado correctamente',
                    data: []
                });
            }
        });
    });

    app.post('/api/update-name-hotel', (req, res) => {

        let updateData = {
            id: req.body.id,
            name: req.body.name
        };

        Hotel.updateNameHotel(updateData, (err, data) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al actualizar el nombre',
                    data: []
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: 'Nombre actualizado correctamente',
                    data: []
                });
            }
        });
    });

    app.post('/api/update-hotel-rooms', (req, res) => {

        let updateData = {
            id_hotel: req.body.id_hotel,
            id_room: req.body.id_room
        };

        Hotel.updateHotelRooms(updateData, (err, data) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al actualizar las habitaciones',
                    data: []
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: 'Hotel actualizado correctamente',
                    data: []
                });
            }
        });
    });

    app.post('/api/delete-hotel-rooms', (req, res) => {

        let daleteData = {
            id_hotel: req.body.id_hotel
        };

        Hotel.deleteHotelRooms(daleteData, (err, data) => {});
    });

    app.post('/api/create-hotel', (req, res) => {

        let createData = {
            name: req.body.name
        };

        Hotel.createHotel(createData, (err, data) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al crear el hotel',
                    data: []
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: 'Hotel creado exitosamente',
                    data: []
                });
            }
        });
    });
}