const axios = require('axios');

const requests = {

  getUser: (callback) => {
    axios.get('/checkout/')
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err);
    });
  },

  addUser: (callback) => {
    axios.post('/checkout/')
    .then((response) => {
      callback(null, response.data)
    })
    .catch((err) => {
      callback(err);
    });
  }

};

export default requests;