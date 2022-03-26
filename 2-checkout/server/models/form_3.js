const db = require('../db');

module.exports = {

  updateUser: (user, callback) => {
    const query =
    'UPDATE users, billing SET ' +
    'billing.credit_card = ?, billing.expiry_date = ?, ' +
    'billing.cvv = ?, billing.zip_billing = ? ' +
    'WHERE users.session_id = ? AND users.id_billing = users.session_id';
    const params = [
      user.credit_card,
      user.expiry_date,
      user.cvv,
      user.zip_billing,
      user.session_id
    ];

    db.query(query, params, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  }

}