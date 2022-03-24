const db = require('../db.js');

module.exports = {

  getUser: (user, callback) => {
    const query = 'SELECT * FROM users WHERE session_id = ?';

    db.query(query, [user.session_id], (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response[0]);
      }
    });
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