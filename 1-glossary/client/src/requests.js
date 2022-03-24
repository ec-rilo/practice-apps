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
  },

  deleteNote: (_id, callback) => {
    axios.delete('/words', {
      params: {
        _id
      }
    })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      console.error(err);
    });
  },

  updateNote: (wordData, callback) => {
    axios.put('/words', {
      word: wordData.word,
      definition: wordData.definition,
      _id: wordData._id
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