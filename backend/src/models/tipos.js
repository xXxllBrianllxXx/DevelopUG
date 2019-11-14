const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

let tiposModel = {};

tiposModel.getTipos = (callback) => {
    
    if (connection) {

        const sql = `SELECT a.id_category, 
                            b.name nombre,
                            'https://i.pinimg.com/236x/72/89/32/728932d7b891dd08b43e6852b2a59c03--dark-night-gothic-clothing.jpg' img,
                            6 size
                    FROM hs_category a 
                        LEFT JOIN hs_category_lang b ON (b.id_category = a.id_category AND b.id_lang = 1 AND b.id_shop = 1) 
                        LEFT JOIN hs_category_shop s ON (a.id_category = s.id_category AND s.id_shop = 1) 
                    WHERE a.id_parent = 2
                        AND a.active = 1
                    ORDER BY s.position`;
        
        connection.query(sql, (err, rows) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, rows);
                }
            }
        );
    } else {
        callback(null, null);
    }
}

module.exports = tiposModel;