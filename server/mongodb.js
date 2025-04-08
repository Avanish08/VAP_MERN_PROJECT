const mongoose = require('mongoose');

let otherDb;
let OtherDatabase;

mongoose.connect('')
  .then(() => {
    console.log('Mongodb connected to register');
  })
  .catch((err) => {
    console.log('monogodb connection error to register', err);
  });

async function init() {
  try {
    const db = await mongoose.createConnection('');
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
    
    });

    OtherDatabase = otherDb.model('otherdatabase', otherDatabaseSchema);
    module.exports = { OtherDatabase };
  } catch (err) {
    console.log('monogodb connection error to Vid', err);
  }
}

init();
