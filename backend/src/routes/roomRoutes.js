const jwt = require('jsonwebtoken');
const key_secret = 'jwt_secret_key';

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

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
                    msg: 'Sin conexion a la DB',
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

    app.get('/api/city', (req, res) => {

        Room.getCity((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontraron ciudades',
                        data: []
                    });
                } else if (data.length > 0) {

                    res.status(200).json({
                        success: true,
                        msg: 'Ciudades listadas',
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

    app.get('/api/get-gender', (req, res) => {

        Room.getGender((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontraron generos',
                        data: []
                    });
                } else if (data.length > 0) {

                    res.status(200).json({
                        success: true,
                        msg: 'Generos listados',
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

    app.get('/api/type-doc', (req, res) => {

        Room.getTypesDoc((err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontraron tipos de documento',
                        data: []
                    });
                } else if (data.length > 0) {

                    res.status(200).json({
                        success: true,
                        msg: 'Tipos de documentos listados',
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

    app.post('/api/insert-reservation', (req, res) => {

        let createContact = {
            contact_name: req.body.contact_name,
            contact_phone: req.body.contact_phone
        };

        
        Room.createContact(createContact, (err, data) => {
                        
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al crear el contacto',
                    data: []
                });
            } else {

                let createData = {
                    ini: req.body.ini,
                    end: req.body.end,
                    city: req.body.city,
                    people: req.body.people,
                    christ: req.body.christ,
                    doc: req.body.doc,
                    gender: req.body.gender,
                    mail: req.body.mail,
                    name: req.body.name,
                    phone: req.body.phone,
                    surname: req.body.surname,
                    type_doc: req.body.type_doc,
                    id_hotel_room: req.body.id_hotel_room,
                    id_city: req.body.id_city,
                    id_contact: data[0].id
                };

                Room.createReservation(createData, (err, data) => {

                    if (err) {
                        res.status(500).json({
                            success: false,
                            msg: 'Error al crear la reserva',
                            data: []
                        });
                    } else {

                        let createPeopleData = {
                            ini: req.body.ini,
                            end: req.body.end,
                            city: req.body.city,
                            people: req.body.people,
                            christ: req.body.christ,
                            doc: req.body.doc,
                            gender: req.body.gender,
                            mail: req.body.mail,
                            name: req.body.name,
                            phone: req.body.phone,
                            surname: req.body.surname,
                            type_doc: req.body.type_doc,
                            id_hotel_room: req.body.id_hotel_room,
                            id_city: req.body.id_city,
                            id_reservation: data[0].id
                        };

                        res.status(200).json({
                            success: true,
                            msg: 'Reserva realizada exitosamente',
                            data: createPeopleData
                        });
                        
                    }
                });
            }
        });
    });

    app.post('/api/create-people', (req, res) => {

        let createPeopleData = {
            ini: req.body.ini,
            end: req.body.end,
            city: req.body.city,
            people: req.body.people,
            christ: req.body.christ,
            doc: req.body.doc,
            gender: req.body.gender,
            mail: req.body.mail,
            name: req.body.name,
            phone: req.body.phone,
            surname: req.body.surname,
            type_doc: req.body.type_doc,
            id_hotel_room: req.body.id_hotel_room,
            id_city: req.body.id_city,
            id_reservation: req.body.id_reservation
        };

        Room.createPeople(createPeopleData, (err, data) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Error al crear la reserva',
                    data: []
                });
            } else {

                // Step 1
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'test.ultra.group@gmail.com', // TODO: your gmail account
                        pass: 'Brian1621' // TODO: your gmail password
                    }
                });

                // Step 2
                let mailOptions = {
                    from: 'test.ultra.group@gmail.com', // TODO: email sender
                    to: req.body.mail, // TODO: email receiver
                    subject: 'Reserva de habitación realizada',
                    text: 'El numero de su reserva es ' + req.body.id_reservation 
                };

                // Step 3
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        console.log('Error occurs', err);
                    }
                    console.log('Email sent!!!');
                });

                res.status(200).json({
                    success: true,
                    msg: 'Reserva realizada exitosamente',
                    data: []
                });
            }
        });
    });

    app.post('/api/info-home', (req, res) => {

        let roomData = {
            ini: req.body.ini,
            end: req.body.end,
            city: req.body.city,
            people: req.body.people
        };

        Room.getInfoHome(roomData, (err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: true,
                        msg: 'No se encontro información',
                        data: []
                    });
                } else if (data.length > 0) {

                    res.status(200).json({
                        success: true,
                        msg: 'Información listada',
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