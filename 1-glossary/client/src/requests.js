import axios from 'axios';

const request = {
  fetchNotes: (callback) => {
    axios.get('/words')
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    });
  },

  postNote: (wordData, callback) => {
    axios.post('/words', {
      word: wordData.word,
      definition: wordData.definition
    })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    });
  }
};

export default request;