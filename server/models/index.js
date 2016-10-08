var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      var data;
      db.dbcon.query('SELECT * from messages', function(err, rows, fields) {
        res.end(JSON.stringify(rows));
      });  
    }, // a function which produces all the messages
    post: function (req, res) {
      db.dbcon.query('INSERT INTO messages SET ?', req.body, function(err, res) {
        if (err) {
          throw err;
        }
      });      
      res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      var data;
      db.dbcon.query('SELECT * from users', function(err, rows, fields) {
        res.end(JSON.stringify(rows));
      }); 
    },
    post: function (req, res) {
      db.dbcon.query('INSERT INTO users SET ?', req.body, function(err, res) {
        if (err) {
          throw err;
        }
      });      
      res.end();
    }
  }
};

