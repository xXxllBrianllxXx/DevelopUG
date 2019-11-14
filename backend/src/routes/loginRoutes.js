const jwt = require('jsonwebtoken');
const key_secret = 'jwt_secret_key';

const Login = require('../models/login');

module.exports = function (app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.post('/api/login', (req, res) => {

        let loginData = {
            user: req.body.user,
            pass: req.body.pass
        };

        Login.getLogin(loginData, (err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: false,
                        msg: 'Credenciales incorrectas',
                        data: []
                    });
                } else if (data.length > 0) {

                    const token = jwt.sign({ loginData }, key_secret);
                    let tokenData = JSON.parse(JSON.stringify(data[0]));

                    Login.updateToken({id: tokenData.id, token}, (err, data) => {

                        if (err) {
                            res.status(500).json({
                                success: false,
                                msg: 'Error al actualizar el token',
                                data: []
                            });
                        }
                    });

                    let response = {
                        id: tokenData.id,
                        user: tokenData.user,
                        token
                    }
                    
                    res.status(200).json({
                        success: true,
                        msg: 'Login exitoso',
                        data: response
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

    app.post('/api/verify-token', (req, res) => {

        let tokenData = {
            user: req.body.user,
            token: req.body.token
        };

        Login.verifyToken(tokenData, (err, data) => {

            if (data) {
                if (data.length === 0) {
                    res.status(200).json({
                        success: false,
                        msg: 'Token incorrecto',
                        data: []
                    });
                } else if (data.length > 0) {

                    res.status(200).json({
                        success: true,
                        msg: 'Token correcto',
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