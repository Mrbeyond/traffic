"use strict";

const {Schema} = require('mongoose');

const userSchema = new Schema({

  fullName: {
    type: String, 
    required: true, 
    trim:true, 
    minlength: 3
  },

  email: {
    type:String, 
    required: true, 
    unique:true, 
    trim:true,
    validate:{
      validator:(value ) => {return (/^([a-zA-Z0-9_-]*)(\@)([a-zA-Z0-9_-]+)(\.)([a-zA-Z_-]+)$/).test(value);},
      message: 'Please use a valid email'
   }},

   phone: {
		type: String,
		unique: true,
		required: true,
  },
  
	city: {
		type: String,
		required: true,
	},

	country: {
		type: String,
		required: true,
  },
  
	CNIC: {
		type: String,
		required: true,
	},

	Gender: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true
  },
  
	userType: {
		type: String,
		enum: Array['traffic-warden', 'admin'],
		default: 'admin',
		required:false
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

/** Used inside the index.js being converted to user model  for table users */

module.exports = userSchema;