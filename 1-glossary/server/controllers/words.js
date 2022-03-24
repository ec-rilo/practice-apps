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
  },

  get: (req, res) => {
    models.words.getAll((err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(response)
      }
    });
  },

  delete: (req, res) => {
    models.words.deleteOne(req.query, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(`Word with id# ${req.query._id} has been deleted.`);
      }
    });
  },

  put: (req, res) => {
    models.words.editOne(req.body, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(`Word with ID# ${req.body._id} has been updated.`);
      }
    });
  }
}