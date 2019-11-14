const Tipos = require('../models/tipos');

module.exports = function (app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/tipos', (req, res) => {

        Tipos.getTipos((err, data) => {

            if (data) {

                res.status(200).json(data);

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