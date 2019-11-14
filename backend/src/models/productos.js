const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

let productoModel = {};

productoModel.getProductos = (productosData, callback) => {
    
    if (connection) {

        const sql = `SELECT SQL_CALC_FOUND_ROWS p.id_product AS id_product,
                        c.id_category AS id_category,
                        c.id_parent AS category_parent,
                        p.reference  AS reference,
                        p.price  AS price,
                        pl.name  AS name,
                        pl.link_rewrite  AS link_rewrite,
                        sa.active  AS active,
                        shop.name  AS shopname,
                        image_shop.id_image  AS id_image,
                        cl.name AS name_category,
                        sav.quantity  AS cantidad,
                        IF(sav.quantity<=10, 1, 0) AS stock_bajo 
                FROM  hs_product p 
                    LEFT JOIN hs_product_lang pl ON (pl.id_product = p.id_product AND pl.id_lang = 1 AND pl.id_shop = 1) 
                    LEFT JOIN hs_stock_available sav ON (sav.id_product = p.id_product AND sav.id_product_attribute = 0 AND sav.id_shop = 1  AND sav.id_shop_group = 0 ) 
                    JOIN hs_product_shop sa ON (p.id_product = sa.id_product AND sa.id_shop = 1) 
                    LEFT JOIN hs_category_lang cl ON (sa.id_category_default = cl.id_category AND cl.id_lang = 1 AND cl.id_shop = 1) 
                    LEFT JOIN hs_category c ON (c.id_category = cl.id_category) 
                    LEFT JOIN hs_shop shop ON (shop.id_shop = 1) 
                    LEFT JOIN hs_image_shop image_shop ON (image_shop.id_product = p.id_product AND image_shop.cover = 1 AND image_shop.id_shop = 1) 
                    LEFT JOIN hs_image i ON (i.id_image = image_shop.id_image) 
                    LEFT JOIN hs_product_download pd ON (pd.id_product = p.id_product) 
                WHERE p.active = 1
                    AND c.id_parent = ${connection.escape(productosData.tipo)}
                    AND cl.name = ${connection.escape(productosData.category)}
                ORDER BY  id_product DESC`;
                            
        connection.query(sql, productosData, (err, result) => {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            }
        );

    } else {
        callback(null, null);
    }
}

module.exports = productoModel;