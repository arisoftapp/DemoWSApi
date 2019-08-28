let dbMySQL = require('../dbAdmin');
let dbCOBOL = require('../dbMacro');
let busquedaDesc = {};

busquedaDesc.getDescripcion = (busqueda,callback) => {
    if (dbCOBOL) {
        var aux="%"+busqueda+"%";
        console.log(busqueda+" "+aux);
            dbCOBOL.query(`SELECT
            ART_COD1 as "codigo",
            ART_DESC1 as "descripcion"
            FROM PUBLIC.INVART
            WHERE ART_DESC1 LIKE '`+ aux +`'
            `
            , function(err, rows, moreResultSets) {
                if (err) {
                    console.log(err);
                }
                else {
                    callback(null, rows);
                }
		    });
    }
};

busquedaDesc.getDescripcionTodo = (busqueda,callback) => {
    if (dbCOBOL) {
        var aux="%"+busqueda+"%";
        console.log(busqueda+" "+aux);
            dbCOBOL.query(`SELECT
            ART_COD1 as "codigo",
            ART_DESC1 as "descripcion"
            FROM PUBLIC.INVART
            `
            , function(err, rows, moreResultSets) {
                if (err) {
                    console.log(err);
                }
                else {
                    callback(null, rows);
                }
		    });
    }
};


module.exports = busquedaDesc;