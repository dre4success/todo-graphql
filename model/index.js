const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dotenv = require('dotenv');

mongoose.set('debug', true);
dotenv.config({ path: '.env' });

mongoose
  .connect('mongodb://localhost/todo-new', {
    useMongoClient: true
  })
  .catch(err => {
    console.error('Mongoose Error', err.stack);
    process.exit(1);
  });

module.exports.Todo = require('./todo');
