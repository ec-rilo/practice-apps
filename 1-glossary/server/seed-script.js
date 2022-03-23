const words = [
  {
    "word": "Zaim",
    "definition": "A Turkish chief who supports a mounted militia bearing the same name."
  },
  {
    "word": "Zaimet",
    "definition": "A district from which a Zaim draws his revenue."
  },
  {
    "word": "Zain",
    "definition": "A horse of a dark color, neither gray nor white, and having no spots."
  },
  {
    "word": "Zalambdodont",
    "definition": "Of or pertaining to a tribe (Zalambdodonta) of Insectivora in which the molar teeth have but one V-shaped ridge."
  },
  {
    "word": "Zalambdodont",
    "definition": "One of the Zalambdodonta. The tenrec, solenodon, and golden moles are examples."
  }
];

db.words.insertMany(words)

// mongo localhost/glossary-app ./server/seed-script.js
// Above only works from root directory