const existencia = require('../models/etiquetasmacro');

module.exports = function (app) {
    app.get('/exietiq/:idalmacen/:codigo', (req, res) => {
        let idalmacen=req.params.idalmacen;
        let codigo=req.params.codigo;
        let success;
        let codigoaux;
        existencia.getCodigo2(codigo,(err, data) => {
            if (err){
                res.status(500).send({success:false,
                    message: 'Error al cargar articulo'});
            }
            else{
                if(data.length>0)
                {
                    success=true;
                    codigoaux=data[0].ART_COD1;
                    console.log(codigoaux+" "+success);
                    existencia.getExistenciaAlm(idalmacen,codigoaux,(err, data) => {
                        if (err){
                            res.status(500).send({success:false,
                                message: 'Error al cargar articulo'});
                        }
                        else{
                            res.json({existencia: data});
                        }
                        
                    });
                    
                }
                else
                {
                    success=false;
                    console.log(codigoaux+" "+success);
                    console.log("no se busco codigo 2")
                    existencia.getExistenciaAlm(idalmacen,codigo,(err, data) => {
                        if (err){
                            res.status(500).send({success:false,
                                message: 'Error al cargar articulo'});
                        }
                        else{
                            res.json({existencia: data});
                        }
                        
                    });
                }
            }
            
        });
    });
    app.get('/exietiqcod2/:idalmacen/:codigo', (req, res) => {
        let idalmacen=req.params.idalmacen;
        let codigo=req.params.codigo;
        let success;
        let codigoaux;
        existencia.getCodigo2(codigo,(err, data) => {
            if (err){
                res.status(500).send({success:false,
                    message: 'Error al cargar articulo'});
            }
            else{
                if(data.length>0)
                {
                    success=true;
                    codigoaux=data[0].ART_COD1;
                    console.log(codigoaux+" "+success);
                    existencia.getExistenciaAlm(idalmacen,codigoaux,(err, data) => {
                        if (err){
                            res.status(500).send({success:false,
                                message: 'Error al cargar articulo'});
                        }
                        else{
                            res.json({existencia: data});
                        }
                        
                    });
                    
                }
                else
                {
                    success=false;
                    console.log(codigoaux+" "+success);
                    console.log("no se busco codigo 2")
                    existencia.getExistenciaAlm(idalmacen,codigo,(err, data) => {
                        if (err){
                            res.status(500).send({success:false,
                                message: 'Error al cargar articulo'});
                        }
                        else{
                            res.json({existencia: data});
                        }
                        
                    });
                }
            }
            
        });

    });

}