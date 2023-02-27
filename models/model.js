const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true
  },
  urlCode: {
    type: String,
    required: true,
    unique: true
  },
  shortUrl: {
    type: String,
    required: true
  }
 
});

module.exports = mongoose.model('Url', urlSchema);
