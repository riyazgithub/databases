var db = require('../db');
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};


module.exports = {
  messages: {
    get: function (req, res) {
      var data;
      db.dbcon.query('SELECT * from messages', function(err, rows, fields) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(rows));
      });  
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log('INSERT INTO messages SET ?', req.body);
      req.on('data' , function(data) {
        console.log('Data ', data, data.toString());
        db.dbcon.query('INSERT INTO messages SET ?', JSON.parse(data.toString()), function(err, res) {
          if (err) {
            throw err;
          }
        });      
      });
      res.writeHead(200, headers);
      res.end();
    }, // a function which can be used to insert a message into the database
    options: function (req, res) {
      console.log('module options');
      res.writeHead(200, headers);
      res.end();
    }
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      var data;
      db.dbcon.query('SELECT * from users', function(err, rows, fields) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(rows));
      }); 
    },
    post: function (req, res) {
      db.dbcon.query('INSERT INTO users SET ?', req.body, function(err, res) {
        if (err) {
          throw err;
        }
      });      
      res.writeHead(200, headers);
      res.end();
    }
  }
};

