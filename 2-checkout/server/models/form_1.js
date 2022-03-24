const db = require('../db');

module.exports = {

  updateUser: (user, callback) => {
    const query = 'UPDATE users ' +
    'SET name = ?, email = ?, password = ? ' +
    'WHERE session_id = ?';

    db.query(
      query,
      [user.name, user.email, user.password, user.session_id],
      (err, response) => {
      if (err) {
        callback(err, response);
      } else {
        callback(null, response);
      }
    });
  }

};