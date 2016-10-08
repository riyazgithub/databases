var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('Controllers messages post');
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      console.log('Controllers users post', req.url, req.body);
      models.users.post(req, res);

    }
  }
};
