var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'hackreactor');
exports.User = db.define('users', {
  username: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primaryKey: true}
}, {
  timestamps: false
}
);
exports.Room = db.define('rooms', {
  roomname: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primaryKey: true}
}, {
  timestamps: false
});

exports.Message = db.define('messages', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING,
}, {
  timestamps: false
});

// User.sync()
//   .then(function() {
//     //this is our post
//     // Now instantiate an object and save it:
//     return User.create({id:, username: 'Jean Valjean'});
//   })
//   .then(function() {
//     //this is our get 
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });


exports.dbcon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hackreactor',
  database: 'chat'
});


