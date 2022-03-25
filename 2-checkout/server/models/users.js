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
    db.beginTransactionAsync()
    .then(() => {
      const query = 'INSERT INTO shipping VALUES (?, null, null, null, null, null, null);';
      db.query(
        query,
        [user.session_id]);
    })
    .then(() => {
      const query = 'INSERT INTO billing VALUES (?, null, null, null, null);';
      db.query(
        query,
        [user.session_id]);
    })
    .then(() => {
      const query = 'INSERT INTO users VALUES (null, ?, ?, ?, ?, 0, ?, ?);';
      db.query(
        query,
        [user.session_id, user.name, user.email, user.password, user.session_id, user.session_id]);
    })
    .then((response) => {
      db.commitAsync((response) => {
        callback(null, response);
      });
    })
    .catch((err) => {
      callback(err);
    });
  }
};