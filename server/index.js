const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { required } = require('joi');
const AuthRoute = require('./Routers/Authroute')
const NewsRoutes = require('./Routers/NewsRoutes'); 
const trainScheduleRoutes = require('./Routers/TrainRoutes');
const busScheduleRoutes = require('./Routers/BusRoutes');

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
app.use('/auth',NewsRoutes);
app.use('/auth', trainScheduleRoutes);
app.use('/auth', busScheduleRoutes);



app.listen(PORT,()=>
{
  console.log(`Server is running on ${PORT}`)
})