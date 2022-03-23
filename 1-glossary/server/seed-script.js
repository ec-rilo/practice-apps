const Word = require('./db.js');

const word1 = new Word({
  word: 'atrocity',
  definition: 'The word atrocity describes both the act of cruelty as well as the sense of cruelty.'
});
const words = [word1.save];

module.exports = words;