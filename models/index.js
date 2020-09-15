"use strict";

const mongoose = require('mongoose');

/** All Schemas are imported here */
const userSchema = require('./userModel');
const reportSchema = require('./reportModel');
const mapSchema = require('./mapModel');

/** Schemas are convertesd to models here 
 * and are exported individualy to support destructuring 
 * they are to be used in the controllers
 * */
module.exports = {
  user : mongoose.model('users', userSchema),

  report : mongoose.model('reports', reportSchema),

  map : mongoose.model('maps', mapSchema),
}






