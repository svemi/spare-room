require('dotenv').config();
const mongoose = require('mongoose');

const DB_NAME = process.env.DB_NAME || 'spareroomdb';
const DB_URL = `mongodb://localhost/${DB_NAME}`;

mongoose.set('strictQuery', false);
mongoose.connect(DB_URL);


const entrySchema = mongoose.Schema({
  user_email: String,
  updated: {type: Date, default: Date.now()},
  title: {type: String},
  text: {type: String}
})

module.exports = mongoose.model('Entry', entrySchema);