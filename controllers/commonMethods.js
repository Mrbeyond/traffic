"use strict";

const commonMethods = {
  successReturn: (res, data)=>{
    return res.status(200).json({success: true, data: data});
  },

  errorReturn: (res)=>{
    return res.status(200).json({success: false, Error: 'Intruder'});
  },

  serverErrorReturn: (res)=>{
   return res.status(500).json({success: false, Error: 'Internal Server Error'});
  },

  notFoundReturn: (res, err)=>{
    return res.status(404).json({success: false, Error: 'Page Not Found'});
  }

}

module.exports = commonMethods;