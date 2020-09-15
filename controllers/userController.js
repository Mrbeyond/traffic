"use strict";

const {sign} = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {user} = require('./../models/index');
const commomMethods = require('./commonMethods');


const hash = process.env.accesskey;

const userController = {

  /** The controller for user signup */
  creatUser: async (req, res) => {
    try {  
      const { password } = req.body;
     const User = new user(req.body);
      let new_user;
      try {
       new_user = await User.save();
      } catch (e) {
       console.log(e);
       return commomMethods.serverErrorReturn(res);
      }

      let {_id} = new_user;
      let token = sign({data: _id}, hash);
      return commomMethods.successReturn(res, {data: new_user, token: token});  
    } catch (err) {
      console.log(e)
      return commomMethods.serverErrorReturn(res);
    }
  }
}



const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body

		const user = await findUser(username);
		if (user) {
			const compare = await comparePassword(password, user.email)
			if (compare) {
				const payload = {
					userId: user._id,
					email: user.email,
					userType: user.userType
				}
				const jwtToken = await createNewToken(payload)
				/* Next line is added by beyond to confirm if the token is generated*/
				console.log('jwtToken: ', jwtToken); // to be removed

				return res.status(200).json({
					status: 200,
					message: LOGIN_SUCCESS,
					data: {
						id:user._id,
						fullName: user.fullName,
						email: user.email,
						phone: user.phone,
						userType: user.userType,
						city: user.city,
						country:user.country,
						CNIC:user.CNIC_number,
						createdAt: user.createdAT
					}, jwtToken
				})
			}
			return res.status(401).json({
				status: 401,
				message: INVALID_USER
			})
		}
		return res.status(401).json({
			status: 401,
			message: INVALID_USER
		})
	} catch (error) {
		return res.status(500).json({
			status: 500,
			message: SERVER_ERROR
		})
	}
}
 const logOut = (req, res) => {
	try {
	  return res.status(200).json({
		message: 'Logout was successful'
	  });
	} catch (error) {
	  return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
	}
};


module.exports = userController;