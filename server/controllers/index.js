var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('hello im in the messages controller');
      models.messages.post(req, res);
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      console.log('Controllser : Options');
      models.messages.options(req, res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      models.users.post(req, res);

    }
  }
};
