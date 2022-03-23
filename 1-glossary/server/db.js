const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/glossary-app', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('You connected to mongo!');
  }
});

const word = new Schema({
  word: String,
  definition: String
});

const Word = mongoose.model('Word', word);

module.exports = Word;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
