const db = require('../db.js');

module.exports = {

  getUser: (user, callback) => {

  },

  addUser: (user, callback) => {
    const query = 'INSERT INTO users VALUES (null, ?, ?, ?, ?, 0, null, null)';

    db.query(
      query,
      [user.session_id, user.name, user.email, user.password],
      (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  }
};