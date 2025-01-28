const mongoose = require('mongoose');

let otherDb;
let OtherDatabase;

mongoose.connect('mongodb+srv://akdis0302:Qwerty65%40123@cluster0.ulnnq.mongodb.net/register&login')
  .then(() => {
    console.log('Mongodb connected to register');
  })
  .catch((err) => {
    console.log('monogodb connection error to register', err);
  });

async function init() {
  try {
    const db = await mongoose.createConnection('mongodb+srv://akdis0302:Qwerty65%40123@cluster0.ulnnq.mongodb.net/VID');
    console.log('Mongodb connected to Vid');
    otherDb = db;

    const otherDatabaseSchema = new mongoose.Schema({
      Name: {
        type: String,
        required: true
      },
      AadharCard: {
        type: String,
        required: true,
        unique: true
      },
      MobileNumber: {
        type: String,
        required: true
      }
    });

    OtherDatabase = otherDb.model('otherdatabase', otherDatabaseSchema);
    module.exports = { OtherDatabase };
  } catch (err) {
    console.log('monogodb connection error to Vid', err);
  }
}

init();