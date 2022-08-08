
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  email: String,
  name: Object,
  location: Object,
  gender: String,
  fullName: String,
  title: String,
  country: String,
  postCode: String,
  state: String,
  city: String
  });

module.exports = mongoose.model('user', schema);