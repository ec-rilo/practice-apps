const models = require('../models/models');

module.exports = {

  get: (req, res) => {
    models.users.getUser(req.body, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(response);
      }
    });
  },

  post: (req, res) => {
    console.log('req');
    models.users.addUser(req.body, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(response);
      }
    });
  }

};