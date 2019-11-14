const jwt = require('jsonwebtoken');
const key_secret = 'jwt_secret_key';

const Room = require('../models/room');

module.exports = function (app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.post('/api/room', (req, res) => {

        let roomData = {
            id: req.body.id
        };

        Room.getRooms(roomData, (err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontraron habitaciones',
                        data: []
                    });
                } else if (data.length > 0) {
                    
                    res.status(200).json({
                        success: true,
                        msg: 'Habitaciones listadas',
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

    app.get('/api/room-actives', (req, res) => {

        Room.getRoomsActive((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontraron habitaciones',
                        data: []
                    });
                } else if (data.length > 0) {
                    
                    res.status(200).json({
                        success: true,
                        msg: 'Habitaciones listadas',
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

    app.get('/api/room-all', (req, res) => {

        Room.getRoom((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontraron habitaciones',
                        data: []
                    });
                } else if (data.length > 0) {
                    
                    res.status(200).json({
                        success: true,
                        msg: 'Habitaciones listadas',
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

    app.get('/api/types', (req, res) => {

        Room.getTypes((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontraron tipos',
                        data: []
                    });
                } else if (data.length > 0) {
                    
                    res.status(200).json({
                        success: true,
                        msg: 'Tipos listados',
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

    app.post('/api/update-state-room', (req, res) => {

        let updateData = {
            id: req.body.id,
            state: req.body.state
        };

        Room.updateStateRoom(updateData, (err, data) => {

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

    app.post('/api/update-room', (req, res) => {

        let updateData = {
            id: req.body.id,
            cost: req.body.cost,
            location: req.body.location,
            name: req.body.name,
            tax: req.body.tax,
            type: req.body.type
        };

        Room.updateRoom(updateData, (err, data) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al actualizar la habitació',
                    data: []
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: 'Habitació actualizada correctamente',
                    data: []
                });
            }
        });
    });

    app.post('/api/create-room', (req, res) => {

        let createData = {
            name: req.body.name,
            cost: req.body.cost,
            tax: req.body.tax,
            location: req.body.location,
            state: 1,
            id_type: req.body.type
        };

        Room.createRoom(createData, (err, data) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al crear la habitación',
                    data: []
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: 'Habitación creada exitosamente',
                    data: []
                });
            }
        });
    });

}