const models = require('../models/models');

module.exports = {

  get: (req, res) => {
    req.body.session_id = req.session_id;
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
    models.users.addUser(req.session_id, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(response);
      }
    });
  },

  put: (req, res) => {
    models.users.updateCheckoutComplete((err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.send(response);
      }
    });
  }

};