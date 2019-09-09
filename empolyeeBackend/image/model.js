const MysqlConnector = require("./app");
var Promise = require('promise');
var moment = require ('moment')

module.exports = {

    getImage: async( obj)=>{
        var client = null;
        try {
            client = await MysqlConnector.getClientFromPool();
        } catch (err) {
            throw err;
        }
       
        return new Promise((resolve, reject) => {
            client.query(`SELECT * from employee`,  function(err, result) {
            // client.end()
               
                if (err) {
                    return reject(err);
                }
                resolve(result)

            })
        })
    },

    addImage: async (obj) => {
        var client = null;
        try {
            client = await MysqlConnector.getClientFromPool();
        } catch (err) {
            throw err;
        }
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO image (name, create_date) VALUES ?";


            let values = [
                [obj.name, moment(new Date()).format('YYYY-MM-DD')],
            ];
                client.query(sql, [values], (err, result) =>  {
                // client.end()
                
                if (err) {
                    return reject(err);
                }
                resolve(result)
            })

        })
    },
    deleteImage: async (id) => {
        var client = null;
        try {
            client = await MysqlConnector.getClientFromPool();
        } catch (err) {
            throw err;
        }
        return new Promise((resolve, reject) => {
            let deleteQuery = "DELETE from employee where id = ?";
         
            client.query(deleteQuery, [id],  function(err, result) {
            // client.end()
                
                if (err) {
                    return reject(err);
                }
                resolve(result)
            })

        })
    },
}