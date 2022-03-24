const models = require('../models/models');

module.exports = {

  get: (req, res) => {
    console.log("QUERY: ", req.query);
    console.log('BODY: ', req.body);
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