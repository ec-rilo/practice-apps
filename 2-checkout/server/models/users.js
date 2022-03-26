const db = require('../db.js');

module.exports = {

  getUser: (user, callback) => {
    const query = 'SELECT * FROM users, shipping, billing ' +
    'WHERE users.session_id = ? AND users.id_billing = billing.id ' +
    'AND users.id_shipping = shipping.id';

    db.query(query, [user.session_id], (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response[0]);
      }
    });
  },

  addUser: (session_id, callback) => {
    db.beginTransactionAsync()
    .then(() => {
      const query = 'INSERT INTO shipping VALUES (?, null, null, null, null, null, null);';
      db.query(
        query,
        [session_id]);
    })
    .then(() => {
      const query = 'INSERT INTO billing VALUES (?, null, null, null, null);';
      db.query(
        query,
        [session_id]);
    })
    .then(() => {
      const query = 'INSERT INTO users VALUES (null, ?, null, null, null, 0, ?, ?);';
      db.query(
        query,
        [session_id, session_id, session_id]);
    })
    .then((response) => {
      db.commitAsync((response) => {
        callback(null, response);
      });
    })
    .catch((err) => {
      callback(err);
    });
  },

  updateCheckoutComplete: (id, callback) => {
    const query = 'UPDATE users SET checkout_complete = 1 ' +
    'WHERE session_id = ?';

    db.query(query, [id], (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  }

};