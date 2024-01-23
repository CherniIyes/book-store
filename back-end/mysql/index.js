const mysql = require('mysql2');
const config = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'bookstore'
};

const connection = mysql.createConnection(config)
connection.connect((err) => {
      if (err) {
            console.log(err)
      }
      else {
            console.log("MYSQL connected")
      }
})



module.exports = {
      getAll: (callback) => {
            const sql = "SELECT * FROM product"
            connection.query(sql, (err, results) => {
                  callback(err, results)
            })
      },
      getone: (id, callback) => {
            const sql = "SELECT * FROM product WHERE id = ?";
            connection.query(sql, [id], (err, results) => {
                  callback(err, results);
            });
      },
      add: (data, callback) => {
            const sql = "INSERT INTO product SET ?"
            connection.query(sql, data, (err, results) => {
                  callback(err, results)
            })
      },
      DELETE: (id, callback) => {
            const sql = "DELETE FROM product WHERE id=?"
            connection.query(sql, id, (err, results) => {
                  callback(err, results)
            })
      },
      update: (id, data, callback) => {
            const sql = "UPDATE `product` SET title=?, price=?, description=?, imageUrl=?, moredes=? WHERE id=?";
            const moredesValue = data.moredes !== null ? data.moredes : null;

            connection.query(sql, [data.title, data.price, data.description, data.imageUrl, moredesValue, id], (err, res) => {
                  callback(err, res);
            });
      },
      search: (searchTerm, callback) => {
            const sql = "SELECT * FROM product WHERE description LIKE ?";
            const searchValue = `%${searchTerm}%`;

            connection.query(sql, [searchValue], (err, results) => {
                  callback(err, results);
            });
      },



};
