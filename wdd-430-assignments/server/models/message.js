const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let schema = new mongoose.Schema({
  id: {type: String, required: true},
  subject: {type: String},
  msgText: {type: String, required: true},
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'Contact'}
});

module.exports = mongoose.model('Message', schema);
