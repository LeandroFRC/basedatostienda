const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/database') //conexión local a BD
  .then(db => console.log('Se conecto la base de datos'))
  .catch(err => console.error(err));
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://leandrorivera:LeandroR2003@abcd.cluester.mongodb.net/tienda?retryWrites=true&w=majority')
  .then(db => console.log('Se conecto la base de datos'))
  .catch(err => console.error(err));