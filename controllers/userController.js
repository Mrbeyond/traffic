"use strict";

require('dotenv').config();
const {sign} = require('jsonwebtoken');
const {hash, compare} = require('bcrypt');
const {user} = require('./../models/index');
const commomMethods = require('./commonMethods');
const commonMethods = require('./commonMethods');


const key = process.env.accesskey;

const userController = {

  /** The controller for user signup */
  creatUser: async (req, res) => {
    try {
      const { password } = req.body;

      /** Encrypt the password here */
      let encryptedKey= await hash(password, 10);
      console.log(encryptedKey);

      /** mutate the encryoted key back into the request body */
      req.body.password = encryptedKey;

      /** Invoking the user model */
      const User = new user(req.body);
      let new_user;
      try {
       new_user = await User.save();
      } catch (e) {
       console.log(e);
       return commomMethods.serverErrorReturn(res);
      }

      /** destructure out the user id and make token out of it */
      let {_id} = new_user;
      let token = sign({data: _id}, key);
      delete new_user._doc.password;
      delete new_user._doc.__v;
      return commomMethods.successReturn(res, {data: new_user, token: token}); 
    } catch (err) {
      console.log(err, 500)
      return commomMethods.serverErrorReturn(res);
    }
  },

  login: async(req, res)=>{
    try {
      /** get the user by email */
      const User = await user.findOne({email: req.body.email});
      /** Confirm if the password is correct */

      let checkPassword = await compare(req.body.password, User.password);
      if(!checkPassword) return commonMethods.errorReturn(res, "User Not Found");
       /** destructure out the user id and make token out of it */
       let {_id} = User;
       let token = sign({data: _id}, key);
       delete User._doc.password;
       delete User._doc.__v;
       console.log(User);
       return commomMethods.successReturn(res, {data: User, token: token});
    
    } catch (e) {
      return commomMethods.serverErrorReturn(res);
    }
  },

  logOut: async(req, res)=>{
    try {
      return commonMethods.successReturn(res, 'Successful');    
    } catch (e) {
      return commomMethods.serverErrorReturn(res);
    }
  }
}




module.exports = userController;