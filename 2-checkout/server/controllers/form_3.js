const models = require('../models/models');

module.exports = {

  put: (req, res) => {
    models.form_3.updateUser(req.body, (err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.send(response);
      }
    });
  }

};