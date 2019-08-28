const busquedaDesc = require('../models/busquedadesc');

module.exports = function (app){


    app.get('/busquedaDesc/:busqueda', (req, res) => {
        let busqueda = req.params.busqueda;
        busquedaDesc.getDescripcion(busqueda,(err, data) => {
            res.json({busqueda: data});
        });
    });
    app.get('/busquedaDescTodo', (req, res) => {
        let busqueda = req.params.busqueda;
        busquedaDesc.getDescripcionTodo(busqueda,(err, data) => {
            res.json({busqueda: data});
        });
    });


}