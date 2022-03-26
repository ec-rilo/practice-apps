const db = require('../db');

module.exports = {
  // updates the line1, line2, city, state, zip, and phone number in shipping.
  updateUser: (user, callback) => {
    const query = 'UPDATE shipping, users SET ' +
    'shipping.line_1 = ?, shipping.line_2 = ?, ' +
    'shipping.city = ?, shipping.state = ?, ' +
    'shipping.zip = ?, shipping.phone = ? ' +
    'WHERE users.session_id = ? ' +
    'AND shipping.id = users.id_shipping';

    db.query(
      query,
      [
        user.line_1,
        user.line_2,
        user.city,
        user.state,
        user.zip_shipping,
        user.phone,
        user.session_id
      ],
      (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  }
};