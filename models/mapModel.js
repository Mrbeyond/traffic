"use strict";
const {Schema} = require('mongoose');


const mapSchema = new Schema({
	latitude: {
		type: String,
		required:true
  },
  
	longitude: {
		type: String,
		required:true
  },
  
	congestionType: {
		type: String,
		required:true
  },
  
	location: {
		type: String,
		required:true
  },
  
	trafficDetails: {
		type: String,
		required:true
  },
  
	alternativeRoute: {
		type: String,
		required:true
  },
  
	startedTime: {
		type: String,
		required:true
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

/** Used inside the index.js being converted to map model  for table maps */
module.exports = mapSchema;