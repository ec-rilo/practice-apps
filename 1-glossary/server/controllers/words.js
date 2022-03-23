const models = require('../models/models');

module.exports = {
  post: (req, res) => {
    models.words.postOne(req.body, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err, 'Error!');
      } else {
        res.send(response);
      }
    });
  }
}