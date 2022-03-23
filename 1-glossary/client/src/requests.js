import axios from 'axios';

const request = {
  fetchNotes: (callback) => {
    axios.get('/words')
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      console.error(err);
      callback(err, response.data);
    });
  }
};

export default request;