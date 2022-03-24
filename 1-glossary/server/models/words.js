const Word = require('../db');

module.exports = {
  postOne: (wordData, callback) => {
    const word = new Word({
      word: wordData.word,
      definition: wordData.definition
    });

    word.save()
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    });
  },

  getAll: (callback) => {
    Word.find({}, (err, data) => {
      if (err) {
        callback(err, data);
      } else {
        callback(null, data);
      }
    });
  },

  deleteOne: (wordsData, callback) => {
    Word.deleteOne({ _id: wordsData._id}, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  editOne: (wordData, callback) => {
    Word.findByIdAndUpdate(wordData._id, { word: wordData.word, definition: wordData.definition }, (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  }
}