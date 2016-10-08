var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req, res) {
      console.log('Messages Request ', req.url);
      db.dbcon.query('INSERT INTO messages SET ?', req.body, function(err, res) {
        if (err) {
          throw err;
        }
        console.log('Inserted Messages', res.insertId);
      });      
      res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {
      console.log('Users Requests ', req.url, 'Body ', typeof req.body);

      db.dbcon.query('INSERT INTO users SET ?', req.body, function(err, res) {
        if (err) {
          throw err;
        }
        console.log('Inserted Users', res.insertId);
      });      
      res.end();
    }
  }
};

