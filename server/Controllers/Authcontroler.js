const mongoose = require('mongoose');
const UserModel = require("../Models/User");

let OtherDatabase;

async function init() {
  const data = await require('../mongodb');
  OtherDatabase = data.OtherDatabase;
}

async function Regis(req, res) {
  try {
    await init(); // Wait for init to complete
    const { Username, AadharCard,Email, Password, ConfirmPassword} = req.body;
      
    const aadharData = await OtherDatabase.findOne({ AadharCard });
    if (!aadharData) {
      console.log('Aadhar data not found for : ', AadharCard)
      return res.status(400)
        .json({
          message: 'Aadhar data not found in other database',
          success: false
        });
    }

    // Create new user
    const userModel = new UserModel({ Username, AadharCard,Email, Password, ConfirmPassword });
    await userModel.save();
    res.status(201)
      .json({
        message: 'User created successfully',
        success: true
      });
  } catch (err) {
    console.error(err);
    res.status(500)
      .json({
        message: 'Error creating user',
        success: false
      });
  }
}

async function Login(req, res) {
  try {
    await init(); // Wait for init to complete
    const { Username, Password } = req.body;
      
    const user = await UserModel.findOne({ Username, Password });
    if (!user) {
      return res.status(401)
        .json({
          message: 'Invalid username or password',
          success: false
        });
    }

    res.status(200)
      .json({
        message: 'User logged in successfully',
        success: true
      });
  } catch (err) {
    console.error(err);
    res.status(500)
      .json({
        message: 'Error logging in user',
        success: false
      });
  }
}

module.exports = { Regis, Login };