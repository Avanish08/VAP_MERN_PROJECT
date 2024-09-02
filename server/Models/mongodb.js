const mongoose = require('mongoose');

let otherDb;
let OtherDatabase;

mongoose.connect('mongodb+srv://akdis0302:ak.dis0302@databasersvp.oboiv.mongodb.net/Register&Login?retryWrites=true&w=majority&appName=databaseRSVP')
  .then(() => {
    console.log('Mongodb connected to register');
  })
  .catch((err) => {
    console.log('monogodb connection error to register', err);
  });

async function init() {
  try {
    const db = await mongoose.createConnection('mongodb+srv://akdis0302:ak.dis0302@databasersvp.oboiv.mongodb.net/VID?retryWrites=true&w=majority&appName=databaseRSVP');
    console.log('Mongodb connected to Vid');
    otherDb = db;

    const otherDatabaseSchema = new mongoose.Schema({
      Name: {
        type: String,
        required: true
      },
      AddharCard: {
        type: String,
        required: true,
        unique: true
      }
    });

    OtherDatabase = otherDb.model('otherdatabase', otherDatabaseSchema);
    module.exports = { OtherDatabase };
  } catch (err) {
    console.log('monogodb connection error to Vid', err);
  }
}

init();