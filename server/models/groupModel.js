const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
},{timestamps:true});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
