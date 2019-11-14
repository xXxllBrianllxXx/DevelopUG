const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

let categoriasModel = {};

categoriasModel.getCategorias = (categoriasData, callback) => {
    
    if (connection) {

        const sql = `SELECT 'Homie' name, '1' active, '-1' position 
                    FROM hs_category 
                    UNION 
                    SELECT name, active, s.position 
                    FROM hs_category a 
                        LEFT JOIN hs_category_lang b ON (b.id_category = a.id_category AND b.id_lang = 1 AND b.id_shop = 1) 
                        LEFT JOIN hs_category_shop s ON (a.id_category = s.id_category AND s.id_shop = 1) 
                    WHERE a.id_parent != 2
                        AND a.active = 1
                        AND a.id_parent = ${categoriasData.tipo}
                        AND a.id_parent NOT IN (0,1)
                    GROUP BY 1,2,3
                    ORDER BY position`;
        
        connection.query(sql, categoriasData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
}

categoriasModel.insertCategorias = (categoriasData, callback) => {
    
    if (connection) {
        
        connection.query(
            `INSERT INTO hs_web_browser SET ?`,
            categoriasData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, { 'insertId': result.insertId });
                }
            }
        );
    }
}

categoriasModel.updateCategorias = (categoriasData, callback) => {
    
    if (connection) {
        
        const sql = `UPDATE hs_web_browser SET name = ${connection.escape(categoriasData.nombre)} WHERE id_web_browser = ${connection.escape(categoriasData.id)}`;

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    "msg": "Update Exitoso"
                });
            }
        });
    }
}

categoriasModel.deleteCategorias = (id, callback) => {
    
    if (connection) {
        
        const sql = `SELECT name FROM hs_web_browser WHERE id_web_browser = ${connection.escape(id)}`;

        connection.query(sql, (err, row) => {
            if (row) {
                
                const sql = `DELETE FROM hs_web_browser WHERE id_web_browser = ${connection.escape(id)}`;

                connection.query(sql, (err, result) => {
                    if (err) {
                        throw err; 
                    } else {
                        callback(null, {
                            "msg": "Delete Exitoso"
                        });
                    }
                });
            } else {
                callback(null, {
                    "msg": "Not Exists"
                });
            }
        });
    }
}

module.exports = categoriasModel;