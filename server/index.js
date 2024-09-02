const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { required } = require('joi');
const AuthRoute = require('./Routers/Authroute')

require('./Models/mongodb')
require('dotenv').config();
const PORT=process.env.PORT;

app.get('/ping',(req,res)=>
{
  res.send('pong');
})
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRoute);


app.listen(PORT,()=>
{
  console.log(`Server is running on ${PORT}`)
})