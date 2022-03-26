const models = require('../models/models');

module.exports = {
  put: (req, res) => {
    req.body.session_id = req.session_id;
    models.form_1.updateUser(req.body, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(response);
      }
    });
  }

}