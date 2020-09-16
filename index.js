"use strict";

const express = require('express');
const dotenv = require('dotenv');
const {sign, verify} = require('jsonwebtoken');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');
const formidable = require('formidable');

const Router = require('./Routes/index');
const Routers = require('./Routes/index');

dotenv.config();
const app = express();
mongoose.connect(
  "mongodb://localhost:27017/traffic",
  { 
    useNewUrlParser:true, 
    useUnifiedTopology: true, 
    useFindAndModify:false, 
    useCreateIndex: true
  }
)



app.use(bodyPaser.json())
app.use(express.urlencoded({ extended: true }));




const port = 3000;




const key=async()=>{
  try { 
//     const see = sign({data: 'test'}, process.env.accessKey);
//     console.log(see.split('.')[1], 0);
//     let b = Buffer.from( see.split('.')[1], 'base64');
//     console.log(b.toString('binary'), 2);

//     const check = verify(see, process.env.accessKey);
//     return console.log(check, 'res');
const data= {
  fullName: 'ade',
  phone: '123456789123',
  email: 'mail@mail.ss',
  password: '123456',
  country: 'pakistan',
  CNIC: '1234467893214',
  userType: 'traffic-warden',
  Gender: 'Female',
  city:'city'
}

    const val = await valid.testUser(data);
    console.log(val, 20);
  } catch (e) {
    
   return console.log(e, 20, 20);
  }

}

const mid=(req, res, next)=>{
  console.log(Object.keys(req))
  
  req.body['tt'] = 25;
  next();
}
// const A =  require('./Routes/a');
// const  B = require('./Routes/b');
// app.use('/a', A);
// app.use('/b', B);

app.use('/api', Routers);

app.post('/', mid, function (req, res) {

  // const form = new formidable.IncomingForm();
  // form.parse(req, (err, fields, files)=>{
  //   console.log(fields, files)
  // }
  // )
  
  req.params.tt = 25;
  res.send([req.body, req.params, req.query] || 'hello world')
})

app.listen(process.env.port || port, (err)=>{
  if(!err) return console.log('serving on port 3000');
  return console.log(`oops there is error ${err}`);
})