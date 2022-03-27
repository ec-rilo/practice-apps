const axios = require('axios');

const form_0 = {

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
  },

  getCheckoutStatus: (callback) => {
    axios.get('/checkout/')
    .then((response) => {
      const status = response.data['checkout_complete'];
      callback(null, status);
    })
    .catch((err) => {
      callback(err);
    })
  }

};

const form_1 = {

  updateUser: (user, callback) => {
    axios.put('checkout/form_1', user)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err);
    })
  }

}

const form_2 = {

  updateUser: (user, callback) => {
    axios.put('/checkout/form_2', user)
    .then((response) => {
      callback(null, response.data);
    })
    .catch(() => {
      callback(err);
    })
  }

}

const form_3 = {

  updateUser: (user, callback) => {
    axios.put('/checkout/form_3', user)
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    })
  }

};

const confirmation_page = {

  setCheckoutComplete: (callback) => {
    axios.put('/checkout')
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    })
  }

}

export { form_0, form_1, form_2, form_3, confirmation_page };