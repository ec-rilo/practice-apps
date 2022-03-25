const db = require('../db');

module.exports = {

  updateUser: (user, callback) => {
    const query =
    'UPDATE users, billing SET ' +
    'billing.credit_card = ?, billing.expiry_date = ?, ' +
    'billing.cvv = ?, billing.billing_zip = ? ' +
    'WHERE users.session_id = ? AND users.id_billing = users.session_id';
    const params = [
      user.credit_card,
      user.cc_expiry_date,
      user.cc_cvv,
      user.billing_zip,
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