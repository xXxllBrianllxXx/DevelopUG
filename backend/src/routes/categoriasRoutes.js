const Categorias = require('../models/categorias');

module.exports = function (app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/categorias', (req, res) => {

        Categorias.getCategorias((err, data) => {
            res.status(200).json(data);
        });
    });

    app.post('/categorias', (req, res) => {

        let categoriasData = {};

        if (req.body.tipo == '') {

            categoriasData = {
                tipo: `(SELECT a.id_category FROM hs_category a, hs_category_shop s WHERE a.id_parent = 2 AND a.id_category = s.id_category AND s.id_shop = 1 AND a.active = 1 ORDER BY s.position LIMIT 1)` };
            
        } else {

            categoriasData = {
                tipo: req.body.tipo
            };
        }

        Categorias.getCategorias(categoriasData, (err, data) =>{

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

    app.put('/categorias/:id', (req, res) => {

        const categoriasData = {
            id: req.params.id,
            nombre: req.body.nombre
        };

        Categorias.updateCategorias(categoriasData, (err, data) => {

            if (data && data.msg) {
                res.json(data);
            } else {
                res.json({
                    success: false,
                    msg: 'Error al Actualizar'
                });
            }
        });
    });

    app.delete('/categorias/:id', (req, res) => {

        Categorias.deleteCategorias(req.params.id, (err, result) => {

            if (result && result.msg) {

                res.json({
                    success: true,
                    msg: result.msg
                });
            } else {

                res.status(500).json({
                    success: false,
                    msg: 'Error al eliminar',
                });
            }
        });
    });
}