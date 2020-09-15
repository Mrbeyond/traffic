"use strict";
const {Schema} = require('mongoose');
const objectId = Schema.Types.ObjectId;


const reportSchema = new Schema({
  userId: {
    type: objectId,
    required: true,
  },

  longitude: {
    type: Number,
    required: true,
  },

  latitude: {
    type: Number,
    required:true
  },

  location: {
    type: String,
    required:true
  },

  trafficType: {
    type: String,
    enum: ['Road block', 'Road accident', 'Road maintenance', 'Vip movement'],
    required: true
    },

  congestionDetails:{
    type: String,
    required: true,
  },

  reportedBy:{
    type: String,
    required: true,
  },

  congestionTime: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now()
  },

  updatedAt: {
    type: Date,
    default: Date.now()
  }
})


/** Used inside the index.js being converted to report model  for table reports */

module.exports = reportSchema;
