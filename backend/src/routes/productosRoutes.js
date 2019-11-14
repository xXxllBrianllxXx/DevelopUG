const Productos = require('../models/productos');

module.exports = function (app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.post('/productos', (req, res) => {

        const productosData = {
            tipo: req.body.tipo,
            category: req.body.categoria
        };

        Productos.getProductos(productosData, (err, data) =>{

            if (data) {

                res.json({
                    success: true,
                    msg: 'Exitoso',
                    data: data
                });

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