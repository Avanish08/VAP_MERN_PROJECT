const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  AddharCard: {
    type: String,
    required: true
  },
  Email:{
    type: String,
    required: true,
    unique:true
  },
  Password: {
    type: String,
    required: true
  },
  ConfirmPassword: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;